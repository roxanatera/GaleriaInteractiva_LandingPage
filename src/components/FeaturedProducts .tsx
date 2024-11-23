import React, { useState, useEffect } from "react";
import { useUnsplash } from "../hooks/useUnsplash";
import ProductCard from "./ProductCard";

const FeaturedProducts: React.FC = () => {
  const { images, loading } = useUnsplash("clothes", 6);
  const [currentImages, setCurrentImages] = useState(images.slice(0, 3));

  useEffect(() => {
    if (images.length > 0) {
      setCurrentImages(images.slice(0, 3));
    }
  }, [images]);

  useEffect(() => {
    if (currentImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImages(() =>
          images.sort(() => Math.random() - 0.5).slice(0, 3)
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [images, currentImages]);

  if (loading) {
    return <div className="text-center py-10">Cargando productos destacados...</div>;
  }

  if (currentImages.length === 0) {
    return <div className="text-center py-10">No se encontraron imágenes.</div>;
  }

  return (
    <div className="py-16 bg-gray-100 sm:px-4 lg:px-16">
      <h2 className="text-3xl font-bold text-center mb-6">Productos Destacados</h2>
      {/* Cambia a diseño vertical en pantallas pequeñas */}
      <div className="grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
        {currentImages.map((image, index) => (
          <ProductCard
            key={index}
            image={image.urls.small}
            title={image.alt_description || "Producto"}
            description="Ropa de calidad para tu estilo"
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
