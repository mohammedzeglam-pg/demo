import { db } from '$lib/server/db';
import { logs, type Log } from '$lib/server/db/schema';
import type { Context } from '$lib/trpc/context';
import { initTRPC } from '@trpc/server';
import { LogSchema } from './schema';
import { eq, sql } from 'drizzle-orm';
import { z } from 'zod';

export const t = initTRPC.context<Context>().create();

export const router = t.router({
    getLog: t.procedure.input(z.number()).query(async ({ input }) => {
        return db.select().from(logs).where(eq(logs.id, input)).get();
    }),
    listLogs: t.procedure.query(async () => {
        return db.select().from(logs);
    }),
    addLog: t.procedure.input(LogSchema).mutation(async ({ input }) => {
        return upsertLog(input);
    }),
    deleteLogs: t.procedure.query(async () => {
        return db.delete(logs);
    }),
    countLog: t.procedure.query(async () => {
        return db
            .select({ count: sql<number>`count(*)` })
            .from(logs)
            .get();
    })
});

async function upsertLog(input: LogSchema) {
    const logArray = await db
        .select({
            log: logs.log
        })
        .from(logs)
        .where(eq(logs.hostname, input.hostname))
        .limit(1);
    const values = {
        hostname: input.hostname,
        scanId: input.scanid,
        log: (logArray.length === 1 ? [...logArray[0].log, input] : [input]) as Log[],
        ...(input.message.includes('Thor Version') ? { thorVersion: input.message.split(' ')[2] } : {}),
        ...(input.message.includes('User has admin rights')
            ? { adminRights: input.message.split(' ')[4] as 'yes' | 'no' }
            : {}),
        ...(input.message.includes('Platform DeepEval') ? { platform: input.name! } : {}),
        ...(input.message.includes('CPU Count')
            ? {
                cpuCount: +input.message.split(' ')[2]
            }
            : {}),
        ...(input.message.includes('Memory in Megabyte')
            ? {
                memory: +input.message.split(' ')[3]
            }
            : {}),
        ...(input.message.includes('IP Address 1:')
            ? {
                ip: input.message.split(' ')[3]
            }
            : {})
    };
    return db.insert(logs).values(values).onConflictDoUpdate({ target: logs.hostname, set: values });
}

export type Router = typeof router;
