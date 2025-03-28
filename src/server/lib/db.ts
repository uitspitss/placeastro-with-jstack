import { drizzle } from 'drizzle-orm/d1';

export const createDrizzle = (db: D1Database) => drizzle(db);
