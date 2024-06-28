// // src/services/bookService.ts

// import axios from 'axios';
// import { book } from '../types/types';

// const API_BASE_URL = 'http://localhost:YOUR_PORT/api/books';

// export const fetchBooks = async (): Promise<book[]> => {
//   const response = await axios.get(API_BASE_URL);
//   return response.data;
// };

// export const fetchBookById = async (id: number): Promise<book> => {
//   const response = await axios.get(`${API_BASE_URL}/${id}`);
//   return response.data;
// };

// export const createBook = async (book: book): Promise<book> => {
//   const response = await axios.post(API_BASE_URL, book);
//   return response.data;
// };

// export const updateBook = async (id: number, book: book): Promise<book> => {
//   const response = await axios.put(`${API_BASE_URL}/${id}`, book);
//   return response.data;
// };

// export const deleteBook = async (id: number): Promise<void> => {
//   await axios.delete(`${API_BASE_URL}/${id}`);
// };

// src/apiClient.ts
const API_URL = 'http://localhost:3000/api/books';

interface Book {
  id: number;
  title: string;
}

export const fetchBooks = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }
  return response.json();
};

export const addBook = async (book) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });
  if (!response.ok) {
    throw new Error('Failed to add book');
  }
  return response.json();
};

export const updateBook = async (id, book) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });
  if (!response.ok) {
    throw new Error('Failed to update book');
  }
  return response.json();
};

export const deleteBook = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete book');
  }
};
