import { RouterProvider } from "react-router-dom";
import router from "./components/Router/router";

export default function App() {
  return <RouterProvider router={router} />;
}
