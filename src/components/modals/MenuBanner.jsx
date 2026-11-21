import "./MenuBanner.css";

export function MenuBanner({ category }) {
  return (
    <div className="menu-banner">
      <img
        key={category.image}
        src={category.image}
        alt={category.name}
        className="menu-banner__image"
      />
      <div className="menu-banner__overlay" />

      <div className="menu-banner__content">
        <div className="menu-banner__description">
          <h2 className="menu-banner__title font-bold">{category.name}</h2>
          <p className="text-[14px] line-clamp-3">{category.description}</p>
        </div>

        <ul className="menu-banner__dishes">
          {category.dishes.map((dish) => (
            <li
              key={dish.name}
              className="flex items-baseline justify-between gap-3 border-b border-white/20 pb-2 last:border-b-0 last:pb-0"
            >
              <span className="font-semibold text-sm">{dish.name}</span>
              <span className="text-[#E6C280] text-sm whitespace-nowrap">
                {dish.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
