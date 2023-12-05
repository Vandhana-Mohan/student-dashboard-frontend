import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import NewStudent from "./Pages/NewStudent";
import StudentsPage from "./Pages/StudentsPage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";

const router = createBrowserRouter([
  {
    element: <Navbar />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new",
    element: <NewStudent />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/students",
    element: <StudentsPage />,
  },
    {
      path: "/students/:id",
      element: <student profile />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
