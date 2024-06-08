export const loadBookshelf = () => {
    const savedBookshelf = localStorage.getItem('bookshelf');
    return savedBookshelf ? JSON.parse(savedBookshelf) : [];
  };
  
  export const saveBookshelf = (bookshelf) => {
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
  };