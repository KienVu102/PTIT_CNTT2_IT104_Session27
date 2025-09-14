import { Link } from "react-router-dom";

export default function About() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>About</h1>
      <p>Trang giới thiệu mẫu.</p>
      <Link to="/">Quay về trang chủ</Link>
    </div>
  );
}
