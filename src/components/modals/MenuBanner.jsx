function MenuBanner({ category }) {
  return (
    <div className="relative w-full h-[460px] rounded-[20px] overflow-hidden">
      <img
        key={category.image}
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#33302C]/90 via-[#33302C]/60 to-transparent" />

      <div className="absolute inset-0 flex flex-col md:flex-row md:items-end justify-between gap-6 p-6 md:p-10 text-white">
        <div className="max-w-[420px] self-end">
          <h2 className="font-bold text-[36px]">{category.name}</h2>
          <p className="text-[14px] line-clamp-3">{category.description}</p>
        </div>

        <ul className="w-full md:w-[340px] bg-white/10 backdrop-blur-md rounded-xl p-5 flex flex-col gap-3 self-end">
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

export default MenuBanner;