import { drizzle, type BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { DB_URL } from '$env/static/private';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';

const sqlite = new Database(DB_URL);
export const db: BetterSQLite3Database = drizzle(sqlite);
migrate(db, { migrationsFolder: 'drizzle' });
