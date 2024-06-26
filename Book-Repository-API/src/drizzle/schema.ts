// schema.ts
import { integer, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const books = pgTable('books', {
  id: serial('id').primaryKey(),
  title: varchar('title').notNull(),
  author: varchar('author').notNull(),
  year: integer('year').notNull(),
});
