import { drizzle, type BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { DB_URL } from '$env/static/private';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import * as schema from './schema';
const sqlite = new Database(DB_URL);
export const db: BetterSQLite3Database<typeof schema> = drizzle(sqlite, { schema: schema });
migrate(db, { migrationsFolder: 'drizzle' });
