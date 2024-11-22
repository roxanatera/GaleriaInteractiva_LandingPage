const Footer: React.FC = () => {
  const paymentLogos = [
    { src: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png', alt: 'Visa' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png', alt: 'MasterCard' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg', alt: 'PayPal' },
    
  ];

  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Métodos de pago */}
          <div className="text-center md:text-left">
            <h3 className="font-bold mb-4">Métodos de pago</h3>
            <div className="flex flex-wrap justify-center md:justify-start space-x-4">
              {paymentLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="w-12 h-12 object-contain"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Parte inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <ul className="flex space-x-4 mb-4 md:mb-0">
            <li>
              <a href="#" className="hover:underline">
                Condiciones de compra
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Política de privacidad
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Política de cookies
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Declaración de conformidad UE
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <span>ESPAÑA | Español</span>
            <a href="#" className="hover:underline">
              <i className="fab fa-android"></i> App Android
            </a>
            <a href="#" className="hover:underline">
              <i className="fab fa-apple"></i> App iOS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
