import React from "react";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";

const Rating = star => {
  return (
    <>
      <div className="star_allPlans">
        <div>
          {star.rating >= 1 ? <StarBorderRoundedIcon /> : <StarRoundedIcon />}

          {star.rating >= 2 ? <StarBorderRoundedIcon /> : <StarRoundedIcon />}

          {star.rating >= 3 ? <StarBorderRoundedIcon /> : <StarRoundedIcon />}

          {star.rating >= 4 ? <StarBorderRoundedIcon /> : <StarRoundedIcon />}

          {star.rating >= 5 ? <StarBorderRoundedIcon /> : <StarRoundedIcon />}
        </div>
      </div>
    </>
  );
};

export default Rating;
