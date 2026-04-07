import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./routes/Routes";
import MyContext from "./context/MyContext";

createRoot(document.getElementById("root")).render(
  <MyContext>
    <RouterProvider router={router} />
  </MyContext>,
);
