import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/MyContext";
import ReadBookCard from "../../ui/ReadBookCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WishBookCard from "../../ui/WishBookCard";
import { FaBookOpenReader } from "react-icons/fa6";

const BookPage = () => {
  const { readBooks, wishlistBooks } = useContext(BookContext);

  const [sortingType, setSortingType] = useState("");
  const [sortedReadBooks, setSortedReadBooks] = useState(readBooks);
  const [sortedWishlishBooks, setSortedWishlistBooks] = useState(wishlistBooks);

  useEffect(() => {
    if (sortingType) {
      // Page sorting for readbooks and wishlist books
      if (sortingType === "pages-low-to-high") {
        const sortedData1 = [...readBooks].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        const sortedData2 = [...wishlistBooks].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setSortedReadBooks(sortedData1);
        setSortedWishlistBooks(sortedData2);
      } else if (sortingType === "pages-high-to-low") {
        const sortedData1 = [...readBooks].sort(
          (a, b) => b.totalPages - a.totalPages,
        );
        const sortedData2 = [...wishlistBooks].sort(
          (a, b) => b.totalPages - a.totalPages,
        );
        setSortedReadBooks(sortedData1);
        setSortedWishlistBooks(sortedData2);
      }
      // Rating sorting for readbooks and wishlist books
      if (sortingType === "rating-low-to-high") {
        const sortedData1 = [...readBooks].sort((a, b) => a.rating - b.rating);
        const sortedData2 = [...wishlistBooks].sort(
          (a, b) => a.rating - b.rating,
        );
        setSortedReadBooks(sortedData1);
        setSortedWishlistBooks(sortedData2);
      } else if (sortingType === "rating-high-to-low") {
        const sortedData1 = [...readBooks].sort((a, b) => b.rating - a.rating);
        const sortedData2 = [...wishlistBooks].sort(
          (a, b) => b.rating - a.rating,
        );
        setSortedReadBooks(sortedData1);
        setSortedWishlistBooks(sortedData2);
      }
    }
  }, [sortingType, readBooks, wishlistBooks]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center bg-[#131313]/5 rounded-2xl py-7 ">
        <h3 className="font-bold text-2xl">Books</h3>
      </div>
      <div className="text-center mt-10">
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-[#23BE0A] text-white"
          >
            Sort By 🡻
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSortingType("")}>
              <a>Default</a>
            </li>
            <li onClick={() => setSortingType("pages-low-to-high")}>
              <a>Pages: Low to High</a>
            </li>
            <li onClick={() => setSortingType("rating-low-to-high")}>
              <a>Rating: Low to High</a>
            </li>

            <li onClick={() => setSortingType("pages-high-to-low")}>
              <a>Pages: High to Low</a>
            </li>
            <li onClick={() => setSortingType("rating-high-to-low")}>
              <a>Rating: High to Low</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <Tabs>
          <TabList>
            <Tab>
              <p className="font-bold">Read Books</p>
            </Tab>
            <Tab>
              <p className="font-bold">Wishlist Books</p>
            </Tab>
          </TabList>

          <TabPanel>
            {readBooks.length === 0 ? (
              // If read books list is empty
              <>
                <div className="flex flex-col items-center justify-center py-20">
                  <FaBookOpenReader className="text-gray-400" size={100} />
                  <p className="mt-5 text-gray-400 text-center">
                    Your read books list is empty. Go to Home page for add books
                    in your read books list.
                  </p>
                </div>
              </>
            ) : (
              <>
                {sortingType === "" ? (
                  <>
                    {/* Default read books data */}
                    <div className="flex flex-col gap-8 mt-10">
                      {readBooks.map((readBook) => (
                        <ReadBookCard
                          key={readBook.bookId}
                          readBook={readBook}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    {/* Sorted read books data */}
                    <div className="flex flex-col gap-8 mt-10">
                      {sortedReadBooks.map((readBook) => (
                        <ReadBookCard
                          key={readBook.bookId}
                          readBook={readBook}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </TabPanel>
          <TabPanel>
            {wishlistBooks.length === 0 ? (
              // If wishlist books is empty
              <>
                <div className="flex flex-col items-center justify-center py-20">
                  <FaBookOpenReader className="text-gray-400" size={100} />
                  <p className="mt-5 text-gray-400 text-center">
                    Your wishlist books is empty. Go to Home page for add your
                    favourite books in your wishlist.
                  </p>
                </div>
              </>
            ) : (
              <>
                {sortingType === "" ? (
                  <>
                    {/* Default wishlist data */}
                    <div className="flex flex-col gap-8 mt-10">
                      {wishlistBooks.map((wishlistBook) => (
                        <WishBookCard
                          key={wishlistBook.bookId}
                          wishlistBook={wishlistBook}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    {/* Sorted wishlist data */}
                    <div className="flex flex-col gap-8 mt-10">
                      {sortedWishlishBooks.map((wishlistBook) => (
                        <WishBookCard
                          key={wishlistBook.bookId}
                          wishlistBook={wishlistBook}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default BookPage;
