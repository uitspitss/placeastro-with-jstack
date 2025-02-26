import { index, sqliteTable, text, uniqueIndex } from 'drizzle-orm/sqlite-core';
import { timestamps } from './columns.helpers';

export const placeImages = sqliteTable(
  'place_images',
  {
    id: text().primaryKey().notNull(),
    url: text().notNull(),
    credits: text().notNull(),
    sourceUrl: text('source_url').notNull(),
    catalogue: text().$type<'M' | 'NGC'>().notNull(),
    catalogueNumber: text('catalogue_number').notNull(),
    creatorId: text('creator_id').references(() => users.id),
    ...timestamps,
  },
  (table) => [
    index('catalogue_idx').on(table.catalogue),
    index('catalogue_number_idx').on(table.catalogueNumber),
  ],
);

export const users = sqliteTable(
  'users',
  {
    id: text().primaryKey().notNull(),
    email: text().notNull(),
    name: text(),
  },
  (table) => [uniqueIndex('email_idx').on(table.email)],
);
