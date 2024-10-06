import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import HeroSection from "../components/HeroSection/HeroSection";
import Benefits from "../components/Benefits/Benefits";
import axios from "axios";
import { SAMPLE_PRODUCTS } from "../utils/sampleProducts";
import ProductDetailModal from "./productDetail";

const LandingPage = () => {

  const [detailModalInfo, setDetailModalInfo] = useState(null)
  const [productsData, setProductsData] = useState(SAMPLE_PRODUCTS);

  const handleOpenDetail = (data) => {
    const targetObj = {
      ...data,
      isModalOpen: true,
    }
    setDetailModalInfo(targetObj)
  }


  return (
    <div className="">
      <HeroSection />
      <Benefits />
      <div className="container">
        <h4 className="product__main_heading">Featured Products</h4>
        <div className="products__grid">
          {!!productsData &&
            productsData.length > 0 &&
            productsData?.slice(0, 20)?.map((item, index) => {
              return <ProductCard data={item} key={item?.id} handleOpenDetail={handleOpenDetail} />;
            })}
        </div>
      </div>

      <ProductDetailModal show={detailModalInfo?.isModalOpen}
        handleClose={() => setDetailModalInfo(null)}
        data={detailModalInfo}
      />
    </div>
  );
};

export default LandingPage;
