import { categories } from "../../hooks/data/foods";
import "./ProductsPage.css";

export default function ProductsPage() {
  return (
    <main className="products-page min-h-screen bg-[#FFF8F4]">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center">
          <p className="mb-2 text-sm uppercase tracking-widest text-[#7D562D]">
            Party Boys
          </p>
          <h1 className="products-title font-serif text-[#6A0205]">
            Thực đơn
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-[#58413E]">
            Khám phá các món ăn và đồ uống của nhà hàng.
          </p>
        </header>

        {categories.map((category) => (
          <section key={category.id} className="mb-12">
            <h2 className="mb-5 border-b border-[#E9E1DC] pb-3 font-serif text-2xl text-[#6A0205]">
              {category.name}
            </h2>

            <div className="products-grid">
              {category.dishes.map((dish) => (
                <article
                  key={dish.id}
                  className="overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-lg"
                >
                  {dish.image ? (
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="h-56 w-full object-cover"
                    />
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