import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="max-w-7xl mx-auto text-center py-20">
      <p>404</p>
      <h3 className="text-3xl mt-4 font-bold">Page not found</h3>
      <p className="mt-4">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Link to="/" className="btn btn-primary mt-4">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
