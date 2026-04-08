import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import BookPage from "../pages/BookPage/BookPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/BookDetails/BookDetails";
import PageToRead from "../pages/PageToRead/PageToRead";

const loader = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <span className="loading loading-spinner loading-xl"></span>
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      {
        path: "/books",
        Component: BookPage,
      },
      {
        path: "/book-details/:id",
        loader: () => fetch("/booksData.json"),
        HydrateFallback: loader,
        Component: BookDetails,
      },
      {
        path: "/page-to-read",
        Component: PageToRead,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
