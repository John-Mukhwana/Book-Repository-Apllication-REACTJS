// // src/App.tsx
// import React, { useState, useReducer, useEffect } from 'react';
// import BookForm from './Components/BookForm';
// import BookList from './Components/BookList';
// import SearchBar from './Components/SearchBar';
// import { useLocalStorage } from './Hooks/useLocalStorage';
// import { book } from './types/types';
// import './App.scss';

// const bookReducer = (state: book[], action: any) => {
//   switch (action.type) {
//     case 'ADD_BOOK':
//       return [...state, action.book];
//     case 'EDIT_BOOK':
//       return state.map((book) =>
//         book.id === action.id ? { ...book, ...action.updatedBook } : book
//       );
//     case 'DELETE_BOOK':
//       return state.filter((book) => book.id !== action.id);
//     default:
//       return state;
//   }
// };

// const App: React.FC = () => {
//   const [books, dispatch] = useReducer(bookReducer, []);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [localBooks, setLocalBooks] = useLocalStorage<book[]>('books', []);

//   useEffect(() => {
//     dispatch({ type: 'LOAD_BOOKS', books: localBooks });
//   }, [localBooks]);

//   useEffect(() => {
//     setLocalBooks(books);
//   }, [books, setLocalBooks]);

//   const handleAddBook = (newBook: book) => {
//     dispatch({ type: 'ADD_BOOK', book: newBook });
//   };

//   const handleEditBook = (id: number, updatedBook: book) => {
//     dispatch({ type: 'EDIT_BOOK', id, updatedBook });
//   };

//   const handleDeleteBook = (id: number) => {
//     dispatch({ type: 'DELETE_BOOK', id });
//   };

//   const filteredBooks = books.filter((book) =>
//     book.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <>
//     <section className='App'>
//       <h1> Book Repository</h1>
//       <SearchBar onSearch={(query) => setSearchQuery(query)} />
//       <BookForm onSubmit={handleAddBook} />
//       <BookList
//         books={filteredBooks}
//         onEdit={handleEditBook}
//         onDelete={handleDeleteBook}
//       />
//       </section>
//     </>
//   );
// };

// export default App;



// src/App.tsx
import React, { useState, useReducer, useEffect } from 'react';
import axios from 'axios';
import BookForm from './Components/BookForm';
import BookList from './Components/BookList';
import SearchBar from './Components/SearchBar';
import { book } from './types/types';
import './App.scss';

const bookReducer = (state: book[], action: any) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.book];
    case 'EDIT_BOOK':
      return state.map((book) =>
        book.id === action.id ? { ...book, ...action.updatedBook } : book
      );
    case 'DELETE_BOOK':
      return state.filter((book) => book.id !== action.id);
    case 'LOAD_BOOKS':
      return action.books;
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [books, dispatch] = useReducer(bookReducer, []);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://book-repository-backend-1.onrender.com/api/books');
        const fetchedBooks = response.data;
        dispatch({ type: 'LOAD_BOOKS', books: fetchedBooks });
      } catch (error) {
        console.error('Failed to fetch books:', error);
      }
    };

    fetchBooks();
  }, []);

   const handleAddBook = async (newBook: book) => {
    try {
      const response = await axios.post('https://book-repository-backend-1.onrender.com/api/books', newBook);
      console.log(newBook);
      dispatch({ type: 'ADD_BOOK', book: response.data });
      window.location.reload();
    } catch (error) {
      console.error('Failed to add book:', error);
    }
  };

  const handleEditBook = async (id: number, updatedBook: book) => {
    try {
      const response = await axios.put(`https://book-repository-backend-1.onrender.com/api/books/${id}`, updatedBook);
      dispatch({ type: 'EDIT_BOOK', id, updatedBook: response.data });
    } catch (error) {
      console.error('Failed to edit book:', error);
    }
  };

  const handleDeleteBook = async (id: number) => {
    try {
      console.log(id);
      await axios.delete(`https://book-repository-backend-1.onrender.com/api/books/${id}`);
      dispatch({ type: 'DELETE_BOOK', id });
    } catch (error) {
      console.error('Failed to delete book:', error);
    }
  };

  const filteredBooks = books.filter((book:book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log(filteredBooks);
  return (
    <>
      <section className='App'>
        <h1>Book Repository</h1>
        <SearchBar onSearch={(query) => setSearchQuery(query)} />
        <BookForm onSubmit={handleAddBook} />
        <BookList
          books={filteredBooks}
          onEdit={handleEditBook}
          onDelete={handleDeleteBook}
        />
      </section>
    </>
  );
 
};

export default App;
