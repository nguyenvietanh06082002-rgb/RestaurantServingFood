import { useState } from "react";
import { getReservationDraft } from "@/features/reservation/reservationDraft";

export default function ReservationPage() {
  const [draft] = useState(getReservationDraft);

  return (
    <main className="min-h-screen bg-[#FFF8F4] px-5 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-semibold text-[#6A0205]">
          Đặt bàn
        </h1>

        <h2 className="mb-3 text-xl font-semibold">Không gian đã chọn</h2>
        <p className="mb-8">
          {draft.space ? draft.space.name : "Bạn chưa chọn không gian."}
        </p>

        <h2 className="mb-3 text-xl font-semibold">Món ăn đã chọn</h2>
        {draft.menuItems.length > 0 ? (
          <ul className="space-y-3">
            {draft.menuItems.map((item) => (
              <li key={item.id}>
                {item.name} × {item.quantity}
              </li>
            ))}
          </ul>
        ) : (
          <p>Bạn chưa chọn món ăn.</p>
        )}
      </div>
    </main>
  );
}