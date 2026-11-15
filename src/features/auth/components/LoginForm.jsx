import { useState } from "react";
import { useNavigate } from "react-router";
import { ROUTES } from "@/constants";
import { ROLES } from "../data/users";
import { login } from "../services/authService";
import "./LoginForm.css";

export function LoginForm({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const user = login(username, password);
    if (!user) {
      setError("Sai tên đăng nhập hoặc mật khẩu");
      return;
    }

    onLogin(user);
    navigate(user.role === ROLES.ADMIN ? ROUTES.ADMIN : ROUTES.PROFILE);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <label htmlFor="username">Tên đăng nhập</label>
      <input
        id="username"
        name="username"
        type="text"
        autoComplete="username"
        required
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />

      <label htmlFor="password">Mật khẩu</label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Đăng nhập</button>
      <button className="login-back-button" type="button" onClick={handleBack}>
        Quay lại
      </button>
    </form>
  );
}