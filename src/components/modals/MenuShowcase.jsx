import React from "react";

const MenuShowcase = ({ selectedDish }) => {
  if (!selectedDish) return null;

  return (
    <section id="menu-showcase" className="w-full py-24 bg-[#FFF8F4]">
      <div className="w-full max-w-[1500px] mx-auto px-5 md:px-10">
        <div className="relative h-[460px] rounded-[20px] overflow-hidden">
          <img
            src={selectedDish.image}
            alt={selectedDish.name}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#33302C]/90 via-[#33302C]/60 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end p-10 text-white">
            <span className="text-xs uppercase tracking-widest text-[#E6C280] mb-3">
              Party Boys Signature
            </span>

            <h2 className="font-bold text-4xl mb-3">
              {selectedDish.name}
            </h2>

            <p className="text-[#E6C280] text-2xl font-semibold mb-4">
              {selectedDish.price}
            </p>

            <p className="max-w-lg text-sm leading-relaxed">
              {selectedDish.description}
            </p>

            <p className="mt-4 text-sm text-[#E6C280]">
              Đồ uống đi kèm: {selectedDish.wine}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuShowcase;