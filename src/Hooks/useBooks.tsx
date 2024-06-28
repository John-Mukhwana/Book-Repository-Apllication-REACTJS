
// src/hooks/useBooks.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { book } from '../types/types';

const useBooks = () => {
  const [books, setBooks] = useState<book[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  const addBook = (newBook: book) => {
    axios.post('http://localhost:5000/api/books', newBook)
      .then(response => {
        setBooks(prevBooks => [...prevBooks, response.data]);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const updateBook = (id: number, updatedBook: book) => {
    axios.put(`http://localhost:5000/api/books/${id}`, updatedBook)
      .then(response => {
        setBooks(prevBooks => prevBooks.map(book => book.id === id ? response.data : book));
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const deleteBook = (id: number) => {
    axios.delete(`http://localhost:5000/api/books/${id}`)
      .then(() => {
        setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return { books, error, addBook, updateBook, deleteBook };
};

export default useBooks;