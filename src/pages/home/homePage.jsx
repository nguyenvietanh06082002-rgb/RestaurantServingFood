import React, { useState } from "react";
import { MenuShowcase } from "../../components/modals/MenuShowcase";
import { Link } from "react-router";
import { ROUTES } from "@/constants";
import { categories } from "../../hooks/data/foods";
import banquetHall from "../../assets/images/banquet-hall.png";
import right from "../../assets/images/right.png";
import tick from "../../assets/images/tick.png";
import location from "../../assets/images/location.png";
import email from "../../assets/images/email.png";
import phone from "../../assets/images/phone.png";
import time from "../../assets/images/time.png";
import bar from "../../assets/images/bar.png";
import cool from "../../assets/images/cool.png";
import "./HomePage.css";

const dishes = categories.flatMap((category) => category.dishes);

export function HomePage() {
  const [selectedDish, setSelectedDish] = useState(dishes[0]);
  {
    /* Chọn món */
  }
  const handleSelectDish = (dish) => {
    setSelectedDish(dish);

    document
      .getElementById("menu-showcase")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  {
    /* Control left&right */
  }
  const moveDish = (step) => {
    const currentIndex = dishes.indexOf(selectedDish);
    const nextIndex = (currentIndex + step + dishes.length) % dishes.length;

    setSelectedDish(dishes[nextIndex]);
  };

  return (
    <>
      <main className="w-full bg-[#FFF8F4]">
        {/* HERO BANNER */}
        <section className="relative w-full home-hero flex items-center justify-center overflow-hidden bg-[#33302C]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${banquetHall})`,
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#33302C] via-[#33302C]/70 to-[#33302C]/50" />

          <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-16 pt-36 pb-20 text-center flex flex-col items-center home-hero__content">
            <div className="cursor-pointer hover:scale-110 transition duration-300 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#E6C280] backdrop-blur-md mb-6">
              <span className="text-[11px] uppercase tracking-widest font-semibold">
                Fine Dining & Artisan Grill
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl text-[#F7EFEA] tracking-tight mb-6 leading-tight home-hero__title">
              Nhập cuộc vui cùng mọi người nào!!!
            </h1>

            <p className="text-lg text-[#F4ECE7] max-w-2xl opacity-90 mb-10 font-light leading-relaxed">
              Tham gia các bữa tiệc sôi động và thỏa thích vui chơi Party Boys
              luôn chào đón bạn!!!
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to={ROUTES.RESERVATION}
                className="cursor-pointer hover:scale-105 transition duration-300 w-full sm:w-auto px-8 py-4 bg-[#8B1E19] text-white text-sm font-semibold rounded uppercase tracking-wider hover:bg-[#6A0205] inline-flex items-center justify-center gap-2"
              >
                Đặt bàn trải nghiệm
                <img
                  src={right}
                  alt=""
                  className="w-3 h-3 brightness-0 invert"
                />
              </Link>

              <Link
                to={ROUTES.PRODUCTS}
                className="cursor-pointer hover:scale-105 transition duration-300 w-full sm:w-auto px-8 py-4 bg-white/10 text-[#E6C280] backdrop-blur-md rounded text-sm font-semibold uppercase tracking-wider hover:bg-white/20 inline-flex items-center justify-center gap-2"
              >
                Xem thực đơn
                <img
                  src={right}
                  alt=""
                  className="w-3 h-3 [filter:brightness(0)_saturate(100%)_invert(82%)_sepia(32%)_saturate(520%)_hue-rotate(349deg)_brightness(98%)]"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* MENU SHOWCASE */}

        <MenuShowcase
          selectedDish={selectedDish}
          onPrevious={() => moveDish(-1)}
          onNext={() => moveDish(1)}
        />

        {/* SIGNATURE MENU */}
        <section
          className="home-signature w-full bg-[#FAF2ED]"
          id="signature-menu"
        >
          <div className="home-signature__inner mx-auto max-w-7xl">
            <div className="home-signature__header mb-10">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#7D562D] block mb-2 font-semibold">
                  Tinh tuyển ẩm thực
                </span>

                <h2 className="home-signature__title font-serif text-[#6A0205]">
                  Món Tuyển Chọn Biểu Trưng
                </h2>
              </div>

              <Link
                to={ROUTES.PRODUCTS}
                className="text-sm text-[#6A0205] font-semibold hover:underline"
              >
                Khám phá toàn bộ thực đơn →
              </Link>
            </div>

            {/* DANH SÁCH MÓN ĂN */}
            <div className="home-signature__grid">
              {dishes.map((dish) => (
                <article
                  key={dish.id}
                  onClick={() => handleSelectDish(dish)}
                  className="home-signature__card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col group cursor-pointer"
                >
                  <div className="home-signature__image-wrap">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="home-signature__details flex flex-col flex-grow justify-between gap-4">
                    <div>
                      <div className="home-signature__name-price mb-2">
                        <h3 className="font-semibold text-lg text-[#1E1B18]">
                          {dish.name}
                        </h3>

                        <span className="text-[#7D562D] font-semibold whitespace-nowrap">
                          {dish.price}
                        </span>
                      </div>

                      <p className="text-xs italic text-[#7D562D] mb-2">
                        {dish.englishName}
                      </p>

                      <p className="text-sm text-[#58413E] leading-relaxed">
                        {dish.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#EEE7E1] text-xs text-[#7D562D]">
                      Đồ uống đi kèm: {dish.wine}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RESTAURANT SPACE */}
        <section className="home-space w-full bg-[#FFF8F4]">
          <div className="home-space__inner mx-auto max-w-7xl">
            <div className="home-space__layout">
              <div className="home-space__copy flex flex-col gap-5">
                <span className="text-xs uppercase tracking-widest text-[#7D562D] font-semibold">
                  Không gian & Kiến trúc
                </span>

                <h2 className="home-space__title font-serif text-3xl text-[#6A0205] leading-tight">
                  Không gian thân thiện thoải mái
                </h2>

                <p className="text-[15px] text-[#58413E] leading-relaxed text-justify">
                  Giải tỏa căng thẳng, hòa mình vào nhịp điệu sôi động, PARTY
                  BOYS mở ra cho bạn một không gian riêng để bạn cùng gia đình
                  bạn bè tạo ra những kỉ niệm đáng nhớ!
                </p>

                <div className="flex flex-col gap-4 text-sm text-[#49332D]">
                  <p className="flex items-center gap-2">
                    {" "}
                    <img src={tick} alt="logoTick" className="w-3 h-3" />
                    Phòng tiệc hiện đại thoáng mát
                  </p>
                  <p className="flex items-center gap-2">
                    {" "}
                    <img src={tick} alt="logoTick" className="w-3 h-3" />
                    Phòng tiệc riêng tư dành cho các cuộc gặp mặt quan trọng
                  </p>
                  <p className="flex items-center gap-2">
                    {" "}
                    <img src={tick} alt="logoTick" className="w-3 h-3" />
                    Quầy bar mở & ban công ngắm nhìn phố đêm
                  </p>
                </div>

                <Link
                  to={ROUTES.SPACES}
                  className="pt-2 text-sm text-[#6A0205] uppercase tracking-wider font-semibold hover:underline"
                >
                  Chiêm ngưỡng không gian →
                </Link>
              </div>

              <div className="home-space__gallery">
                <div className="home-space__card rounded-lg overflow-hidden shadow-md group relative">
                  <img
                    src={bar}
                    alt="Bar Counter"
                    className="home-space__image"
                  />

                  <div className="home-space__caption">
                    <span className="font-serif text-xl text-white">
                      Bar Counter
                    </span>
                  </div>
                </div>

                <div className="home-space__card rounded-lg overflow-hidden shadow-md group relative">
                  <img
                    src={cool}
                    alt="Phòng VIP"
                    className="home-space__image"
                  />

                  <div className="home-space__caption">
                    <span className="font-serif text-xl text-white">
                      Phòng VIP
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RESERVATION */}
        <section
          className="home-reservation w-full bg-[#33302C] text-white"
          id="reservation"
        >
          <div className="home-reservation__inner text-center">
            <span className="text-xs uppercase tracking-widest text-[#E6C280] block mb-3">
              Phòng Riêng
            </span>

            <h2 className="home-reservation__title font-serif text-3xl mb-5">
              Đặt Bàn
            </h2>

            <p className="text-[#F4ECE7] max-w-xl mx-auto mb-10 font-light leading-relaxed">
              Để chuẩn bị chu đáo nhất cho buổi tiệc của quý khách, vui lòng đặt
              bàn trước hoặc liên hệ hotline để được phục vụ riêng biệt.
            </p>

            <div className="home-reservation__card">
              <div className="home-reservation__contact">
                <span className="text-xs uppercase tracking-wider text-[#E6C280] block mb-2">
                  Hotline hỗ trợ trực tiếp 24/7
                </span>

                <a
                  href="tel:0875535421"
                  className="font-serif text-2xl md:text-3xl hover:text-[#E6C280] transition"
                >
                  087 5535 421
                </a>

                <p className="text-sm text-[#F4ECE7]/70 mt-2">
                  Số 80 Đinh Công Tráng, phường Tân Định, Quận 1, Thành phố Hồ
                  Chí Minh
                </p>
              </div>

              <a
                href="#reservation"
                className="home-reservation__button px-8 py-4 bg-[#8B1E19] text-white text-sm font-semibold rounded uppercase tracking-wider hover:bg-[#6A0205] transition duration-300 text-center"
              >
                Điền phiếu đặt bàn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="home-footer w-full bg-[#FAF2ED] text-[#58413E]">
        <div className="home-footer__inner mx-auto max-w-7xl">
          <div className="home-footer__grid">
            {/* BRAND */}
            <div className="flex flex-col gap-5">
              <div>
                <h3 className="font-serif text-2xl text-[#6A0205] tracking-widest font-semibold">
                  PARTY BOYS
                </h3>

                <span className="text-[10px] uppercase tracking-widest text-[#7D562D]">
                  Fine Dining & Grill
                </span>
              </div>

              <p className="text-sm leading-relaxed">
                Nơi bạn sống và trải nghiệm kỉ niệm đáng nhớ
              </p>
            </div>

            {/* CONTACT */}
            <div className="flex flex-col gap-5">
              <h4 className="font-semibold text-[#1E1B18]">
                Thông Tin & Giờ Mở Cửa
              </h4>

              <div className="flex flex-col gap-3 text-sm">
                <p className="flex items-center gap-2">
                  {" "}
                  <img src={time} alt="logoTime" className="w-3 h-3 " /> Thứ 2 -
                  Chủ Nhật: 10:30 - 22:30
                </p>
                <p className="flex items-center gap-2">
                  {" "}
                  <img src={location} alt="logoLocation" className="w-3 h-3 " />
                  Số 80 Đinh Công Tráng, phường Tân Định, Quận 1, Thành phố Hồ
                  Chí Minh
                </p>
                <p className="flex items-center gap-2">
                  {" "}
                  <img src={phone} alt="logoPhone" className="w-3 h-3 " />{" "}
                  Hotline: 087 5535 421
                </p>
                <p className="flex items-center gap-2">
                  {" "}
                  <img src={email} alt="logoEmail" className="w-3 h-3 " />{" "}
                  restau@partyboys.vn
                </p>
              </div>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-5">
              <h4 className="font-semibold text-[#1E1B18]">Khám Phá</h4>

              <nav className="flex flex-col gap-3 text-sm">
                <a href="#about" className="hover:text-[#6A0205] transition">
                  Về Party Boys
                </a>

                <a
                  href="#signature-menu"
                  className="hover:text-[#6A0205] transition"
                >
                  Thực đơn Party
                </a>

                <a href="#spaces" className="hover:text-[#6A0205] transition">
                  Không gian & Phòng VIP
                </a>

                <a
                  href="#reservation"
                  className="hover:text-[#6A0205] transition"
                >
                  Đặt bàn
                </a>
              </nav>
            </div>

            {/* NEWSLETTER */}
            <div className="flex flex-col gap-5">
              <h4 className="font-semibold text-[#1E1B18]">
                Bản Tin Đặc Quyền
              </h4>

              <p className="text-sm leading-relaxed">
                Chương trình khuyến mãi mùa tới
              </p>

              <form
                className="flex flex-col gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Địa chỉ email của quý khách..."
                  className="w-full px-4 py-3 rounded bg-white text-sm outline-none focus:ring-1 focus:ring-[#6A0205]"
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-[#8B1E19] text-white text-sm font-semibold rounded uppercase tracking-wider hover:bg-[#6A0205] transition"
                >
                  Đăng Ký Thành Viên
                </button>
              </form>
            </div>
          </div>

          <div className="home-footer__bottom">
            <p>© 2025 PARTY BOYS - Fine Dining & Grill. All rights reserved.</p>

            <div className="home-footer__legal">
              <a href="#privacy" className="hover:text-[#6A0205]">
                Chính sách bảo mật
              </a>

              <a href="#terms" className="hover:text-[#6A0205]">
                Điều khoản dịch vụ
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
