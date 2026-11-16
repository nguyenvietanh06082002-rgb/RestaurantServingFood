import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ROUTES } from "@/constants";
import { registerUser } from "@/features/auth";
import "./RegisterPage.css";

export function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Mật khẩu xác nhận không khớp.");
      return;
    }

    const user = registerUser({
      name: form.name.trim(),
      email: form.email.trim(),
      username: form.username.trim(),
      password: form.password,
    });

    if (!user) {
      setError("Tên đăng nhập hoặc email đã được sử dụng.");
      return;
    }

    navigate(ROUTES.LOGIN, {
      state: { registered: true, username: user.username },
    });
  };

  return (
    <section className="register-page">
      <div className="register-card">
        <aside className="register-promo">
          <span className="register-promo__eyebrow">
            PARTY BOYS
          </span>
          <div>
            <h1>Cùng bạn bè và gia đình tụ tập</h1>
            <p>
              Thưởng thức và hòa mình vào bữa tiệc tại PARTY BOYS
            </p>
          </div>
          <p className="register-promo__note">
            Đăng ký nhanh · Ưu đãi riêng · Trải nghiệm đáng nhớ
          </p>
        </aside>

        <div className="register-panel">
          <p className="register-panel__eyebrow">GIA NHẬP HỘI VIÊN</p>
          <h2>Tạo Tài Khoản</h2>
          <p className="register-panel__intro">
            Đăng ký để tham gia bữa tiệc nào!!!
          </p>

          <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="register-name">Họ và tên</label>
            <input
              id="register-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Nguyễn Văn An"
              minLength={2}
              required
              value={form.name}
              onChange={handleChange}
            />

            <label htmlFor="register-email">Email</label>
            <input
              id="register-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="email@example.com"
              required
              value={form.email}
              onChange={handleChange}
            />

            <label htmlFor="register-username">Tên đăng nhập</label>
            <input
              id="register-username"
              name="username"
              type="text"
              autoComplete="username"
              placeholder="Tên đăng nhập"
              minLength={3}
              required
              value={form.username}
              onChange={handleChange}
            />

            <label htmlFor="register-password">Mật khẩu</label>
            <input
              id="register-password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="Tối thiểu 6 ký tự"
              minLength={6}
              required
              value={form.password}
              onChange={handleChange}
            />

            <label htmlFor="register-confirm-password">Xác nhận mật khẩu</label>
            <input
              id="register-confirm-password"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              placeholder="Nhập lại mật khẩu"
              minLength={6}
              required
              value={form.confirmPassword}
              onChange={handleChange}
            />

            {error && (
              <p className="register-error" role="alert">
                {error}
              </p>
            )}

            <button type="submit">ĐĂNG KÝ THÀNH VIÊN</button>
          </form>

          <div className="register-login-link">
            <span>Đã có tài khoản?</span>
            <Link to={ROUTES.LOGIN}>Đăng nhập</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
