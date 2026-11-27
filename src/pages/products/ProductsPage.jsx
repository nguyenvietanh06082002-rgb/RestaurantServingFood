import { useState } from "react";
import { categories } from "../../hooks/data/foods";
import { addDishToDraft } from "@/features/reservation/reservationDraft";
import findIcon from "../../assets/images/find.png";
import gridIcon from "../../assets/images/grid.png";
import listIcon from "../../assets/images/list.png";
import "./ProductsPage.css";

function normalizeVietnamese(value) {
  return value
    .toLocaleLowerCase("vi")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .trim();
}

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const normalizedSearchTerm = normalizeVietnamese(searchTerm);

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      dishes: category.dishes.filter((dish) =>
        normalizeVietnamese(dish.name).includes(normalizedSearchTerm),
      ),
    }))
    .filter((category) => category.dishes.length > 0);

  return (
    <main className="products-page min-h-screen bg-[#FFF8F4]">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center">
          <p className="mb-2 text-sm uppercase tracking-widest text-[#7D562D]">
            Party Boys
          </p>
          <h1 className="products-title font-serif text-[#6A0205]">Thực đơn</h1>
          <p className="mx-auto mt-3 max-w-2xl text-[#58413E]">
            Khám phá các món ăn và đồ uống của nhà hàng.
          </p>
        </header>

        <div className="mb-8">
          <label
            htmlFor="dish-search"
            className="mb-2 block font-medium text-[#6A0205]"
          >
            Tìm món ăn
          </label>
          <div className="relative">
            <img
              src={findIcon}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 object-contain"
            />
            <input
              id="dish-search"
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Nhập tên món ăn..."
              className="w-full rounded-lg border border-[#E9E1DC] bg-white py-3 pl-12 pr-4 outline-none focus:border-[#6A0205]"
            />
          </div>
        </div>

        {searchTerm.trim() !== "" && filteredCategories.length === 0 && (
          <p className="mb-8 text-center text-[#58413E]">
            Không tìm thấy món ăn phù hợp.
          </p>
        )}

        <div
          className="mb-6 flex justify-end gap-2"
          role="group"
          aria-label="Chế độ hiển thị thực đơn"
        >
          <button
            type="button"
            aria-label="Dạng lưới"
            title="Dạng lưới"
            aria-pressed={viewMode === "grid"}
            onClick={() => setViewMode("grid")}
            className={
              viewMode === "grid"
                ? "flex h-10 w-10 items-center justify-center rounded-lg border border-[#6A0205] bg-[#F7E8E5]"
                : "flex h-10 w-10 items-center justify-center rounded-lg border border-[#E9E1DC] bg-white hover:bg-[#F7E8E5]"
            }
          >
            <img src={gridIcon} alt="" aria-hidden="true" className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Dạng danh sách"
            title="Dạng danh sách"
            aria-pressed={viewMode === "list"}
            onClick={() => setViewMode("list")}
            className={
              viewMode === "list"
                ? "flex h-10 w-10 items-center justify-center rounded-lg border border-[#6A0205] bg-[#F7E8E5]"
                : "flex h-10 w-10 items-center justify-center rounded-lg border border-[#E9E1DC] bg-white hover:bg-[#F7E8E5]"
            }
          >
            <img src={listIcon} alt="" aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        {filteredCategories.map((category) => (
          <section key={category.id} className="mb-12">
            <h2 className="mb-5 border-b border-[#E9E1DC] pb-3 font-serif text-2xl text-[#6A0205]">
              {category.name}
            </h2>

            <div
              className={`products-grid ${viewMode === "list" ? "products-list" : ""}`}
            >
              {category.dishes.map((dish) => (
                <article
                  key={dish.id}
                  className="overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-lg"
                >
                  {dish.image ? (
                    <div className="relative">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="h-56 w-full object-cover"
                      />
                      <button
                        type="button"
                        aria-label={`Thêm ${dish.name} vào đặt bàn`}
                        onClick={() => addDishToDraft(dish)}
                        className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#6A0205] text-2xl text-white shadow hover:bg-[#8B1E19]"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <div className="flex h-56 items-center justify-center bg-[#EEE7E1] text-sm text-[#7D562D]">
                      Ảnh sản phẩm sẽ được bổ sung
                    </div>
                  )}

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold text-[#1E1B18]">
                        {dish.name}
                      </h3>
                      <span className="whitespace-nowrap font-semibold text-[#7D562D]">
                        {dish.price}
                      </span>
                    </div>

                    <p className="mt-1 text-sm italic text-[#7D562D]">
                      {dish.englishName}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-[#58413E]">
                      {dish.description}
                    </p>

                    <p className="mt-4 border-t border-[#EEE7E1] pt-3 text-xs text-[#7D562D]">
                      Đồ uống đi kèm: {dish.wine}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
