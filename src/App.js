import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import BookSearchPage from './pages/BookSearchPage';
import BookshelfPage from './pages/BookshelfPage';
import { loadBookshelf, saveBookshelf } from './utils/localStorage';
import './App.css';

const App = () => {
  const [bookshelf, setBookshelf] = useState(loadBookshelf());

  useEffect(() => {
    saveBookshelf(bookshelf);
  }, [bookshelf]);

  const addToBookshelf = (book) => {
    setBookshelf([...bookshelf, book]);
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Search Books</Link>
          <Link to="/bookshelf">My Bookshelf</Link>
        </nav>
        <Routes>
          <Route path="/" element={<BookSearchPage addToBookshelf={addToBookshelf} />} />
          <Route path="/bookshelf" element={<BookshelfPage bookshelf={bookshelf} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
