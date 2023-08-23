import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";

import Users from "./pages/Users";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Content from "./pages/Content";
import Footer from "./pages/Footer";
import Header from "./components/Header/Header";

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
        <Footer />
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
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/content",
          element: <Content />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
