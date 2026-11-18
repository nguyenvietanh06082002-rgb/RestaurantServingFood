import React, { useState } from "react";
import logo from "../../assets/images/logoNH.png";
import human from "../../assets/images/human.png";
import { Link } from "react-router";
import { ROUTES } from "@/constants";
import { ROLES } from "@/features/auth";

export function Header({ user, onLogout }) {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  const accountRoute =
    user?.role === ROLES.ADMIN ? ROUTES.ADMIN : ROUTES.PROFILE;

  return (
    <header className="w-full bg-[#FFF9F5] border-t-4 border-[#3B2923]">
      <div className="mx-auto flex w-full max-w-7xl flex-nowrap items-center justify-between gap-4 py-2 px-4">
        <div className="flex shrink-0 items-center gap-2">
          <img
            src={logo}
            alt="Logo nhà hàng"
            className="h-14 w-14 rounded-full object-cover "
          />
          <div>
            <p className="text-xl font-bold text-[#6A0205]">PARTY BOYS</p>
            <p className="text-[9px] tracking-widest text-[#6A0205]">
              FINE DINING & GRILL
            </p>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="flex shrink-0 flex-nowrap items-center gap-8 whitespace-nowrap text-sm text-[#49332D]">
          <Link
            to="/"
            className="shrink-0 whitespace-nowrap cursor-pointer text-[#58413E] font-semibold text-base relative transition duration-300 after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[1px] after:bg-[#58413E] after:transition-all after:duration-300 hover:after:w-full"
          >
            Trang chủ
          </Link>
          <p className="shrink-0 whitespace-nowrap cursor-pointer text-[#58413E] font-semibold text-base relative transition duration-300 after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[1px] after:bg-[#58413E] after:transition-all after:duration-300 hover:after:w-full ">
            Giới thiệu
          </p>
          <p className="shrink-0 whitespace-nowrap cursor-pointer text-[#58413E] font-semibold text-base relative transition duration-300 after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[1px] after:bg-[#58413E] after:transition-all after:duration-300 hover:after:w-full">
            Thực đơn
          </p>
          <p className="shrink-0 whitespace-nowrap cursor-pointer text-[#58413E] font-semibold text-base relative transition duration-300 after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[1px] after:bg-[#58413E] after:transition-all after:duration-300 hover:after:w-full">
            Không gian
          </p>
          <p className="shrink-0 whitespace-nowrap cursor-pointer text-[#58413E] font-semibold text-base relative transition duration-300 after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[1px] after:bg-[#58413E] after:transition-all after:duration-300 hover:after:w-full">
            Đánh giá
          </p>
          <p className="shrink-0 whitespace-nowrap cursor-pointer text-[#58413E] font-semibold text-base relative transition duration-300 after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[1px] after:bg-[#58413E] after:transition-all after:duration-300 hover:after:w-full">
            Tin tức
          </p>
          <p className="shrink-0 whitespace-nowrap cursor-pointer text-[#58413E] font-semibold text-base relative transition duration-300 after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[1px] after:bg-[#58413E] after:transition-all after:duration-300 hover:after:w-full">
            Liên hệ
          </p>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button className="bg-[#941F1A] text-white px-5 py-3 text-xs font-semibold hover:bg-[#6A0205] cursor-pointer hover:scale-110 transition duration-300">
            ĐẶT BÀN NGAY
          </button>

          {user ? (
            user.role === ROLES.ADMIN ? (
              <div className="relative">
                <button
                  type="button"
                  aria-label="Mở menu tài khoản"
                  aria-haspopup="menu"
                  aria-expanded={accountMenuOpen}
                  onClick={() => setAccountMenuOpen((open) => !open)}
                  className="bg-[#6A0205] text-white rounded-full w-9 h-9 flex items-center justify-center"
                >
                  <img src={human} alt="" className="w-[12px] h-[12px]" />
                </button>

                {accountMenuOpen && (
                  <div
                    role="menu"
                    className="absolute right-0 top-full z-50 mt-2 w-48 rounded bg-white py-1 shadow-lg"
                  >
                    <Link
                      to={ROUTES.PROFILE}
                      role="menuitem"
                      onClick={() => setAccountMenuOpen(false)}
                      className="block px-4 py-2 text-sm text-[#49332D] hover:bg-[#FFF9F5]"
                    >
                      Thông tin cá nhân
                    </Link>

                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        setAccountMenuOpen(false);
                        onLogout();
                      }}
                      className="block w-full px-4 py-2 text-left text-sm text-[#49332D] hover:bg-[#FFF9F5]"
                    >
                      Đăng xuất
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={accountRoute}
                aria-label="Trang tài khoản"
                title={user.name}
                className="bg-[#6A0205] text-white rounded-full w-9 h-9 flex items-center justify-center"
              >
                <img src={human} alt="" className="w-[12px] h-[12px]" />
              </Link>
            )
          ) : (
            <Link
              to={ROUTES.LOGIN}
              className="bg-[#6A0205] text-white px-4 py-2.5 text-xs font-semibold hover:bg-[#941F1A] transition duration-300 whitespace-nowrap"
            >
              ĐĂNG NHẬP / ĐĂNG KÝ
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;