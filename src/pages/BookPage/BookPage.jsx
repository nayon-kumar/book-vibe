import React, { useContext } from "react";
import { BookContext } from "../../context/MyContext";
import ReadBookCard from "../../ui/ReadBookCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WishBookCard from "../../ui/WishBookCard";

const BookPage = () => {
  const { readBooks, wishlistBooks } = useContext(BookContext);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center bg-[#131313]/5 rounded-2xl py-7 ">
        <h3 className="font-bold text-2xl">Books</h3>
      </div>
      <div className="mt-15">
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
            <div className="flex flex-col gap-8 mt-8">
              {readBooks.map((readBook) => (
                <ReadBookCard key={readBook.bookId} readBook={readBook} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-col gap-8 mt-8">
              {wishlistBooks.map((wishlistBook) => (
                <WishBookCard
                  key={wishlistBook.bookId}
                  wishlistBook={wishlistBook}
                />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default BookPage;
