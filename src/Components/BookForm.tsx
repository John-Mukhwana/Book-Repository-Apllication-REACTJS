// src/components/BookForm.tsx
import React, { useRef } from 'react';
import { book } from '../types/types';
import '../styles/BookForm.scss';

interface BookFormProps {
  onSubmit: (book: book) => void;
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<number>(Date.now());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newBook: book = {
      id: Number(idRef.current),
      title: titleRef.current?.value || '',
      author: authorRef.current?.value || '',
      year: parseInt(yearRef.current?.value || '0'),
    };

    onSubmit(newBook);

    if (titleRef.current) titleRef.current.value = '';
    if (authorRef.current) authorRef.current.value = '';
    if (yearRef.current) yearRef.current.value = '';
    idRef.current = Date.now();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" ref={titleRef} required />
      <input type="text" placeholder="Author" ref={authorRef} required />
      <input type="number" placeholder="Year" ref={yearRef} required />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
