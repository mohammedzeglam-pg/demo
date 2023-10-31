import { relations } from 'drizzle-orm';
import { index, integer, sqliteTable, text, uniqueIndex } from 'drizzle-orm/sqlite-core';

export const clients = sqliteTable(
	'clients',
	{
		id: integer('id').primaryKey(),
		hostname: text('hostname'),
		scanid: text('scan_id'),
		thorVersion: text('thor_version'),
		adminRights: text('admin_rights', { enum: ['yes', 'no'] }),
		platform: text('platform'),
		cpuCount: integer('cpu_count'),
		memory: integer('memory'),
		ip: text('ip')
	},
	(table) => {
		return {
			hostnameIdx: uniqueIndex('hostname_idx').on(table.hostname)
		};
	}
);

export const clientsRelation = relations(clients, ({ many }) => {
	return {
		logs: many(logs)
	};
});

export const logs = sqliteTable(
	'logs',
	{
		accessed: text('accessed'),
		arch: text('arch'),
		arguments: text('arguments'),
		author: text('author', { mode: 'json' }).$type<string[]>(),
		buildNumber: text('build_number'),
		cmd: text('cmd'),
		command: text('command'),
		company: text('company', { mode: 'json' }).$type<string[]>(),
		connectionCount: integer('connection_count'),
		context: text('context'),
		created: text('created', { mode: 'json' }).$type<string[]>(),
		desc: text('desc', { mode: 'json' }).$type<string[]>(),
		duration: text('duration'),
		endTime: text('end_time'),
		entries: integer('entries'),
		entry: text('entry'),
		eventId: integer('event_id'),
		eventLevel: integer('event_level'),
		eventTime: text('event_time'),
		exists: text('exists', { mode: 'json' }).$type<string[]>(),
		expires: text('expires'),
		ext: text('ext'),
		file: text('file', { mode: 'json' }).$type<string[]>(),
		firstbytes: text('firstbytes', { mode: 'json' }).$type<string[]>(),
		hostname: text('hostname').notNull(),
		id: integer('id').primaryKey(),
		imageName: text('image_name'),
		imagePath: text('image_path'),
		imphash: text('imphash', { mode: 'json' }).$type<string[]>(),
		installedOn: text('installed_on'),
		internalName: text('internal_name', { mode: 'json' }).$type<string[]>(),
		ip: text('ip'),
		launchString: text('launch_string'),
		legalCopyright: text('legal_copyright', { mode: 'json' }).$type<string[]>(),
		level: text('level', { enum: ['Alerts', 'Warnings', 'Notice', 'Info', 'Errors'] }).notNull(),
		license: text('license'),
		listenPorts: text('listenPorts'),
		location: text('location'),
		logAccessed: text('log_accessed'),
		logCreated: text('log_created'),
		logModified: text('log_modified'),
		logVersion: integer('log_version').notNull(),
		matched: text('matched', { mode: 'json' }).$type<
			{ context: string; data: string; offset: number }[]
		>(),
		matchedStrings: text('match_string', { mode: 'json' }).$type<
			{ context: string; data: string; offset: number }[]
		>(),
		md5: text('md5', { mode: 'json' }).$type<string[]>(),
		message: text('message').notNull(),
		modified: text('modified'),
		module: text('module').notNull(),
		modules: text('modules'),
		name: text('name'),
		orignalName: text('original_name', { mode: 'json' }).$type<string[]>(),
		parent: text('parent'),
		path: text('path'),
		perm: text('perm'),
		permissions: text('permissions'),
		pid: integer('pid'),
		port: integer('port'),
		ppid: integer('ppid'),
		proc: text('proc'),
		processName: text('process_name'),
		product: text('product', { mode: 'json' }).$type<string[]>(),
		reason: text('reason', { mode: 'json' }).$type<string[]>(),
		reasonsCount: integer('reasons_count'),
		ref: text('ref', { mode: 'json' }).$type<string[]>(),
		reference: text('reference'),
		rip: text('rip'),
		rport: integer('rport'),
		rule: text('rule'),
		scanid: text('scan_id').notNull(),
		scannedElements: integer('scanned_elements'),
		scanner: text('scanner'),
		score: integer('score'),
		session: text('session'),
		sha1: text('sha1', { mode: 'json' }).$type<string[]>(),
		sha256: text('sha256', { mode: 'json' }).$type<string[]>(),
		sigclass: text('sigclass', { mode: 'json' }).$type<string[]>(),
		sigtype: text('sigtype', { mode: 'json' }).$type<string[]>(),
		size: text('size', { mode: 'json' }).$type<number[]>(),
		starts: text('starts'),
		startTime: text('start_time'),
		subscore: text('subscore', { mode: 'json' }).$type<number[]>(),
		tags: text('tags', { mode: 'json' }).$type<string[]>(),
		time: text('time').notNull(),
		user: text('user'),
		valid: text('valid'),
		version: text('version'),
		clientId: integer('client_id').references(() => clients.id)
	},
	(table) => {
		return {
			levelIdx: index('level_idx').on(table.level),
			moduleIdx: index('module_idx').on(table.module)
		};
	}
);
export const logsRelation = relations(logs, ({ one }) => {
	return {
		client: one(clients, {
			fields: [logs.clientId],
			references: [clients.id]
		})
	};
});
