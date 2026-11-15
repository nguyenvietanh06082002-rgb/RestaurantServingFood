import { LoginForm } from "@/features/auth";
import { Link, useLocation } from "react-router";
import { ROUTES } from "@/constants";
import "./LoginPage.css";

export function LoginPage({ onLogin }) {
  const location = useLocation();

  return (
    <section className="login-page">
      <div className="login-card">
        <aside className="login-promo">
          <span className="login-promo__eyebrow">PARTY BOYS</span>
          <h2>Tham gia bầu không khí náo nhiệt</h2>
          <p>
            Cùng bạn bè và gia đình tụ tập
          </p>
        </aside>

        <div className="login-panel">
          <p className="login-panel__eyebrow">CỔNG ĐĂNG NHẬP HỘI VIÊN</p>
          <h1>Đăng Nhập Thành Viên</h1>
          <p>Chào mừng quý khách quay trở lại.</p>
          {location.state?.registered && (
            <p className="login-success" role="status">
              Đăng ký thành công. Vui lòng đăng nhập để tiếp tục.
            </p>
          )}
          <LoginForm onLogin={onLogin} />
          <div className="login-register-link">
            <span>Chưa có tài khoản?</span>
            <Link to={ROUTES.REGISTER}>Đăng ký thành viên</Link>
          </div>
        </div>
      </div>
    </section>
  );
}