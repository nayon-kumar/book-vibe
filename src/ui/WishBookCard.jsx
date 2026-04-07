import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { GrDocumentText } from "react-icons/gr";

const WishBookCard = ({ wishlistBook }) => {
  return (
    <div className="border-[#131313]/15 border-2 rounded-2xl p-6 grid md:grid-cols-8 gap-8 shadow-lg">
      <div className="bg-[#131313]/5 flex items-center justify-center py-8 w-full rounded-2xl md:col-span-3 lg:col-span-2">
        <img
          className="h-43 mx-auto"
          src={wishlistBook.image}
          alt={wishlistBook.bookName}
        />
      </div>
      <div className="md:col-span-5 lg:col-span-6">
        <h2 className="text-[#131313] font-bold text-xl md:text-2xl">
          {wishlistBook.bookName}
        </h2>
        <p className="text-[#131313]/80 my-4 font-medium">
          By : {wishlistBook.author}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <div>
            <p className="font-bold">Tag</p>
          </div>
          <div className="flex gap-3 items-center">
            {wishlistBook.tags.map((tag, index) => (
              <p
                className="text-[#23BE0A] font-medium bg-[#23BE0A]/5 px-5 rounded-full py-1.5 "
                key={index}
              >
                #{tag}
              </p>
            ))}
          </div>
          <div>
            <p>Year of Publishing: {wishlistBook.yearOfPublishing}</p>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-2 text-[#131313]/60">
            <FaUserGroup />
            <p>Publisher: {wishlistBook.publisher}</p>
          </div>
          <div className="flex items-center gap-2 text-[#131313]/60">
            <GrDocumentText />
            <p>Pages: {wishlistBook.totalPages}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mt-4 border-t-2 border-[#131313]/15 pt-4">
          <button className="rounded-full px-5 py-2.5 bg-[#328EFF]/15 text-[#328EFF] ">
            Category: {wishlistBook.category}
          </button>
          <button className="rounded-full px-5 py-2.5 bg-[#FFAC33]/15 text-[#FFAC33] ">
            Rating: {wishlistBook.rating}
          </button>
          <button className="rounded-full px-5 py-2.5 bg-[#23BE0A] text-white cursor-pointer ">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishBookCard;
