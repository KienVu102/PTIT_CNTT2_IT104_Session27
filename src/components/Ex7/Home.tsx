import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Trang chủ</h1>
      <p>
        Đây là trang chủ. Thử gõ một đường dẫn không tồn tại (ví dụ{" "}
        <code>/abcxyz</code>) để xem trang 404.
      </p>
      <Link to="/about">
        <button
          style={{
            padding: "8px 16px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "6px",
          }}
        >
          About
        </button>
      </Link>
    </div>
  );
}
