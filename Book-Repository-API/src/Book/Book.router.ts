// // src/routes/book.router.ts
// import { Hono } from "hono";
// import { listBooks, getBook, createBook, updateBook, deleteBook } from "../Book/Book.controller";
// import { zValidator } from "@hono/zod-validator";
// import { bookSchema } from '../validators';
// export const bookRouter = new Hono();

// bookRouter.get("/books", listBooks);
// bookRouter.get("/books/:id", getBook);
// bookRouter.post("/books", zValidator('json', bookSchema, (result, c) => {
//     if (!result.success) {
//         return c.json(result.error, 400);
//     }
// }), createBook);
// bookRouter.put("/books/:id", updateBook);
// bookRouter.delete("/books/:id", deleteBook);

// Book.router.ts
import { Hono } from "hono";
import { createBook, listBooks, getBook, updateBook, deleteBook } from "./Book.controller";
import { zValidator } from "@hono/zod-validator";
import { bookSchema } from "../validators";

export const bookRouter = new Hono();

// Get all books
bookRouter.get("/books", listBooks);

// Get a single book by ID
bookRouter.get("/books/:id", getBook);

// Create a new book
bookRouter.post("/books", zValidator('json', bookSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), createBook);

// Update an existing book by ID
bookRouter.put("/books/:id", updateBook);

// Delete a book by ID
bookRouter.delete("/books/:id", deleteBook);
