"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";

type Category = {
  _id: string;
  title: string;
};

const CategorySelector = ({
  onSelectCategory,
}: {
  onSelectCategory: (category: string) => void;
}) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const query = `*[_type == "category"]{_id, title}`;
      const fetchedCategories = await client.fetch(query);
      setCategories(fetchedCategories);
    };
    fetchCategories();
  }, []);

  return (
    <div className="relative">
      <select
        className="w-full text-secondary-950 p-4 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-secondary-600 focus:border-transparent"
        onChange={(e) => onSelectCategory(e.target.value)}
        defaultValue="" // Set this to default empty string
      >
        <option value="">All Categories</option>{" "}
        {/* Enabled and set to show all */}
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.title}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
  );
};

export default CategorySelector;
