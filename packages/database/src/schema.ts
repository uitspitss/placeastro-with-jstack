import { index, sqliteTable, text } from 'drizzle-orm/sqlite-core';
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
    ...timestamps,
  },
  (table) => [
    index('catalogue_idx').on(table.catalogue),
    index('catalogue_number_idx').on(table.catalogueNumber),
  ],
);
