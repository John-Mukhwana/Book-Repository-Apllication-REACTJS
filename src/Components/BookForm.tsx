// import React, { useRef } from 'react';
// import { book } from '../types/types';
// import '../styles/BookForm.scss';

// const BookForm = ({ onSubmit }: { onSubmit: (book: book) => void }) => {
//   const titleRef = useRef<HTMLInputElement>(null);
//   const authorRef = useRef<HTMLInputElement>(null);
//   const yearRef = useRef<HTMLInputElement>(null);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const title = titleRef.current?.value || '';
//     const author = authorRef.current?.value || '';
//     const year = yearRef.current ? parseInt(yearRef.current.value, 10) : 1999;

//     onSubmit({ id: 0, title, author, year });

//     if (titleRef.current) titleRef.current.value = '';
//     if (authorRef.current) authorRef.current.value = '';
//     if (yearRef.current) yearRef.current.value = '1999';
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Title" ref={titleRef} required />
//       <input type="text" placeholder="Author" ref={authorRef} required />
//       <input type="number" placeholder="Year" ref={yearRef} defaultValue="1999" required />
//       <button type="submit">Add Book</button>
//     </form>
//   );
// };

// export default BookForm;

// import React, { useRef } from 'react';
// import { book } from '../types/types';
// import '../styles/BookForm.scss';

// const BookForm = ({ onSubmit }: { onSubmit: (book: book) => void }) => {
//   const titleRef = useRef<HTMLInputElement>(null);
//   const authorRef = useRef<HTMLInputElement>(null);
//   const yearRef = useRef<HTMLInputElement>(null);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const title = titleRef.current?.value || '';
//     const author = authorRef.current?.value || '';
//     const year = yearRef.current ? parseInt(yearRef.current.value, 10) : 1999;

//     onSubmit({ id: 0, title, author, year });

//     if (titleRef.current) titleRef.current.value = '';
//     if (authorRef.current) authorRef.current.value = '';
//     if (yearRef.current) yearRef.current.value = '1999';
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Title" ref={titleRef} required />
//       <input type="text" placeholder="Author" ref={authorRef} required />
//       <input type="number" placeholder="Year" ref={yearRef} defaultValue="1999" required />
//       <button type="submit">Add Book</button>
//     </form>
//   );
// };

// export default BookForm;

// import React, { useState } from 'react';
// import '../styles/BookForm.scss';

// const BookForm = ({ onSubmit }: { onSubmit: (book: { id: number; title: string; author: string; year: number }) => void }) => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [year, setYear] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const yearNumber = year ? parseInt(year, 10) : 1999; // Default year if not specified

//     onSubmit({ id: 0, title, author, year: yearNumber });

//     // Reset form fields
//     setTitle('');
//     setAuthor('');
//     setYear('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Title"
//       />
//       <input
//         type="text"
//         value={author}
//         onChange={(e) => setAuthor(e.target.value)}
//         placeholder="Author"
//       />
//       <input
//         type="text"
//         value={year}
//         onChange={(e) => setYear(e.target.value)}
//         placeholder="Year"
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default BookForm;

import React, { useState } from 'react';
import axios from 'axios';
import '../styles/BookForm.scss';
import { fetchBooks } from '../apiClient';

const BookForm = ({ onSubmit }: { onSubmit: (book: { id: number; title: string; author: string; year: number }) => void }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const yearNumber = year ? parseInt(year, 10) : 1999; // Default year if not specified

    const newBook = { title, author, year: yearNumber };

    try {
      console.log(newBook)
      const response = await axios.post('http://localhost:5000/api/books', newBook,{headers:{'Content-Type': 'application/json'}});
      // onSubmit(response.data); // Use the book returned from the backend
      fetchBooks();
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
