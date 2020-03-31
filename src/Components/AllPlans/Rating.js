import React from "react";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";

const Rating = props => {
  console.log("props ", props);

  return (
    <>
      <div className="star_allPlans">
        <div>
          {props.rating >= 1 ? <StarRoundedIcon /> : <StarBorderRoundedIcon />}
          {props.rating >= 2 ? <StarRoundedIcon /> : <StarBorderRoundedIcon />}
          {props.rating >= 3 ? <StarRoundedIcon /> : <StarBorderRoundedIcon />}
          {props.rating >= 4 ? <StarRoundedIcon /> : <StarBorderRoundedIcon />}
          {props.rating >= 5 ? <StarRoundedIcon /> : <StarBorderRoundedIcon />}
        </div>
      </div>
    </>
  );
};

export default Rating;
