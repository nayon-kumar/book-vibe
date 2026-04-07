import { Link, useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/MyContext";
import { useContext } from "react";

const BookDetails = () => {
  const books = useLoaderData();
  const params = useParams();
  // find specefic selected book
  const expectedBook = books.find((book) => book.bookId === Number(params.id));

  const { readBooks, wishlistBooks, addToRead, addToWishlist } =
    useContext(BookContext);

  const isExistInRead = readBooks.find(
    (readBook) => readBook.bookId === expectedBook.bookId,
  );

  const isExistInWish = wishlistBooks.find(
    (wishlistBook) => wishlistBook.bookId === expectedBook.bookId,
  );

  return (
    <div className="flex flex-wrap items-center justify-center gap-10 mt-25 max-w-7xl mx-auto">
      <div className="md:flex-1 bg-[#131313]/5 py-10 md:py-20 w-full text-center rounded-2xl">
        <img
          className="h-100 mx-auto hover:scale-110 transition-all duration-500 ease-in-out"
          src={expectedBook.image}
          alt={expectedBook.bookName}
        />
      </div>
      <div className="md:flex-1">
        <h2 className="text-[#131313] font-bold text-2xl md:text-3xl">
          {expectedBook.bookName}
        </h2>
        <p className="text-[#131313]/80 mt-4 border-b-2 pb-8 border-[#131313]/15 font-medium ">
          By : {expectedBook.author}
        </p>
        <p className="mt-4 border-b-2 border-[#131313]/15 pb-4 font-medium text-[#131313]/80 ">
          {expectedBook.category}
        </p>
        <p className="mt-6 text-justify ">
          <span className="font-bold">Review : </span>
          <span className="text-[#131313]/70">{expectedBook.review}</span>
        </p>
        <div className="flex items-center gap-4 mt-6 border-b-2 border-[#131313]/15 pb-6">
          <div>
            <p className="font-bold">Tag</p>
          </div>
          <div className="flex gap-3 items-center">
            {expectedBook.tags.map((tag, index) => (
              <p
                className="text-[#23BE0A] font-medium bg-[#23BE0A]/5 px-5 rounded-full py-1.5 "
                key={index}
              >
                #{tag}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-6 flex gap-8">
          <div className="text-[#131313]/70 space-y-3">
            <p>Number of Pages: </p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div className="space-y-3 font-semibold text-[#131313] ">
            <p>281</p>
            <p>J.B Lippincott & Co.</p>
            <p>1960</p>
            <p>4.8</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center md:justify-normal gap-4">
          <button
            onClick={() => addToRead(expectedBook)}
            className="btn btn-info text-white"
            disabled={isExistInRead}
          >
            {isExistInRead ? "Marked as Read" : "Mark as Read"}
          </button>
          <button
            onClick={() => addToWishlist(expectedBook)}
            className="btn btn-primary"
            disabled={isExistInWish}
          >
            {isExistInWish ? "Added to Wishlist" : "Add to Wishlist"}
          </button>
          <Link to="/" className="btn">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
