import React, { useRef } from "react";
import Banner from "../../components/HomePage/Banner";
import AllBooks from "../../components/HomePage/AllBooks";

const HomePage = () => {
  const allBooksRef = useRef(null);
  const scrollToAllBooks = () => {
    allBooksRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Banner scrollToAllBooks={scrollToAllBooks} />
      <AllBooks allBooksRef={allBooksRef} />
    </div>
  );
};

export default HomePage;
