import React from "react";
import banner from "../../assets/banner.png";

const Banner = ({ scrollToAllBooks }) => {
  return (
    <div className="bg-[#131313]/5 mt-25 rounded-3xl">
      <div className="flex gap-10 flex-wrap-reverse items-center justify-around py-10">
        <div className="text-center sm:text-left">
          <h2 className="text-[#131313] text-2xl sm:text-3xl lg:text-5xl font-bold ">
            Books to freshen up <br />
            your bookshelf
          </h2>
          <button onClick={scrollToAllBooks} className="btn btn-primary mt-12">
            View The List
          </button>
        </div>
        <div>
          <img src={banner} alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
