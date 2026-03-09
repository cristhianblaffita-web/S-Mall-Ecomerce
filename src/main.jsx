import React from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import "./index.css"
import "./styles/utilities.css"
import "./styles/variables.css"
import "./styles/global.css"

createRoot(document.getElementById("root")).render(<React.StrictMode><RouterProvider router={router} /></React.StrictMode>)