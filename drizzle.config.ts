import type { Config } from 'drizzle-kit';

export default {
	out: 'drizzle',
	schema: './src/lib/server/db/schema.ts',
	driver: 'better-sqlite',
	dbCredentials: {
		url: ':memory:'
	}
} satisfies Config;
