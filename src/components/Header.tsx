import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-green-100 shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Icono y Logotipo */}
        <div className="flex items-center space-x-4">
          {/* Icono del menú */}
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Logotipo */}
          <div className="text-2xl font-bold text-gray-800">
            <a href="/">myShop</a>
          </div>
        </div>

        {/* Botones de categorías */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800">Mujer</button>
          <button className="px-4 py-2 rounded-full border border-black text-black hover:bg-gray-200">Hombre</button>
          <button className="px-4 py-2 rounded-full border border-black text-black hover:bg-gray-200">Niños</button>
        </div>

        {/* Íconos de navegación */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-600 hover:text-gray-800">
            {/* Icono de búsqueda */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5a7 7 0 100 14 7 7 0 000-14zm10 10l-4-4"
              />
            </svg>
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            {/* Icono de usuario */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A6.962 6.962 0 0112 15a6.962 6.962 0 016.879 2.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            {/* Icono del carrito */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.334 5A1 1 0 007 19h10a1 1 0 001-1l-1.334-5M7 13h10m-3 5a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
