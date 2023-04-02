import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import Single from './pages/Single';
import Write from './pages/Write';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ErrorPage from './pages/ErrorPage';
import "./style.scss";
import Menu from './components/Menu';

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>                             
    <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
  path:"/",
  element: <div>
    <Layout/>
  </div>,
  children:[
    {
      path: "/",
      element:<Home/>,
    },
    {
      path: "/post/:id",
      element:<Single/>,
    },
    {
      path: "/write",
      element:<Write/>,
    },
    {
      path:"/single",
      element:<Single/>,
    }
  ],
  errorElement: <ErrorPage/>,
 },
 {
  path:"/home",
  element: <Home/>
 },
 {
  path:"/login",
  element: <Login/>
 },
 {
  path:"/register",
  element:<Register/>
 },
 {
  path:"/single",
  element:<Single/>
 },
 {
  path:"/write",
  element:<Write/>
 },
 {
  path:"/menu",
  element:<Menu/>
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='app' >
    <div className='container'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    </div>
  </div>
)
