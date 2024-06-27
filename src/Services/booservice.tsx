// src/services/bookService.ts

import axios from 'axios';
import { book } from '../types/types';

const API_BASE_URL = 'http://localhost:YOUR_PORT/api/books';

export const fetchBooks = async (): Promise<book[]> => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const fetchBookById = async (id: number): Promise<book> => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

export const createBook = async (book: book): Promise<book> => {
  const response = await axios.post(API_BASE_URL, book);
  return response.data;
};

export const updateBook = async (id: number, book: book): Promise<book> => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, book);
  return response.data;
};

export const deleteBook = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/${id}`);
};
