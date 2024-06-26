// // src/components/BookList.tsx
// import React, { useState } from 'react';
// import { book } from '../types/types';
// import '../styles/BookList.scss';
// interface BookListProps {
//   books: book[];
//   onEdit: (id: number, updatedBook: book) => void;
//   onDelete: (id: number) => void;
// }

// const BookList: React.FC<BookListProps> = ({ books, onEdit, onDelete }) => {
//   const [editBookId, setEditBookId] = useState<number | null>(null);
//   const [editedBook, setEditedBook] = useState<book | null>(null);

//   const handleEditClick = (book: book) => {
//     setEditBookId(book.id);
//     setEditedBook({ ...book });
//   };

//   const handleCancelClick = () => {
//     setEditBookId(null);
//     setEditedBook(null);
//   };

//   const handleSaveClick = (id: number) => {
//     if (editedBook) {
//       onEdit(id, editedBook);
//       setEditBookId(null);
//       setEditedBook(null);
//     }
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setEditedBook((prevBook) => (prevBook ? { ...prevBook, [name]: value } : null));
//   };

//   return (
//     <section className='BookList'>
//     <table>
//       <thead>
//         <tr>
//           <th>Title</th>
//           <th>Author</th>
//           <th>Year</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {books.map((book) => (
//           <tr key={book.id}>
//             {editBookId === book.id ? (
//               <>
//                 <td>
//                   <input
//                     type="text"
//                     name="title"
//                     value={editedBook?.title || ''}
//                     onChange={handleInputChange}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     name="author"
//                     value={editedBook?.author || ''}
//                     onChange={handleInputChange}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="number"
//                     name="year"
//                     value={editedBook?.year || ''}
//                     onChange={handleInputChange}
//                   />
//                 </td>
//                 <td>
//                   <div className='tableButtons'>
//                   <button onClick={() => handleSaveClick(book.id)}>Save</button>
//                   <button onClick={handleCancelClick}>Cancel</button>
//                   </div>
//                 </td>
//               </>
//             ) : (
//               <>
//                 <td>{book.title}</td>
//                 <td>{book.author}</td>
//                 <td>{book.year}</td>
//                 <td>
//                   <div className='tableButtons'>
//                   <button onClick={() => handleEditClick(book)}>Edit</button>
//                   <button onClick={() => onDelete(book.id)}>Delete</button>
//                   </div>
//                 </td>
                
//               </>
//             )}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     </section>
//   );
// };

// export default BookList;

// // import React, { useState } from 'react';
// // import { book } from '../types/types';
// // import '../styles/BookList.scss';

// // interface BookListProps {
// //   books: book[];
// //   onEdit: (id: number, updatedBook: book) => void;
// //   onDelete: (id: number) => void;
// // }

// // const BookList: React.FC<BookListProps> = ({ books, onEdit, onDelete }) => {
// //   const [editBookId, setEditBookId] = useState<number | null>(null);
// //   const [editedBook, setEditedBook] = useState<book | null>(null);

// //   const handleEditClick = (book: book) => {
// //     setEditBookId(book.id);
// //     setEditedBook({ ...book });
// //   };

// //   const handleCancelClick = () => {
// //     setEditBookId(null);
// //     setEditedBook(null);
// //   };

// //   const handleSaveClick = (id: number) => {
// //     if (editedBook) {
// //       onEdit(id, editedBook);
// //       setEditBookId(null);
// //       setEditedBook(null);
// //     }
// //   };

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = e.target;
// //     setEditedBook((prevBook) => (prevBook ? { ...prevBook, [name]: value } : null));
// //   };

// //   return (
// //     <section className='BookList'>
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>Title</th>
// //             <th>Author</th>
// //             <th>Year</th>
// //             <th>Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {books.map((book) => (
// //             <tr key={book.id}>
// //               {editBookId === book.id ? (
// //                 <>
// //                   <td>
// //                     <input
// //                       type="text"
// //                       name="title"
// //                       value={editedBook?.title || ''}
// //                       onChange={handleInputChange}
// //                     />
// //                   </td>
// //                   <td>
// //                     <input
// //                       type="text"
// //                       name="author"
// //                       value={editedBook?.author || ''}
// //                       onChange={handleInputChange}
// //                     />
// //                   </td>
// //                   <td>
// //                     <input
// //                       type="number"
// //                       name="year"
// //                       value={editedBook?.year || ''}
// //                       onChange={handleInputChange}
// //                     />
// //                   </td>
// //                   <td>
// //                     <div className='tableButtons'>
// //                       <button onClick={() => handleSaveClick(book.id)}>Save</button>
// //                       <button onClick={handleCancelClick}>Cancel</button>
// //                     </div>
// //                   </td>
// //                 </>
// //               ) : (
// //                 <>
// //                   <td>{book.title}</td>
// //                   <td>{book.author}</td>
// //                   <td>{book.year}</td>
// //                   <td>
// //                     <div className='tableButtons'>
// //                       <button onClick={() => handleEditClick(book)}>Edit</button>
// //                       <button onClick={() => onDelete(book.id)}>Delete</button>
// //                     </div>
// //                   </td>
// //                 </>
// //               )}
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </section>
// //   );
// // };

// // export default BookList;

// src/components/BookList.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { book } from '../types/types';
import '../styles/BookList.scss';


interface BookListProps {
  books: book[];
  onEdit: (id: number, updatedBook: book) => void;
  onDelete: (id: number) => void;
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  const [editBookId, setEditBookId] = useState<number | null>(null);
  const [editedBook, setEditedBook] = useState<book | null>(null);

  const handleEditClick = (book: book) => {
    setEditBookId(book.id);
    setEditedBook({ ...book });
  };

  const handleCancelClick = () => {
    setEditBookId(null);
    setEditedBook(null);
  };

  const handleSaveClick = async (id: number) => {
    if (editedBook) {
      try {
        console.log(editedBook);
         await axios.put(`https://book-repository-backend-1.onrender.com/api/books/${id}`, editedBook);
        // onEdit(id, response.data);
        console.log(editedBook)
        setEditBookId(null);
        setEditedBook(null);
        window.location.reload();
      } catch (error) {
        console.error('Failed to edit book:', error);
      }
    }
  };

  const handleDeleteClick = async (id: number) => {
    try {
      console.log(id)
      await axios.delete(`https://book-repository-backend-1.onrender.com/api/books/${id}`);
      // onDelete(id);
      window.location.reload();
    } catch (error) {
      console.error('Failed to delete book:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedBook((prevBook) => (prevBook ? { ...prevBook, [name]: value } : null));
  };

  return (
    <section className='BookList'>
      <table>
        <thead>
          <tr className='headingtr'>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              {editBookId === book.id ? (
                <>
                  <td>
                    <input
                      type='text'
                      name='title'
                      value={editedBook?.title || ''}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type='text'
                      name='author'
                      value={editedBook?.author || ''}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type='number'
                      name='year'
                      value={editedBook?.year || ''}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <div className='tableButtons'>
                      <button onClick={() => handleSaveClick(book.id)}>Save</button>
                      <button onClick={handleCancelClick}>Cancel</button>
                    </div>
                  </td>
                </>
              ) : (
                <>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.year}</td>
                  <td>
                    <div className='tableButtons'>
                      <button onClick={() => handleEditClick(book)}>Edit</button>
                      <button onClick={() => handleDeleteClick(book.id)}>Delete</button>
                    </div>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default BookList;


