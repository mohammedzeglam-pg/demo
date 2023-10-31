import { clients, logs } from '$lib/server/db/schema';
import { ClientLogSchema } from '$lib/trpc/schema';
import { t } from '$lib/trpc/t';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { z } from 'zod';
export const router = t.router({
	getById: t.procedure.input(z.number()).query(async ({ input, ctx }) => {
		return ctx.db.query.clients.findFirst({
			where: (clients, { eq }) => eq(clients.id, input),
			with: {
				logs: true
			}
		});
	}),
	list: t.procedure.query(async ({ ctx }) => {
		return ctx.db.query.clients.findMany({
			with: {
				logs: {
					columns: { level: true }
				}
			}
		});
	}),
	add: t.procedure.input(ClientLogSchema).mutation(async ({ input, ctx }) => {
		const values = {
			hostname: input.hostname,
			scanid: input.scanid,
			...(input.message.includes('Thor Version')
				? { thorVersion: input.message.split(' ')[2] }
				: {}),
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
		return ctx.db.transaction(async (tx) => {
			const { id } = tx
				.insert(clients)
				.values(values)
				.onConflictDoUpdate({ target: clients.hostname, set: values })
				.returning({ id: clients.id })
				.get();
			return await tx.insert(logs).values({ ...input, clientId: id });
		});
	})
});

export type Router = typeof router;
export type RouterInputs = inferRouterInputs<Router>;
export type RouterOutputs = inferRouterOutputs<Router>;
