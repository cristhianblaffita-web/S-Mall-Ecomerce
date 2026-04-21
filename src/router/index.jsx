import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Cart from "@/pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/products" replace />,
      },
      {
        path: "products",
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: ":id",
            element: <ProductDetail />,
          },
        ],
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);
