import React from "react";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";

const Rating = props => {
  console.log("props ", props);

  return (
    <>
      <div className="star_allPlans">
        <div>
          {props.rating >= 5 ? <StarBorderRoundedIcon /> : <StarRoundedIcon />}
          {props.rating >= 4 ? <StarBorderRoundedIcon /> : <StarRoundedIcon />}
          {props.rating >= 3 ? <StarBorderRoundedIcon /> : <StarRoundedIcon />}
          {props.rating >= 2 ? <StarBorderRoundedIcon /> : <StarRoundedIcon />}
          {props.rating >= 1 ? <StarBorderRoundedIcon /> : <StarRoundedIcon />}
        </div>
      </div>
    </>
  );
};

export default Rating;
