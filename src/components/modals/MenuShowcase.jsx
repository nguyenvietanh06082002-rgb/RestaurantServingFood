import React from "react";
import "./MenuShowcase.css";

export function MenuShowcase ({ selectedDish }) {
  if (!selectedDish) return null;

  return (
    <section id="menu-showcase" className="showcase-section w-full bg-[#FFF8F4]">
      <div className="showcase-container w-full max-w-[1500px] mx-auto">
        <div className="showcase-card">
          <img
            src={selectedDish.image}
            alt={selectedDish.name}
            className="showcase-image"
          />

          <div className="showcase-overlay" />

          <div className="showcase-content">
            <span className="text-xs uppercase tracking-widest text-[#E6C280] mb-3">
              Party Boys Signature
            </span>

            <h2 className="showcase-title font-bold mb-3">
              {selectedDish.name}
            </h2>

            <p className="showcase-price text-[#E6C280] font-semibold mb-4">
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
