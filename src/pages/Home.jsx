import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ProductBanner from "../components/ProductBanner";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <ProductBanner />
      <Header />
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;