import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./routes/Routes";
import MyContext from "./context/MyContext";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <MyContext>
    <RouterProvider router={router} />
    <ToastContainer />
  </MyContext>,
);
