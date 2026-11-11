import React from "react";
import { login } from "../services/authService";

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
    navigate(ROUTES.PROFILE);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        placeholder="Tên đăng nhập"
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input
        type="password" 
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Đăng nhập</button>
      <button type="button" onClick={handleBack}>Quay lại</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <p>Tài khoản thử: <b>admin / 123</b> (quản trị) hoặc <b>vanh / 123</b> (người dùng thường)</p>
    </form>
  );
}