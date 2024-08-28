import React from "react";
import { FaStar } from "react-icons/fa";
import "./UserCard.css";

function UserCard(props) {
  return (
    <div className="userContainer">
      <img src={props.imgUrl} alt="" className="user" />
      <div className="userDetails">
        <div className="stars">
          <FaStar className="icon" />
          <FaStar className="icon" />
          <FaStar className="icon" />
          <FaStar className="icon" />
        </div>
        <div className="review">
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
          <span>{props.name}</span>
        </div>
        <button>Shop Gut health vitals</button>
      </div>
    </div>
  );
}

export default UserCard;
