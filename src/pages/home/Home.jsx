import React from "react";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/propertyList";

import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">İstirahət yerləri</h1>
        <PropertyList />
        <h1 className="homeTitle">Ən çox sevilən məkanlar</h1>
        <FeaturedProperties />
       <MailList/>
       <Footer/>
      </div>
    </div>
  );
};

export default Home;
