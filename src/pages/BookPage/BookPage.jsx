import React, { useContext } from "react";
import { BookContext } from "../../context/MyContext";
import ReadBookCard from "../../ui/ReadBookCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const BookPage = () => {
  const { readBooks, wishlistBooks } = useContext(BookContext);
  console.log("Read", readBooks);
  console.log("Wish", wishlistBooks);

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
            <div className="flex flex-col gap-6">
              {readBooks.map((readBook) => (
                <ReadBookCard key={readBook.bookId} readBook={readBook} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default BookPage;
