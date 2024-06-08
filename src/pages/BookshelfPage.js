import React from 'react';

const BookshelfPage = ({ bookshelf }) => {
  return (
    <div>
      <h1>My Bookshelf</h1>
      <div className="bookshelf">
        {bookshelf.map(book => (
          <div key={book.key} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author_name && book.author_name.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookshelfPage;
