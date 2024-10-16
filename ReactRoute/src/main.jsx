import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from './Lyout/Layout.jsx'
import Contact from "./Components/Contanct/Contact.jsx"
import AboutPage from "./Components/About/About.jsx"
import Home from './Components/Home/home.jsx'
const route=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      { path:"", element:<Home />},
      {path:"/contact",element:<Contact/>},
      {path:"/about",element:<AboutPage/>},
      {path:"*" ,element:"Page Not Fond" } //4040 eror handling page
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
