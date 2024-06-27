// src/schema.ts
import { pgTable, serial, text, integer, primaryKey } from "drizzle-orm/pg-core";

// Books table
export const BooksTable = pgTable("books", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  author: text("author").notNull(),
  year: integer("year").notNull(),
});

// Types
export type TIBook = typeof BooksTable.$inferInsert;
export type TSBook = typeof BooksTable.$inferSelect;
