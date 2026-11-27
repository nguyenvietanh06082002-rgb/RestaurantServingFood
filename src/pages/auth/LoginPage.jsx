import { useState } from "react";
import { LoginForm } from "@/features/auth";
import { Link, useLocation, useNavigate } from "react-router";
import { ROUTES } from "@/constants";
import "./LoginPage.css";

export function LoginPage({ onLogin }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showRegistrationSuccess, setShowRegistrationSuccess] = useState(
    Boolean(location.state?.registered)
  );

  const dismissRegistrationSuccess = () => {
    setShowRegistrationSuccess(false);
    navigate(ROUTES.LOGIN, {
      replace: true,
      state: location.state?.username
        ? { username: location.state.username }
        : null,
    });
  };

  return (
    <>
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

      {showRegistrationSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4 py-6">
          <div
            aria-labelledby="registration-success-title"
            aria-modal="true"
            className="w-full max-w-[440px] rounded-lg bg-white px-8 py-9 text-center shadow-2xl"
            role="dialog"
          >
            <div
              aria-hidden="true"
              className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#edf6ee] text-3xl text-[#38734a]"
            >
              ✓
            </div>
            <h2
              className="mb-3 font-[Georgia,_'Times_New_Roman',_serif] text-2xl text-[#6a0205]"
              id="registration-success-title"
            >
              Chúc mừng bạn!
            </h2>
            <p className="mb-7 text-sm leading-6 text-[#705e58]">
              Bạn đã đăng ký thành công. Hãy đăng nhập để tiếp tục.
            </p>
            <button
              autoFocus
              className="min-h-11 w-full cursor-pointer border-0 bg-[#8f211b] px-5 text-sm font-bold text-white transition-colors hover:bg-[#6a0205]"
              onClick={dismissRegistrationSuccess}
              type="button"
            >
              Tiếp tục đăng nhập
            </button>
          </div>
        </div>
      )}
    </>
  );
}