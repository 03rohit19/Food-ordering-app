import React from "react";
import { CDN_URL } from "../Utils/Constants";
const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    lastMileTravelString,
  } = resData?.data;
  return (
    <div className="res-card">
      <img className="img-logo" alt="Logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo / 100} Rs FOR TWO</h4>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

export default RestaurantCard;
