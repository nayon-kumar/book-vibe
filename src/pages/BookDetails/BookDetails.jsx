import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const books = useLoaderData();
  const params = useParams();
  const expectedBook = books.find((book) => book.bookId === Number(params.id));
  console.log(expectedBook);

  return (
    <div className="flex gap-10  ">
      <div className="flex-1 bg-[#131313]/5 py-10 text-center rounded-2xl">
        <img
          className="h-100 mx-auto"
          src={expectedBook.image}
          alt={expectedBook.bookName}
        />
      </div>
      <div className="flex-1">
        <h2>The Catcher in the Rye</h2>
      </div>
    </div>
  );
};

export default BookDetails;
