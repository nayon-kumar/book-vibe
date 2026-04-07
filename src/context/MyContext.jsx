import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const MyContext = ({ children }) => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);

  const addToRead = (newBook) => {
    const isExistInWishlisBooks = wishlistBooks.find(
      (wishlistBook) => wishlistBook.bookId === newBook.bookId,
    );
    if (isExistInWishlisBooks) {
      const filteredWishlist = wishlistBooks.filter(
        (wishlistBook) => wishlistBook.bookId != newBook.bookId,
      );
      setWishlistBooks(filteredWishlist);
    }
    const isExist = readBooks.find(
      (readBook) => readBook.bookId === newBook.bookId,
    );
    if (!isExist) {
      toast.success(`${newBook.bookName} Marked As Read!`);
      setReadBooks([...readBooks, newBook]);
    }
  };

  const addToWishlist = (newBook) => {
    const isExistInReadBooks = readBooks.find(
      (readBook) => readBook.bookId === newBook.bookId,
    );
    if (isExistInReadBooks) {
      toast.error("This book was aready marked as read!");
      return;
    }
    const isExist = wishlistBooks.find(
      (wishlistBook) => wishlistBook.bookId === newBook.bookId,
    );
    if (!isExist) {
      toast.success(`${newBook.bookName} Added To Wishlist!`);
      setWishlistBooks([...wishlistBooks, newBook]);
    }
  };

  const data = {
    readBooks,
    setReadBooks,
    addToRead,
    wishlistBooks,
    setWishlistBooks,
    addToWishlist,
  };

  return <BookContext value={data}>{children}</BookContext>;
};

export default MyContext;
