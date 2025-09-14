import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          maxWidth: "400px",
        }}
      >
        <h2 style={{ fontSize: "22px", marginBottom: "12px" }}>
          Trang bạn tìm không tồn tại.
        </h2>
        <p style={{ marginBottom: "20px", color: "#555" }}>
          Có thể đường dẫn nhập sai hoặc trang đã được di chuyển.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <button
            onClick={() => navigate("/")}
            style={{
              background: "#4f46e5",
              color: "#fff",
              padding: "8px 16px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Quay về trang chủ
          </button>
          <button
            onClick={() => navigate(-1)}
            style={{
              background: "#6b7280",
              color: "#fff",
              padding: "8px 16px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Quay lại
          </button>
        </div>
      </div>
    </div>
  );
}