import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Không được để trống!");
      return;
    }

    const data: string = localStorage.getItem("users") ?? "[]";
    const users = JSON.parse(data);

    const user = users.find(
      (u: { email: string; password: string }) =>
        u.email === email && u.password === password
    );

    if (!user) {
      setError("Email hoặc mật khẩu sai!");
      return;
    }

    alert("Đăng nhập thành công!");
    navigate("/");
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Login account</h2>
        {error && <p className="error">{error}</p>}

        <label>Your email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@company.com"
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login an account</button>

        <p>
          Already have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
}
