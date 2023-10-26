import React from "react";
import Header from "../Components/Header";
import NewsLetter from "../Components/NewsLetter";
import Service from "../Components/Service";
import Footer from "../Components/Footer";
import SingleProduct from "./SingleProduct";
import Recents  from "./Recents";
const SingleProductPage = () => {
  return (
    <div>
      <Header />
      <SingleProduct />
      <Recents />
      <NewsLetter />
      <Service />
      <Footer />
    </div>
  );
};

export default SingleProductPage;
