

// bookController.ts
import  {db}  from '../drizzle/db'
// import db from '../drizzle/db'
import { books } from '../drizzle/schema';
import {client} from '../drizzle/db'

export const getBooks = async () => {
  return db.select().from(books).all();
};

export const getBookById = async (id: number) => {
  return db.select().from(books).where({ id }).one();
};

export const addBook = async (newBook: { title: string; author: string; year: number }) => {
  return db.insert(books).values(newBook).returning('*').one();
};

export const updateBook = async (id: number, updatedBook: { title?: string; author?: string; year?: number }) => {
  return db.update(books).set(updatedBook).where({ id }).returning('*').one();
};

export const deleteBook = async (id: number) => {
  return db.deleteFrom(books).where({ id }).returning('*').one();
};
