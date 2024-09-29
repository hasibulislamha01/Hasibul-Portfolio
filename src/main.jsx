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
import BlogDetails from './Pages/BlogsPage/BlogDetails';

const serverURL = import.meta.env.VITE_SERVER_LINK;
// console.log(serverURL);

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
        path: "/blog-details/:id",
        loader: async ({params}) => {
          const response = await fetch(`${serverURL}/blog-details/${params.id}`);
          const data = await response.json()
          return data
        } ,
        element: <BlogDetails/>
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
