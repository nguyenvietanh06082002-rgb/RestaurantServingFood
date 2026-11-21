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
    <section className="register-page bg-[#fbf3ef] px-[5%] py-8">
      <div className="register-card mx-auto grid max-w-[1120px] grid-cols-[0.9fr_1.1fr] overflow-hidden rounded-lg bg-white shadow-[0_12px_30px_rgb(40_25_20_/_12%)]">
        <aside
          className="register-promo flex min-h-[640px] flex-col justify-between p-12 text-white"
          style={{
            background:
              'linear-gradient(rgba(35, 31, 28, 0.72), rgba(35, 31, 28, 0.86)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWSVowTAoV_2U4AEtFZ6x2TMjUE-dyHwnmpIADdaW92lJycDTKrd-pSAwKDxKPbyW58nFS7eTWrPqF2IBISd6Lejz5mW45kJIfG3nk2-8jgp7smkPxm5ao37f-218ypwIBxDhUwrij0Rfn_Xb41Mctheu0m4ZsnxnhVvIgQroYF6JRleImH4VvjQNl8Twc-qEm7oxfE2So_ZheCjv_18dWrQycFMphhqXiOnIIuW0") center / cover',
          }}
        >
          <span className="register-promo__eyebrow text-[11px] font-bold tracking-[0.14em] text-[#9c7640]">
            PARTY BOYS
          </span>
          <div>
            <h1 className="mb-5 max-w-[470px] font-[Georgia,_'Times_New_Roman',_serif] text-[clamp(32px,4vw,48px)] font-normal leading-[1.2]">
              Cùng bạn bè và gia đình tụ tập
            </h1>
            <p className="max-w-[420px] text-[14px] leading-[1.7] text-[#e7ddd3]">
              Thưởng thức và hòa mình vào bữa tiệc tại PARTY BOYS
            </p>
          </div>
          <p className="register-promo__note max-w-[420px] border-t border-white/[0.22] pt-5 text-[14px] leading-[1.7] text-[#e7ddd3]">
            Đăng ký nhanh · Ưu đãi riêng · Trải nghiệm đáng nhớ
          </p>
        </aside>

        <div className="register-panel px-12 py-[42px]">
          <p className="register-panel__eyebrow text-[11px] font-bold tracking-[0.14em] text-[#9c7640]">
            GIA NHẬP HỘI VIÊN
          </p>
          <h2 className="mb-[6px] mt-[10px] font-[Georgia,_'Times_New_Roman',_serif] text-[30px] text-[#302722]">
            Tạo Tài Khoản
          </h2>
          <p className="register-panel__intro mb-6 text-[14px] text-[#766761]">
            Đăng ký để tham gia bữa tiệc nào!!!
          </p>

          <form
            className="register-form flex flex-col gap-[9px]"
            onSubmit={handleSubmit}
          >
            <label
              className="mt-[3px] text-[13px] font-semibold text-[#382d28]"
              htmlFor="register-name"
            >
              Họ và tên
            </label>
            <input
              className="box-border min-h-[42px] w-full rounded-[3px] border border-[#eadbd3] bg-[#fff8f4] px-3 text-[#302722] [font:inherit] placeholder:text-[#a28f87] focus:border-[#8f211b] focus:outline-none focus:shadow-[0_0_0_3px_rgb(143_33_27_/_12%)]"
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

            <label
              className="mt-[3px] text-[13px] font-semibold text-[#382d28]"
              htmlFor="register-email"
            >
              Email
            </label>
            <input
              className="box-border min-h-[42px] w-full rounded-[3px] border border-[#eadbd3] bg-[#fff8f4] px-3 text-[#302722] [font:inherit] placeholder:text-[#a28f87] focus:border-[#8f211b] focus:outline-none focus:shadow-[0_0_0_3px_rgb(143_33_27_/_12%)]"
              id="register-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="email@example.com"
              required
              value={form.email}
              onChange={handleChange}
            />

            <label
              className="mt-[3px] text-[13px] font-semibold text-[#382d28]"
              htmlFor="register-username"
            >
              Tên đăng nhập
            </label>
            <input
              className="box-border min-h-[42px] w-full rounded-[3px] border border-[#eadbd3] bg-[#fff8f4] px-3 text-[#302722] [font:inherit] placeholder:text-[#a28f87] focus:border-[#8f211b] focus:outline-none focus:shadow-[0_0_0_3px_rgb(143_33_27_/_12%)]"
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

            <label
              className="mt-[3px] text-[13px] font-semibold text-[#382d28]"
              htmlFor="register-password"
            >
              Mật khẩu
            </label>
            <input
              className="box-border min-h-[42px] w-full rounded-[3px] border border-[#eadbd3] bg-[#fff8f4] px-3 text-[#302722] [font:inherit] placeholder:text-[#a28f87] focus:border-[#8f211b] focus:outline-none focus:shadow-[0_0_0_3px_rgb(143_33_27_/_12%)]"
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

            <label
              className="mt-[3px] text-[13px] font-semibold text-[#382d28]"
              htmlFor="register-confirm-password"
            >
              Xác nhận mật khẩu
            </label>
            <input
              className="box-border min-h-[42px] w-full rounded-[3px] border border-[#eadbd3] bg-[#fff8f4] px-3 text-[#302722] [font:inherit] placeholder:text-[#a28f87] focus:border-[#8f211b] focus:outline-none focus:shadow-[0_0_0_3px_rgb(143_33_27_/_12%)]"
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
              <p
                className="register-error my-1 text-[13px] text-[#a3221c]"
                role="alert"
              >
                {error}
              </p>
            )}

            <button
              className="mt-[10px] min-h-12 cursor-pointer border-0 bg-[#8f211b] text-[13px] font-bold text-white transition-colors duration-150 hover:bg-[#6a0205]"
              type="submit"
            >
              ĐĂNG KÝ THÀNH VIÊN
            </button>
          </form>

          <div className="register-login-link mt-[18px] flex items-center justify-between gap-3 bg-[#fbf3ef] p-[13px_15px] text-[13px] text-[#705e58]">
            <span>Đã có tài khoản?</span>
            <Link
              className="font-bold text-[#8f211b] underline underline-offset-[3px]"
              to={ROUTES.LOGIN}
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
