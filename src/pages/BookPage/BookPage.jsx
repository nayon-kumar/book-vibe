import React, { useContext } from "react";
import { BookContext } from "../../context/MyContext";

const BookPage = () => {
  const { readBooks } = useContext(BookContext);

  return (
    <div className="max-w-7xl mx-auto">
      <p>Book page</p>
    </div>
  );
};

export default BookPage;
