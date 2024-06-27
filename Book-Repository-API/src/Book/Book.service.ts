// src/services/book.service.ts
import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { TIBook, TSBook, BooksTable } from "../drizzle/schema";

export const booksService = async (limit?: number): Promise<TSBook[] | null> => {
    if (limit) {
        return await db.query.BooksTable.findMany({
            limit: limit
        });
    }
    return await db.query.BooksTable.findMany();
}

export const getBookService = async (id: number): Promise<TIBook | undefined> => {
    return await db.query.BooksTable.findFirst({
        where: eq(BooksTable.id, id)
    });
}

export const createBookService = async (book: TIBook) => {
    await db.insert(BooksTable).values(book);
    return "Book created successfully";
}

export const updateBookService = async (id: number, book: TIBook) => {
    await db.update(BooksTable).set(book).where(eq(BooksTable.id, id));
    return "Book updated successfully";
}

export const deleteBookService = async (id: number) => {
    await db.delete(BooksTable).where(eq(BooksTable.id, id));
    return "Book deleted successfully";
}
