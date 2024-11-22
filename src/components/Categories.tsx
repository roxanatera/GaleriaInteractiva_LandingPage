import React, { useState, useEffect } from "react";
import { useUnsplash } from "../hooks/useUnsplash";

const Categories: React.FC = () => {
  const men = useUnsplash("men-clothes", 3);
  const women = useUnsplash("women-clothes", 3);
  const kids = useUnsplash("kids-clothes", 3);

  const [currentCategories, setCurrentCategories] = useState([
    { name: "Hombres", image: "" },
    { name: "Mujeres", image: "" },
    { name: "Niños", image: "" },
  ]);

  useEffect(() => {
    if (men.images.length > 0 && women.images.length > 0 && kids.images.length > 0) {
      setCurrentCategories([
        { name: "Hombres", image: men.images[0]?.urls?.small || "" },
        { name: "Mujeres", image: women.images[0]?.urls?.small || "" },
        { name: "Niños", image: kids.images[0]?.urls?.small || "" },
      ]);
    }
  }, [men.images, women.images, kids.images]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategories([
        { name: "Hombres", image: men.images[Math.floor(Math.random() * men.images.length)]?.urls?.small || "" },
        { name: "Mujeres", image: women.images[Math.floor(Math.random() * women.images.length)]?.urls?.small || "" },
        { name: "Niños", image: kids.images[Math.floor(Math.random() * kids.images.length)]?.urls?.small || "" },
      ]);
    }, 5000);
    return () => clearInterval(interval);
  }, [men.images, women.images, kids.images]);

  if (men.loading || women.loading || kids.loading) {
    return <div className="text-center py-10">Cargando categorías...</div>;
  }

  if (currentCategories.some((category) => !category.image)) {
    return <div className="text-center py-10">No se encontraron imágenes para las categorías.</div>;
  }

  return (
    <div className="py-16 bg-gray-100 sm:px-4 lg:px-16">
      <h2 className="text-3xl font-bold text-center mb-6">Explora por Categorías</h2>
      {/* Cambia a diseño vertical en pantallas pequeñas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
        {currentCategories.map((category, index) => (
          <div key={index} className="relative group">
            <img
              src={category.image}
              alt={category.name}
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition-opacity duration-300">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
