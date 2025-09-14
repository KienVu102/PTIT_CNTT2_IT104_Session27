import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./RootLayout";

import Home from "../Ex1/Home";
import About from "../Ex1/About";
import Contact from "../Ex1/Contact";

import ProductList from "../Ex4/ProductList";
import ProductDetail from "../Ex2/ProductDetail";

import TaskList from "../Ex3/TaskList";
import TaskDetail from "../Ex3/TaskDetail";

import Posts from "../Ex5/Posts";
import PostDetail from "../Ex5/Postdetail";

import NotFound from "../Ex7/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Navigate to="/blog/posts" replace /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },

      { path: "products", element: <ProductList /> },
      { path: "products/:id", element: <ProductDetail /> },

      { path: "tasks", element: <TaskList /> },
      { path: "tasks/:id", element: <TaskDetail /> },

      {
        path: "blog/posts",
        element: <Posts />,
      },
      { path: "blog/posts/:id", element: <PostDetail /> },
    ],
  },
]);

export default router;
