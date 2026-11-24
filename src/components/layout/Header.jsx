import React, { useState } from "react";
import logo from "../../assets/images/logoNH.png";
import human from "../../assets/images/human.png";
import { Link } from "react-router";
import { ROUTES } from "@/constants";
import { ROLES } from "@/features/auth";

export function Header({ user, onLogout }) {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const accountRoute =
    user?.role === ROLES.ADMIN ? ROUTES.ADMIN : ROUTES.PROFILE;

  return (
    <header className="w-full bg-[#41e9e1] border-t-4 border-[#3B2923]">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 py-2 px-4">
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

        <button
          type="button"
          aria-label={
            mobileMenuOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng"
          }
          aria-expanded={mobileMenuOpen}
          aria-controls="header-menu"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded border border-[#6A0205] text-[#6A0205] xl:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1">
            <span className="h-0.5 w-full bg-current" />
            <span className="h-0.5 w-full bg-current" />
            <span className="h-0.5 w-full bg-current" />
          </span>
        </button>

        <div
          id="header-menu"
          className={`${mobileMenuOpen ? "flex" : "hidden"} w-full flex-col gap-4 border-t border-[#6A0205]/20 pt-4 xl:flex xl:w-auto xl:flex-row xl:items-center xl:gap-8 xl:border-0 xl:pt-0`}
        >
          <nav className="flex flex-col items-start gap-4 whitespace-nowrap text-sm text-[#49332D] xl:flex-row xl:items-center xl:gap-8">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="shrink-0 whitespace-nowrap cursor-pointer text-[#58413E] font-semibold text-base relative transition duration-300 after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[1px] after:bg-[#58413E] after:transition-all after:duration-300 hover:after:w-full"
            >
              Trang chủ
            </Link>
            <p className="shrink-0 whitespace-nowrap cursor-pointer text-[#58413E] font-semibold text-base relative transition duration-300 after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[1px] after:bg-[#58413E] after:transition-all after:duration-300 hover:after:w-full">
              Giới thiệu
            </p>
            <Link
              to={ROUTES.PRODUCTS}
              onClick={() => setMobileMenuOpen(false)}
              className="shrink-0 whitespace-nowrap cursor-pointer text-[#58413E] font-semibold text-base relative transition duration-300 after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[1px] after:bg-[#58413E] after:transition-all after:duration-300 hover:after:w-full"
            >
              Thực đơn
            </Link>
            <Link
              to={ROUTES.SPACES}
              onClick={() => setMobileMenuOpen(false)}
              className="shrink-0 whitespace-nowrap cursor-pointer text-[#58413E] font-semibold text-base relative transition duration-300 after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[1px] after:bg-[#58413E] after:transition-all after:duration-300 hover:after:w-full"
            >
              Không gian
            </Link>
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

          <div className="flex flex-col items-start gap-3 xl:flex-row xl:items-center">
            <Link
              to={ROUTES.RESERVATION}
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#941F1A] text-white px-5 py-3 text-xs font-semibold hover:bg-[#6A0205] cursor-pointer transition duration-300"
            >
              ĐẶT BÀN NGAY
            </Link>

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
                      className="absolute left-0 top-full z-50 mt-2 w-48 rounded bg-black py-1 shadow-lg xl:left-auto xl:right-0"
                    >
                      <Link
                        to={ROUTES.PROFILE}
                        role="menuitem"
                        onClick={() => {
                          setAccountMenuOpen(false);
                          setMobileMenuOpen(false);
                        }}
                        className="block px-4 py-2 text-sm text-[#ea3535] hover:bg-[#FFF9F5]"
                      >
                        Thông tin cá nhân
                      </Link>

                      <button
                        type="button"
                        role="menuitem"
                        onClick={() => {
                          setAccountMenuOpen(false);
                          setMobileMenuOpen(false);
                          onLogout();
                        }}
                        className="block w-full px-4 py-2 text-left text-sm text-[#ea3535] hover:bg-[#FFF9F5]"
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
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-[#6A0205] text-white rounded-full w-9 h-9 flex items-center justify-center"
                >
                  <img src={human} alt="" className="w-[12px] h-[12px]" />
                </Link>
              )
            ) : (
              <Link
                to={ROUTES.LOGIN}
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#6A0205] text-white px-4 py-2.5 text-xs font-semibold hover:bg-[#941F1A] transition duration-300 whitespace-nowrap"
              >
                ĐĂNG NHẬP / ĐĂNG KÝ
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
