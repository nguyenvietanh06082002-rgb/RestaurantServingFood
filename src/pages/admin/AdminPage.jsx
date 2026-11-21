import { useState } from "react";
import { Link } from "react-router";
import { ROUTES } from "@/constants";
import banquetHall from "../../assets/images/banquet-hall.png";
import homeIcon from "../../assets/images/home.png";
import informationIcon from "../../assets/images/information.png";
import memberIcon from "../../assets/images/member.png";
import reservationIcon from "../../assets/images/table.png";
import settingsIcon from "../../assets/images/settings.png";
import logoutIcon from "../../assets/images/logout.png";
import { InformationSection } from "./InformationSection";
import "./AdminPage.css";

const adminSections = [
  {
    label: "Home",
    description: "Tổng quan hoạt động quản trị nhà hàng.",
    icon: homeIcon,
  },
  {
    label: "Information",
    description: "Xem và cập nhật thông tin nhà hàng.",
    icon: informationIcon,
  },
  {
    label: "Member",
    description: "Quản lý các thành viên của nhà hàng.",
    icon: memberIcon,
  },
  {
    label: "Reserve a Table",
    description: "Theo dõi và quản lý thông tin đặt bàn.",
    icon: reservationIcon,
  },
  {
    label: "Settings",
    description: "Tùy chỉnh các thiết lập quản trị.",
    icon: settingsIcon,
  },
];

export function AdminPage({ onLogout }) {
  const [activeSection, setActiveSection] = useState("Home");
  const activePage = adminSections.find(
    (section) => section.label === activeSection,
  );

  return (
    <main className="admin-page min-h-[calc(100vh-5rem)]">
      <div className="admin-layout mx-auto min-h-[calc(100vh-5rem)] max-w-[1600px]">
        {/*SideBar*/}
        <aside className="admin-sidebar">
          <div className="mb-5 flex items-center gap-3 px-2 md:mb-10">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2b219e]">
                Restaurant
              </p>
              <h1 className="text-lg font-bold tracking-tight">Admin Panel</h1>
            </div>
          </div>

          <nav aria-label="Điều hướng quản trị" className="flex-1">
            <p className="mb-3 hidden px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2b219e] md:block">
              Workspace
            </p>
            <ul className="admin-menu">
              {adminSections.map((section) => {
                const isHomeLink = section.label === "Home";
                const isActive = !isHomeLink && activeSection === section.label;
                const itemClassName = `flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors md:py-3 ${
                  isActive
                    ? "bg-[#6A0205] text-white shadow-sm"
                    : "text-[#2b219e] hover:bg-[#ed9121] hover:text-[#6A0205]" //Màu các mục trong sidebar
                }`;
                const itemContent = (
                  <>
                    <img
                      src={section.icon}
                      alt=""
                      aria-hidden="true"
                      className={`h-[18px] w-[18px] shrink-0 object-contain`}
                    />
                    <span className="whitespace-nowrap">{section.label}</span>
                  </>
                );

                return (
                  <li key={section.label} className="shrink-0">
                    {isHomeLink ? (
                      <Link to={ROUTES.HOME} className={itemClassName}>
                        {itemContent}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setActiveSection(section.label)}
                        className={itemClassName}
                      >
                        {itemContent}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {onLogout && (
            <button
              type="button"
              onClick={onLogout}
              className="mt-5 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-[#2b219e] transition-colors hover:bg-[#ed9121] hover:text-[#6A0205]"
            >
              <img
                src={logoutIcon}
                alt=""
                aria-hidden="true"
                className="h-[18px] w-[18px] shrink-0 object-contain"
              />
              <span>Log out</span>
            </button>
          )}
        </aside>

        <section className="admin-content">
          {/*Thông tin tổng quan*/}
          <div className="mx-auto max-w-5xl">
            {activeSection !== "Home" && (
              <p className="text-sm text-[#8D8179]">
                Admin <span className="px-1.5">/</span> {activePage.label}
              </p>
            )}

            <div
              className={`border-b border-[#E4DCD5] pb-6 ${
                activeSection === "Home" ? "" : "mt-5"
              }`}
            >
              {activeSection !== "Home" && (
                <h2 className="text-3xl font-semibold tracking-tight text-[#352722]">
                  {activePage.label}
                </h2>
              )}
              <p
                className={`text-sm leading-6 text-[#81756D] ${
                  activeSection === "Home" ? "" : "mt-2"
                }`}
              >
                {activePage.description}
              </p>
            </div>

            {activeSection === "Home" ? (
              <div className="admin-welcome-card">
                <div className="admin-welcome-copy">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A16A54] text-[24px]">
                    WELCOME BACK
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">
                    Quản lý nhà hàng của bạn tại đây.
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#ea3131]">
                    Chọn một mục bên trái để quản lý thông tin, thành viên, đặt
                    bàn và các thiết lập của nhà hàng.
                  </p>
                </div>
                <img
                  src={banquetHall}
                  alt="Không gian nhà hàng"
                  className="admin-welcome-image"
                />
              </div>
            ) : activeSection === "Information" ? (
              <InformationSection />
            ) : (
              <div className="mt-8 rounded-2xl border border-dashed border-[#DCCFC5] bg-white/70 px-6 py-12 text-center">
                <h3 className="text-lg font-semibold">{activeSection}</h3>
                <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-[#81756D]">
                  Khu vực này đã sẵn sàng để bạn bổ sung các chức năng quản lý.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
