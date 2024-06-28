
import { book } from './types/types';

const API_URL = 'http://localhost:5000/api/books';

export const fetchBooks = async (): Promise<book[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }
  return response.json();
};

export const addBook = async (newBook: book): Promise<book> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newBook),
  });
  if (!response.ok) {
    throw new Error('Failed to add book');
  }
  return response.json();
};

export const updateBook = async (id: number, updatedBook: book): Promise<book> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedBook),
  });
  if (!response.ok) {
    throw new Error('Failed to update book');
  }
  return response.json();
};

export const deleteBook = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete book');
  }
};
