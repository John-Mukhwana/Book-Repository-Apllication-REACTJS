import { z } from 'zod';

export const bookSchema = z.object({
    title: z.string().min(1, "Title is required"),
    author: z.string().min(1, "Author is required"),
    year: z.number().int().min(1000, "Year must be a valid four-digit number").max(new Date().getFullYear(), "Year cannot be in the future"),
});