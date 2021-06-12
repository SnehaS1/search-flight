import React, { useContext } from 'react';
import _ from 'lodash';
import Book from './Book';
import BooksContext from '../context/BooksContext';
import {  Table } from 'react-bootstrap';

const BooksList = () => {
  const { books, setBooks } = useContext(BooksContext);
  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <React.Fragment>
      <div className="book-list">
      {!_.isEmpty(books) ? (
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>Flight Host</th>
      <th>Flight Number</th>
      <th>Flight Origin</th>
      <th>Flight Destination</th>
      <th>Flight Duration</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
         {/* {!_.isEmpty(books) ? ( */}
         {books.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))}
        {/* ) : (
          <p className="message">No books available. Please add some books.</p>
        )}  */}
       </tbody>
       </Table>
      ) : (
        <p className="message">No books available. Please add some books.</p>
      )}
      </div>
    </React.Fragment>
  );
};

export default BooksList;
