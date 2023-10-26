import { z } from 'zod';
export const LogSchema = z
	.object({
		time: z.string().datetime(),
		hostname: z.string(),
		level: z.string(),
		module: z.string(),
		message: z.string(),
		scanid: z.string(),
		log_version: z.number(),
		// optional
		rule: z.string().optional(),
		ext: z.string().optional(),
		installed_on: z.string().optional(),
		sha256: z.string().optional(),
		sha256_3: z.string().optional(),
		owner: z.string().optional(),
		ref_1: z.string().optional(),
		entries: z.string().optional(),
		internal_name: z.string().optional(),
		internal_name_1: z.string().optional(),
		rport: z.string().optional(),
		sha1_1: z.string().optional(),
		legal_copyright: z.string().optional(),
		legal_copyright_1: z.string().optional(),
		owner_2: z.string().optional(),
		type_2: z.string().optional(),
		firstbytes_2: z.string().optional(),
		event_time: z.string().datetime({ offset: true }).optional(),
		imphash_2: z.string().optional(),
		arch: z.string().optional(),
		permissions: z.string().optional(),
		build_number: z.string().optional(),
		alerts: z.number().optional(),
		parent: z.string().optional(),
		created_2: z.string().optional(),
		product_3: z.string().optional(),
		entry: z.string().optional(),
		command: z.string().optional(),
		created_1: z.string().optional(),
		md5_2: z.string().optional(),
		type: z.string().optional(),
		imphash_3: z.string().optional(),
		exists_5: z.string().optional(),
		listen_ports: z.string().optional(),
		ppid: z.number().optional(),
		firstbytes_3: z.string().optional(),
		original_name: z.string().optional(),
		original_name_4: z.string().optional(),
		image_path: z.string().optional(),
		sha1_4: z.string().optional(),
		legal_copyright_2: z.string().optional(),
		duration: z.string().optional(),
		ip: z.string().ip().optional(),
		author: z.string().optional(),
		author_1: z.string().optional(),
		created: z.string().optional(),
		product_1: z.string().optional(),
		end_time: z.string().datetime({ offset: true }).optional(),
		desc_4: z.string().optional(),
		firstbytes_1: z.string().optional(),
		file_3: z.string().optional(),
		legal_copyright_4: z.string().optional(),
		reasons_count: z.number().optional(),
		exists_2: z.string().optional(),
		size_4: z.number().optional(),
		owner_3: z.string().optional(),
		owner_4: z.string().optional(),
		sha1: z.string().optional(),
		desc_2: z.string().optional(),
		rip: z.string().optional(),
		scanned_elements: z.string().optional(),
		connection_count: z.number().optional(),
		size_2: z.number().optional(),
		company: z.string().optional(),
		company_1: z.string().optional(),
		tags: z.string().optional(),
		tags_1: z.string().optional(),
		start_time: z.string().optional(),
		session: z.string().optional(),
		version: z.string().optional(),
		imphash: z.string().optional(),
		imphash_1: z.string().optional(),
		sigclass: z.string().optional(),
		sigclass_1: z.string().optional(),
		sha1_2: z.string().optional(),
		owner_5: z.string().optional(),
		notices: z.number().optional(),
		location: z.string().optional(),
		legal_copyright_3: z.string().optional(),
		exists_4: z.string().optional(),
		firstbytes: z.string().optional(),
		company_3: z.string().optional(),
		process_name: z.string().optional(),
		starts: z.string().optional(),
		file_4: z.string().optional(),
		path: z.string().optional(),
		event_level: z.number().optional(),
		internal_name_2: z.string().optional(),
		matched_1: z.string().optional(),
		type_3: z.string().optional(),
		internal_name_3: z.string().optional(),
		file_5: z.string().optional(),
		original_name_1: z.string().optional(),
		type_5: z.string().optional(),
		accessed: z.string().optional(),
		created_5: z.string().optional(),
		proc: z.string().optional(),
		size: z.string().optional(),
		port: z.string().optional(),
		pid: z.number().optional(),
		sha256_2: z.string().optional(),
		ruledate_1: z.string().optional(),
		rulename_1: z.string().optional(),
		imphash_4: z.string().optional(),
		valid: z.string().optional(),
		desc: z.string().optional(),
		desc_1: z.string().optional(),
		company_4: z.string().optional(),
		created_4: z.string().optional(),
		type_4: z.string().optional(),
		modified: z.string().optional(),
		sha1_3: z.string().optional(),
		exists: z.string().optional(),
		exists_1: z.string().optional(),
		md5_3: z.string().optional(),
		product_2: z.string().optional(),
		subscore: z.number().optional(),
		subscore_1: z.number().optional(),
		size_1: z.number().optional(),
		perm: z.string().optional(),
		original_name_2: z.string().optional(),
		product_4: z.string().optional(),
		expires: z.string().optional(),
		file: z.string().optional(),
		owner_1: z.string().optional(),
		original_name_3: z.string().optional(),
		sha256_1: z.string().optional(),
		size_3: z.number().optional(),
		score: z.number().optional(),
		scanner: z.string().optional(),
		type_1: z.string().optional(),
		file_1: z.string().optional(),
		file_2: z.string().optional(),
		created_3: z.string().optional(),
		company_2: z.string().optional(),
		warnings: z.number().optional(),
		license: z.string().optional(),
		md5: z.string().optional(),
		arguments: z.string().optional(),
		internal_name_4: z.string().optional(),
		sha256_4: z.string().optional(),
		errors: z.number().optional(),
		sigtype: z.string().optional(),
		sigtype_1: z.string().optional(),
		md5_4: z.string().optional(),
		image_name: z.string().optional(),
		desc_3: z.string().optional(),
		reason_1: z.string().optional(),
		event_id: z.number().optional(),
		exists_3: z.string().optional(),
		name: z.string().optional(),
		firstbytes_4: z.string().optional(),
		launch_string: z.string().optional(),
		md5_1: z.string().optional(),
		product: z.string().optional()
	})
	.transform((data) => {
		return mapToArray(data, [
			'sha256',
			'md5',
			'sigtype',
			'sigclass',
			'file',
			'firstbytes',
			'company',
			'size',
			'created',
			'author',
			'imphash',
			'exists',
			'desc',
			'type',
			'sha1',
			'product',
			'subscore',
			'legal_copyright',
			'owner',
			'tags',
			'original_name',
			'internal_name'
		]);
	});

export type LogSchema = z.infer<typeof LogSchema>;

export function mapToArray<T extends object, K extends (keyof T & string)[]>(
	obj: T,
	startsWith: K
) {
	const ret = {};

	for (const prefix of startsWith) {
		const keys = Object.keys(obj).filter((k) => k.startsWith(prefix)) as (keyof T & string)[];
		const values = keys.map((k) => {
			const value = obj[k];
			delete obj[k];
			return value;
		});
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		ret[prefix] = values;
	}

	return { ...ret, ...obj };
}