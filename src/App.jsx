import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";

import Users from "./pages/Users";
import Appointment from "./pages/Appointment";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./components/Header/Header";
import Megafooter from "./components/Megafooter/Megafooter";
import FlipCards from "./components/Flipcards/Flipcards";

//democards
import Democards from "./components/CardDesigns/Democards";

function App() {
  const Layout = () => {
    return (
      <div>
        <Header />

        <div>
          <div>
            <Outlet />
          </div>
        </div>
        <Megafooter />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/appointment",
          element: <Appointment />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/flip",
          element: <FlipCards />,
        },
        {
          path: "/democards",
          element: <Democards />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
