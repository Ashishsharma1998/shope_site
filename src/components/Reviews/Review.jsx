import React from "react";
import UserCard from "../user/UserCard";
import { UserReviews } from "../../data.js";
import "./Review.css";

function Review() {
  return (
    <div className="reviewContainer">
      <h2>Read Customer Reviews</h2>
      <div className="slideReview">
        {UserReviews?.map((d, i) => {
          return <UserCard key={i} name={d?.name} imgUrl={d?.imgUrl} />;
        })}
      </div>
    </div>
  );
}

export default Review;
