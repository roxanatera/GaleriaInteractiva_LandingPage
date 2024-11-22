import React from "react";

const Newsletter: React.FC = () => {
  return (
    <div className="bg-green-100 py-10 px-6 md:px-16 lg:px-24 mx-auto w-full">
      <div className="max-w-6xl mx-auto rounded-lg shadow-lg bg-white py-10 px-6 md:px-10">
        <h2 className="text-center text-2xl font-bold mb-4">NEWSLETTER</h2>
        <p className="text-center text-sm md:text-base mb-6">
          Suscríbete a nuestra newsletter y no te pierdas las últimas novedades, acceso a promociones exclusivas y ¡Mucho más!
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="E-mail"
            className="w-full sm:w-auto px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 shadow-md"
          >
            SUSCRIBIR
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          <a href="#" className="underline hover:text-gray-800">
            Dar de baja
          </a>
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
