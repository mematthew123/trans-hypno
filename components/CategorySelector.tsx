'use client';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';

type Category = {
    _id: string;
    title: string;
    };

const CategorySelector = ({ onSelectCategory }: { onSelectCategory: (category: string) => void }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const query = `*[_type == "category"]{_id, title}`;
      const categories = await client.fetch(query);
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <select onChange={(e) => onSelectCategory(e.target.value)} defaultValue="">
        <option className='w-64 p-4 rounded-lg' value="">Select a category</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
