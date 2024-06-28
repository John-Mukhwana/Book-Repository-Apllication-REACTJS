
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/BookForm.scss';
import { fetchBooks } from '../apiClient';

const BookForm = ({ }: { onSubmit: (book: { id: number; title: string; author: string; year: number }) => void }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const yearNumber = year ? parseInt(year, 10) : 1999; // Default year if not specified

    const newBook = { title, author, year: yearNumber };

    try {
      console.log(newBook)
       await axios.post('http://localhost:5000/api/books', newBook,{headers:{'Content-Type': 'application/json'}});
      // onSubmit(response.data); // Use the book returned from the backend
    
      fetchBooks();
      window.location.reload();
    } catch (error) {
      console.error('Failed to add book:', error);
    }

    // Reset form fields
    setTitle('');
    setAuthor('');
    setYear('');
  };

  return (
    <form onSubmit={handleSubmit} className="BookForm">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <input
        type="text"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Year"
      />
      <button type="submit" >Submit</button>
    </form>
  );
};

export default BookForm;
