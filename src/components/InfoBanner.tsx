import React from "react";

const InfoBanner: React.FC = () => {
  return (
    <div className="bg-yellow-300 text-black py-4 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div className="relative">
        <div className="animate-marquee whitespace-nowrap">
          <p className="inline-block text-sm md:text-base font-semibold">
            ¡Adelanta tus compras de Navidad! Ampliamos los plazos de devolución para compras realizadas entre el 15/11/2024 y el 10/12/2024. Cambios o devoluciones hasta el 10/01/2025.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
