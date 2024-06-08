import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../Components/SearchBar';
import BookCard from '../Components/BookCard';

const BookSearchPage = ({ addToBookshelf }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      axios.get(`https://openlibrary.org/search.json?q=${searchQuery}&limit=10&page=1`)
        .then(response => setBooks(response.data.docs))
        .catch(error => console.error('Error fetching data:', error));
    } else {
      setBooks([]);
    }
  }, [searchQuery]);

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="search-results">
        {books.map(book => (
          <BookCard key={book.key} book={book} onAdd={addToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default BookSearchPage;