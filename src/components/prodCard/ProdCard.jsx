import React from "react";
import { FaStar } from "react-icons/fa";
import "./ProdCard.css";

const rating = 5;

function ProdCard(props) {
  return (
    <div className="cardContainer">
      <img src={props?.imgUrl} alt="" />
      <div className="details">
        <span className="title">{props?.title}</span>
        <div className="ratings">
          <div className="star">
            <FaStar className="icon" />
            <FaStar className="icon" />
            <FaStar className="icon" />
          </div>
          <span>(398 Reviews)</span>
        </div>
        <span className="desc1">{props?.desc1}</span>
        <p className="desc2">{props?.desc2}</p>
        <div className="amount">
          <h5>{props?.amount}</h5>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}

export default ProdCard;
