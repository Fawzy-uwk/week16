import { useMeals } from "../Context/MealContext";
import React from "react";

const CategoryTabs = () => {
  const { categories, selectedCategory, setSelectedCategory } = useMeals();

  return (
    <>
      {/* Mobile Dropdown */}
      <select
        className="lg:hidden w-full p-2 border rounded-md mb-6"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        {categories.map(cat => (
          <option key={cat.idCategory} value={cat.strCategory}>
            {cat.strCategory}
          </option>
        ))}
      </select>

      {/* Desktop Tabs */}
      <div className="hidden lg:flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-4 py-1 rounded-full cursor-pointer hover:shadow-xl ${selectedCategory === "All"
            ? "bg-black text-white"
            : "bg-white border"
            }`}
        >
          All
        </button>

        {categories.map(cat => (
          <button
            key={cat.idCategory}
            onClick={() => setSelectedCategory(cat.strCategory)}
            className={`px-4 py-1 rounded-full border text-sm cursor-pointer hover:shadow-xl  ${selectedCategory === cat.strCategory
              ? "bg-black text-white"
              : "bg-white"
              }`}
          >
            {cat.strCategory}
          </button>
        ))}
      </div>
    </>
  );
};

export default CategoryTabs;
