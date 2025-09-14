import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Ex6Layout() {
  return (
    <div>
      {/* Header này sẽ luôn hiển thị trên các trang của Bài 6 */}
      <Header />

      {/* Nội dung của các trang con (Home, Product, Detail) sẽ được render ở đây */}
      <main
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
