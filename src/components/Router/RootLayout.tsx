import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </>
  );
}
