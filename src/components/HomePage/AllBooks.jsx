import React, { use } from "react";
import BookCard from "../../ui/BookCard";
const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  return (
    <div>
      <h3 className="text-[#131313] font-bold text-4xl mt-15 text-center ">
        All Books
      </h3>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
