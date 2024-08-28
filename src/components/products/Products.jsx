import React from "react";
import ProdCard from "../prodCard/ProdCard.jsx";
// import Slider from "react-slick";
import "./Products.css";
import { prodCards } from "../../data.js";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function Products() {
  return (
    <div className="mainContainer">
      <h2>Shop Best Sellers</h2>
      <div className="slideContainer">
        {prodCards?.map((d, i) => {
          return (
            <ProdCard
              key={i}
              title={d?.title}
              amount={d?.amount}
              desc1={d?.desc1}
              desc2={d?.desc2}
              imgUrl={d?.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
}
