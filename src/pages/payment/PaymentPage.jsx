import { useState } from "react";
import { Link } from "react-router";
import { ROUTES } from "@/constants";
import { getReservationDraft } from "@/features/reservation/reservationDraft";

function getPriceValue(price) {
  return Number(String(price).replace(/[^\d]/g, ""));
}

function formatPrice(value) {
  return `${value.toLocaleString("vi-VN")}đ`;
}

export default function PaymentPage() {
  const [draft] = useState(getReservationDraft);
  const [dialog, setDialog] = useState(null);
  const total = draft.menuItems.reduce(
    (sum, item) =>
      sum + getPriceValue(item.price) * (Number(item.quantity) || 1),
    0,
  );
  const canPay = Boolean(draft.space) && draft.menuItems.length > 0;

  return (
    <main className="min-h-screen bg-[#FFF8F4] px-4 py-10 sm:px-6 lg:py-14">
      <div className="mx-auto max-w-5xl">
        <header className="mb-9 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A7652]">
            Party Boys · Fine Dining & Grill
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-[#6A0205] sm:text-4xl">
            Thanh toán
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#756860]">
            Kiểm tra lại thông tin đặt bàn và tổng chi phí trước khi xác nhận.
          </p>
        </header>

        {!canPay ? (
          <section className="mx-auto max-w-xl rounded-2xl border border-[#EEE2D8] bg-white p-8 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-[#352722]">
              Chưa đủ thông tin đặt bàn
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#756860]">
              Vui lòng chọn một không gian và ít nhất một món ăn trước khi thanh
              toán.
            </p>
            <Link
              to={ROUTES.RESERVATION}
              className="mt-6 inline-flex rounded-xl bg-[#6A0205] px-5 py-3 text-sm font-semibold text-white hover:bg-[#8B1E19]"
            >
              Quay lại trang đặt bàn
            </Link>
          </section>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
            <section className="overflow-hidden rounded-2xl border border-[#EEE2D8] bg-white shadow-sm">
              <div className="border-b border-[#F0E8E1] px-5 py-5 sm:px-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7652]">
                  Thông tin đơn đặt bàn
                </p>
                <h2 className="mt-1 text-xl font-semibold text-[#352722]">
                  Tóm tắt lựa chọn
                </h2>
              </div>

              <div className="space-y-6 p-5 sm:p-7">
                <div className="flex items-center gap-4">
                  {draft.space.image && (
                    <img
                      src={draft.space.image}
                      alt={draft.space.name}
                      className="h-20 w-24 rounded-xl object-cover"
                    />
                  )}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#9A7652]">
                      Không gian
                    </p>
                    <h3 className="mt-1 font-serif text-xl text-[#6A0205]">
                      {draft.space.name}
                    </h3>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-semibold text-[#352722]">
                    Món đã chọn
                  </h3>
                  <ul className="divide-y divide-[#F0E8E1]">
                    {draft.menuItems.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center justify-between gap-4 py-3"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          {item.image && (
                            <img
                              src={item.image}
                              alt=""
                              className="h-12 w-12 shrink-0 rounded-lg object-cover"
                            />
                          )}
                          <span className="text-sm text-[#514740]">
                            {item.name} × {Number(item.quantity) || 1}
                          </span>
                        </div>
                        <span className="shrink-0 text-sm font-semibold text-[#514740]">
                          {formatPrice(
                            getPriceValue(item.price) *
                              (Number(item.quantity) || 1),
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={ROUTES.RESERVATION}
                  className="inline-flex text-sm font-semibold text-[#8B1E19] hover:underline"
                >
                  Chỉnh sửa lựa chọn
                </Link>
              </div>
            </section>

            <aside className="h-fit rounded-2xl bg-[#6A0205] p-6 text-white shadow-lg lg:sticky lg:top-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E6C280]">
                Chi tiết thanh toán
              </p>
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/20 pt-5">
                <span className="text-sm text-white/80">Tổng cộng</span>
                <span className="text-xl font-bold text-[#E6C280]">
                  {formatPrice(total)}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setDialog("confirm")}
                className="mt-6 w-full rounded-xl bg-[#E6C280] px-5 py-3 font-bold text-[#4B1713] transition hover:bg-[#F0D49C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Thanh toán
              </button>
            </aside>
          </div>
        )}
      </div>

      {dialog && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#211815]/60 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setDialog(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="payment-dialog-title"
            className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-2xl sm:p-8"
          >
            {dialog === "confirm" ? (
              <>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF3E7] text-2xl text-[#8B1E19]">
                  ?
                </div>
                <h2
                  id="payment-dialog-title"
                  className="mt-4 text-xl font-bold text-[#352722]"
                >
                  Xác nhận thanh toán?
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#756860]">
                  Bạn xác nhận thanh toán{" "}
                  <strong className="text-[#6A0205]">
                    {formatPrice(total)}
                  </strong>{" "}
                  cho đơn đặt bàn này?
                </p>
                <div className="mt-6 flex flex-col-reverse justify-center gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setDialog(null)}
                    className="rounded-xl border border-[#E6D6C9] px-5 py-3 text-sm font-semibold text-[#514740] hover:bg-[#FCF8F4]"
                  >
                    Quay lại
                  </button>
                  <button
                    type="button"
                    onClick={() => setDialog("success")}
                    className="rounded-xl bg-[#6A0205] px-5 py-3 text-sm font-semibold text-white hover:bg-[#8B1E19]"
                  >
                    Xác nhận
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-3xl font-bold text-green-700">
                  ✓
                </div>
                <h2
                  id="payment-dialog-title"
                  className="mt-4 text-xl font-bold text-[#352722]"
                >
                  Giao dịch thành công!
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#756860]">
                  Xác nhận thanh toán mô phỏng hoàn tất. Cảm ơn bạn đã lựa chọn
                  Party Boys.
                </p>
                <button
                  type="button"
                  onClick={() => setDialog(null)}
                  className="mt-6 w-full rounded-xl bg-[#6A0205] px-5 py-3 text-sm font-semibold text-white hover:bg-[#8B1E19]"
                >
                  Hoàn tất
                </button>
              </>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
