import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import BookPage from "../pages/BookPage/BookPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../components/HomePage/BookDetails";
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
        Component: BookDetails,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
