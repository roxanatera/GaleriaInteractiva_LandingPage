import React, { useState, useEffect } from 'react';
import { useUnsplash } from '../hooks/useUnsplash';

const Hero: React.FC = () => {
  const { images, loading } = useUnsplash('fashion', 5, 'landscape'); // Solicita imágenes horizontales
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, [images]);

  if (loading) {
    return <div className="h-screen flex items-center justify-center">Cargando...</div>;
  }

  return (
    <div className="relative h-[80vh] w-full bg-gray-100 overflow-hidden mt-[64px] md:mt-[80px]">
      {/* Carrusel de imágenes */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0'
            }`}
          >
            <img
              src={image.urls.regular}
              alt={image.alt_description || 'Fashion'}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Controles del carrusel */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir a la imagen ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
