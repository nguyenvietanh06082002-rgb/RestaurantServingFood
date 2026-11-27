import { useState } from "react";
import {
  changeDishQuantity,
  getReservationDraft,
  removeDishFromDraft,
  removeSpaceFromDraft,
} from "@/features/reservation/reservationDraft";
import { Link } from "react-router";
import { ROUTES } from "@/constants";
import "./ReservationPage.css";

function getPriceValue(price) {
  return Number(String(price).replace(/[^\d]/g, ""));
}

function formatPrice(value) {
  return `${value.toLocaleString("vi-VN")}đ`;
}

export default function ReservationPage() {
  const [draft, setDraft] = useState(getReservationDraft);

  const handleQuantityChange = (dishId, difference) => {
    setDraft(changeDishQuantity(dishId, difference));
  };

  const handleRemoveDish = (dishId) => {
    setDraft(removeDishFromDraft(dishId));
  };

  const handleRemoveSpace = () => {
    setDraft(removeSpaceFromDraft());
  };

  return (
    <main className="reservation-page min-h-screen bg-[#FFF8F4] px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-9 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A7652]">
            Party Boys · Fine Dining & Grill
          </p>
          <h1 className="reservation-title mt-3 font-serif text-3xl font-bold text-[#6A0205]">
            Lựa chọn đặt bàn
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#756860]">
            Xem lại không gian và món ăn bạn đã chọn trước khi tiếp tục.
          </p>
        </header>

        <div className="reservation-steps mb-8 grid grid-cols-3 gap-2 rounded-2xl border border-[#EEE2D8] bg-white p-4 text-center text-xs">
          <div className="font-semibold text-[#6A0205]">1. Chọn không gian</div>
          <div className="font-semibold text-[#6A0205]">2. Chọn món ăn</div>
          <div className="font-semibold text-[#9A7652]">3. Xem lại</div>
        </div>

        <div className="reservation-content-layout grid gap-6">
          <div className="space-y-6">
            <section className="overflow-hidden rounded-2xl border border-[#EEE2D8] bg-white shadow-sm">
              <div className="reservation-space-header flex items-center justify-between border-b border-[#F0E8E1] px-5 py-4">
                <h2 className="text-lg font-semibold text-[#352722]">
                  Không gian đã chọn
                </h2>
                <div className="flex items-center gap-2">
                  <Link
                    to={ROUTES.SPACES}
                    className="text-sm font-semibold text-[#8B1E19] hover:underline"
                  >
                    Đổi không gian
                  </Link>

                  {draft.space && (
                    <button
                      type="button"
                      aria-label={`Bỏ chọn không gian ${draft.space.name}`}
                      onClick={handleRemoveSpace}
                      className="flex h-8 w-8 items-center justify-center rounded-full text-lg text-[#81756D] hover:bg-red-50 hover:text-red-700"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {draft.space ? (
                <div className="reservation-space-details flex flex-col">
                  <img
                    src={draft.space.image}
                    alt={draft.space.name}
                    className="reservation-space-image h-52 w-full object-cover"
                  />
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#9A7652]">
                      Không gian của bạn
                    </p>
                    <h3 className="mt-2 font-serif text-2xl text-[#6A0205]">
                      {draft.space.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#756860]">
                      {draft.space.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-6 text-sm text-[#756860]">
                  Bạn chưa chọn không gian.{" "}
                  <Link
                    to={ROUTES.SPACES}
                    className="font-semibold text-[#8B1E19] hover:underline"
                  >
                    Chọn không gian
                  </Link>
                </div>
              )}
            </section>

            <section className="reservation-menu-section rounded-2xl border border-[#EEE2D8] bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold text-[#352722]">
                  Món ăn đã chọn
                </h2>
                <Link
                  to={ROUTES.PRODUCTS}
                  className="text-sm font-semibold text-[#8B1E19] hover:underline"
                >
                  Thêm món
                </Link>
              </div>

              {draft.menuItems.length > 0 ? (
                <ul className="divide-y divide-[#F0E8E1]">
                  {draft.menuItems.map((item) => (
                    <li
                      key={item.id}
                      className="reservation-item flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                    >
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-16 w-16 rounded-xl object-cover"
                        />
                      ) : (
                        <div className="h-16 w-16 rounded-xl bg-[#F3EAE2]" />
                      )}
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate font-semibold text-[#352722]">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm text-[#81756D]">
                          Số lượng: {item.quantity}
                        </p>
                      </div>
                      <div className="reservation-quantity-controls mt-2 flex items-center gap-2">
                        <button
                          type="button"
                          aria-label={`Tăng số lượng ${item.name}`}
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E6D6C9] text-lg text-[#6A0205] hover:bg-[#FFF3E7]"
                        >
                          +
                        </button>

                        <span className="min-w-6 text-center text-sm font-semibold text-[#352722]">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          aria-label={`Giảm số lượng ${item.name}`}
                          disabled={item.quantity <= 1}
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E6D6C9] text-lg text-[#6A0205] hover:bg-[#FFF3E7] disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          −
                        </button>

                        <span className="whitespace-nowrap text-sm font-semibold text-[#8B1E19]">
                          {formatPrice(
                            getPriceValue(item.price) * item.quantity,
                          )}
                        </span>

                        <button
                          type="button"
                          aria-label={`Xóa ${item.name} khỏi danh sách`}
                          onClick={() => handleRemoveDish(item.id)}
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg text-[#81756D] hover:bg-red-50 hover:text-red-700"
                        >
                          ×
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="rounded-xl bg-[#FCF8F4] p-5 text-sm text-[#756860]">
                  Bạn chưa chọn món ăn.{" "}
                  <Link
                    to={ROUTES.PRODUCTS}
                    className="font-semibold text-[#8B1E19] hover:underline"
                  >
                    Xem thực đơn
                  </Link>
                </p>
              )}
            </section>
          </div>

          <aside className="reservation-summary h-fit rounded-2xl bg-[#6A0205] p-6 text-white shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E6C280]">
              Tóm tắt lựa chọn
            </p>
            <h2 className="mt-2 font-serif text-2xl">Đặt bàn của bạn</h2>

            <div className="mt-6 space-y-4 border-t border-white/20 pt-5 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-white/75">Không gian</span>
                <span className="text-right font-medium">
                  {draft.space?.name || "Chưa chọn"}
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-white/75">Số loại món</span>
                <span className="font-medium">{draft.menuItems.length}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-white/75">Tổng số món</span>
                <span className="font-medium">
                  {draft.menuItems.reduce(
                    (total, item) => total + (item.quantity || 1),
                    0,
                  )}
                </span>
                <div className="flex justify-between gap-4 border-t border-white/20 pt-4 text-base">
                  <span className="font-semibold">Tạm tính</span>
                  <span className="font-bold text-[#E6C280]">
                    {formatPrice(
                      draft.menuItems.reduce(
                        (total, item) =>
                          total +
                          getPriceValue(item.price) * (item.quantity || 1),
                        0,
                      ),
                    )}
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-6 rounded-xl bg-white/10 p-4 text-xs leading-5 text-white/80">
              Bạn có thể quay lại thực đơn hoặc danh sách không gian để thay đổi
              lựa chọn.
            </p>
            {draft.space && draft.menuItems.length > 0 ? (
              <Link
                to={ROUTES.PAYMENT}
                className="mt-5 flex w-full items-center justify-center rounded-xl bg-[#E6C280] px-5 py-3 text-sm font-bold text-[#4B1713] transition hover:bg-[#F0D49C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Tiến hành thanh toán
              </Link>
            ) : (
              <p className="mt-5 text-xs leading-5 text-white/75">
                Hãy chọn một không gian và ít nhất một món ăn để tiếp tục.
              </p>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
