import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts ";
import Categories from "./components/Categories";
import InfoBanner from "./components/InfoBanner"; 
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";


const App: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-col w-full">
      <Header />
      <main className="flex flex-col sm:flex-col">
        <Hero />
        <FeaturedProducts />
        <InfoBanner /> 
        <Categories />
      </main>
      <Newsletter /> 
      <Footer />
    </div>
  );
};

export default App;
