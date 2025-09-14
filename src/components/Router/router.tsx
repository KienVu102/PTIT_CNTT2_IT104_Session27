import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./RootLayout";

// Bài 1
import Home from "../Ex1/Home";
import About from "../Ex1/About";
import Contact from "../Ex1/Contact";

// Bài 2 & 4
import ProductList from "../Ex4/ProductList";
import ProductDetail from "../Ex2/ProductDetail";

// Bài 3
import TaskList from "../Ex3/TaskList";
import TaskDetail from "../Ex3/TaskDetail";

// Bài 5
import Posts from "../Ex5/Posts";
import PostDetail from "../Ex5/Postdetail";
import BlogLayout from "../Ex5/BlogLayout";

// Bài 6
import Ex6Layout from "../Ex6/Ex6Layout";
import Ex6Home from "../Ex6/Home";
import Ex6Product from "../Ex6/Product";
import Ex6Detail from "../Ex6/Detail";

// Bài 7
import NotFound from "../Ex7/NotFound";

// Bài 8
import Login from "../Ex8/Login";
import Register from "../Ex8/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Navigate to="/blog/posts" replace /> },
      // Bài 1: Routes
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },

      // Bài 2 & 4: Product Routes
      { path: "products", element: <ProductList /> },
      { path: "products/:id", element: <ProductDetail /> },

      // Bài 3: Task Routes
      { path: "tasks", element: <TaskList /> },
      { path: "tasks/:id", element: <TaskDetail /> },

      // Bài 5: Blog Routes (sử dụng BlogLayout)
      {
        path: "blog",
        element: <BlogLayout />,
        children: [
          { path: "posts", element: <Posts /> },
          { path: "posts/:id", element: <PostDetail /> },
        ],
      },

      // Bài 6: Nested Routes
      {
        path: "ex6",
        element: <Ex6Layout />, // Layout riêng cho Bài 6
        children: [
          { index: true, element: <Ex6Home /> },
          { path: "product", element: <Ex6Product /> },
          { path: "detail", element: <Ex6Detail /> },
        ],
      },

      // Bài 8: Authentication Routes
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

export default router;
