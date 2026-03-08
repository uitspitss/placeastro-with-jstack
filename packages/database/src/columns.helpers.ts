import { sql } from 'drizzle-orm';
import { text } from 'drizzle-orm/sqlite-core';

export const timestamps = {
  createdAt: text('created_at')
    .notNull()
    .default(sql`(current_timestamp)`)
    .$onUpdateFn(() => sql`(current_timestamp)`),
  updatedAt: text('updated_at').notNull().default(sql`(current_timestamp)`),
  deletedAt: text('deleted_at'),
};

export function generateUniqueString(length = 12): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let uniqueString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    uniqueString += characters[randomIndex];
  }
  return uniqueString;
}
