import { LoginForm } from "@/features/auth";
import { Link, useLocation } from "react-router";
import { ROUTES } from "@/constants";
import "./LoginPage.css";

export function LoginPage({ onLogin }) {
  const location = useLocation();

  return (
    <section className="login-page bg-[#fbf3ef] px-[5%] py-8">
      <div className="login-card mx-auto grid min-h-[580px] max-w-[1120px] grid-cols-[1fr_1fr] overflow-hidden rounded-lg bg-white shadow-[0_12px_30px_rgb(40_25_20_/_12%)]">
        <aside
          className="login-promo p-12 text-white"
          style={{
            background:
              'linear-gradient(rgba(35, 31, 28, 0.72), rgba(35, 31, 28, 0.82)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWSVowTAoV_2U4AEtFZ6x2TMjUE-dyHwnmpIADdaW92lJycDTKrd-pSAwKDxKPbyW58nFS7eTWrPqF2IBISd6Lejz5mW45kJIfG3nk2-8jgp7smkPxm5ao37f-218ypwIBxDhUwrij0Rfn_Xb41Mctheu0m4ZsnxnhVvIgQroYF6JRleImH4VvjQNl8Twc-qEm7oxfE2So_ZheCjv_18dWrQycFMphhqXiOnIIuW0") center / cover',
          }}
        >
          <span className="login-promo__eyebrow">PARTY BOYS</span>
          <h2>Tham gia bầu không khí náo nhiệt</h2>
          <p>Cùng bạn bè và gia đình tụ tập</p>
        </aside>

        <div className="login-panel p-12">
          <p className="login-panel__eyebrow">CỔNG ĐĂNG NHẬP HỘI VIÊN</p>
          <h1>Đăng Nhập Thành Viên</h1>
          <p>Chào mừng quý khách quay trở lại.</p>
          {location.state?.registered && (
            <p
              className="login-success my-[18px] text-[14px] text-[#38734a]"
              role="status"
            >
              Đăng ký thành công. Vui lòng đăng nhập để tiếp tục.
            </p>
          )}
          <LoginForm
            onLogin={onLogin}
            initialUsername={location.state?.username || ""}
          />
          <div className="login-register-link mt-5 flex items-center justify-between gap-3 bg-[#fbf3ef] px-4 py-[14px] text-[13px] text-[#705e58]">
            <span>Chưa có tài khoản?</span>
            <Link
              className="font-bold text-[#8f211b] underline underline-offset-[3px]"
              to={ROUTES.REGISTER}
            >
              Đăng ký thành viên
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}