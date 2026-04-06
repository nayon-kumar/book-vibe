import React from "react";
import { CiStar } from "react-icons/ci";

const BookCard = ({ book }) => {
  return (
    <div className="border-2 border-gray-300 p-5 rounded-3xl cursor-pointer">
      <div className="text-center bg-[#F3F3F3] rounded-2xl py-8">
        <img className="mx-auto h-41" src={book.image} alt={book.bookName} />
      </div>
      <div className="flex items-center gap-3 mt-5">
        {book.tags.map((tag, index) => (
          <div
            key={index}
            className="text-[#23BE0A] font-medium px-5 py-1.75 bg-[#23BE0A]/5 rounded-full"
          >
            {tag}
          </div>
        ))}
      </div>
      <div>
        <h3 className="mt-4 font-bold text-[#131313] text-xl ">
          {book.bookName}
        </h3>
        <p className="mt-4 mb-5 font-medium text-[#131313]/80 ">
          By : Awlad Hossain
        </p>
      </div>
      <div className="border-t-2 border-dashed border-[#131313]/15 ">
        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="font-medium text-[#131313]/80 ">Fiction</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-medium text-[#131313]/80 ">5.00</p>
            <CiStar className="font-bold text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
