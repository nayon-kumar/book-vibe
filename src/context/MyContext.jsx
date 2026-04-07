import React, { createContext, useState } from "react";

export const BookContext = createContext();

const MyContext = ({ children }) => {
  const [readBooks, setReadBooks] = useState([]);
  const addToRead = (newBook) => {
    const isExist = readBooks.find(
      (readBook) => readBook.bookId === newBook.bookId,
    );
    if (!isExist) {
      setReadBooks([...readBooks, newBook]);
    }
    console.log(readBooks);
  };

  const data = {
    readBooks,
    setReadBooks,
    addToRead,
  };

  return <BookContext value={data}>{children}</BookContext>;
};

export default MyContext;
