import React from "react";
import Banner from "../../components/HomePage/Banner";
import AllBooks from "../../components/HomePage/AllBooks";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner />
      <AllBooks />
    </div>
  );
};

export default HomePage;
