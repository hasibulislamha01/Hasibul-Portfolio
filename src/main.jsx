import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './Pages/HomePage/Home';
import AddNewProject from './Pages/AddProjectsPage/AddNewProject';
import Blogs from './Pages/BlogsPage/Blogs';
import AddBlog from './Pages/AddBlogs/AddBlog';
import Projects from './Pages/ProjectsPage/Projects';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/addProject",
        element: <AddNewProject></AddNewProject>
      },
      {
        path: "/addBlog",
        element: <AddBlog></AddBlog>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
