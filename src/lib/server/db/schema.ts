import { integer, sqliteTable, text, uniqueIndex } from 'drizzle-orm/sqlite-core';

export interface Log {
	time: string;
	hostname: string;
	level: 'Alerts' | 'Warnings' | 'Notice' | 'Info' | 'Errors';
	module: string;
	message: string;
	scanid: string;
	log_version: number;
	parent: string;
	command: string;
	listen_ports: string;
	ppid: number;
	connection_count: number;
	session: string;
	process_name: string;
	path: string;
	pid: number;
	sha256: string[];
	md5: string[];
	exists: string[];
	company: string[];
	file: string[];
	internal_name: string[];
	original_name: string[];
	legal_copyright: string[];
	owner: string[][];
	product: string[];
	sha1: string[];
	type: string[];
	size: number[];
	created: string[];
	tags: string[],
	desc: string[];
	imphash: string[];
	firstbytes: string[];
	rule: string
}

export const logs = sqliteTable(
	'logs',
	{
		id: integer('id').primaryKey(),
		hostname: text('hostname'),
		scanId: text('scan_id'),
		thorVersion: text('thor_version'),
		adminRights: text('admin_rights', { enum: ['yes', 'no'] }),
		platform: text('platform'),
		cpuCount: integer('cpu_count'),
		memory: integer('memory'),
		ip: text('ip'),
		log: text('log', { mode: 'json' }).$type<Log[]>().notNull()
	},
	(table) => {
		return {
			hostnameIdx: uniqueIndex('hostname_idx').on(table.hostname)
		};
	}
);
