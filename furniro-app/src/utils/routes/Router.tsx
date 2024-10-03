import { createBrowserRouter } from "react-router-dom";
import App from "../../App.tsx";
import { Contact } from "../../pages/Contact/index.tsx";
import { Login } from "../../pages/Login/index.tsx";
import { Shop } from "../../pages/Shop/index.tsx";
import { Home } from "../../pages/Home/index.tsx";
import { Cart } from "../../pages/Cart/index.tsx";
import { Checkout } from "../../pages/Checkout/index.tsx";
import { PrivateRoute } from "./privateRoute.tsx";
import { ProductItem } from "../../pages/ProductItem/index.tsx";
import { ProductsProvider } from "../../context/ProductsContext.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <ProductsProvider>
            <ProductItem />
          </ProductsProvider>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
]);
