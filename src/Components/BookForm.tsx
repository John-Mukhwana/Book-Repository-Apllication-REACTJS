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

import React, { useRef } from 'react';
import { book } from '../types/types';
import '../styles/BookForm.scss';

const BookForm = ({ onSubmit }: { onSubmit: (book: book) => void }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const title = titleRef.current?.value || '';
    const author = authorRef.current?.value || '';
    const year = yearRef.current ? parseInt(yearRef.current.value, 10) : 1999;

    onSubmit({ id: 0, title, author, year });

    if (titleRef.current) titleRef.current.value = '';
    if (authorRef.current) authorRef.current.value = '';
    if (yearRef.current) yearRef.current.value = '1999';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" ref={titleRef} required />
      <input type="text" placeholder="Author" ref={authorRef} required />
      <input type="number" placeholder="Year" ref={yearRef} defaultValue="1999" required />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
