import { createBrowserRouter } from "react-router-dom"
import MainLayout from "@/layouts/MainLayout"

import Home from "@/pages/Home"
import ProductDetail from "@/pages/ProductDetail"
import Search from "@/pages/Search"
import Login from "@/pages/Login"
import Cart from "@/pages/Cart"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "product/:id",
        element: <ProductDetail/>
      },
      {
        path: "search",
        element: <Search/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "cart",
        element: <Cart/>
      },
    ],
  },
  ])