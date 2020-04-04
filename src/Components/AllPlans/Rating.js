import React from "react";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";

const Rating = props => {
  console.log("props ", props);

  return (
    <>
      <div className="star_allPlans">
        <div>
          {props.rating >= 1 ? (
            <StarRoundedIcon style={{ color: "#080a1d" }} />
          ) : (
            <StarBorderRoundedIcon style={{ color: "#080a1d" }} />
          )}
          {props.rating >= 2 ? (
            <StarRoundedIcon style={{ color: "#080a1d" }} />
          ) : (
            <StarBorderRoundedIcon style={{ color: "#080a1d" }} />
          )}
          {props.rating >= 3 ? (
            <StarRoundedIcon style={{ color: "#080a1d" }} />
          ) : (
            <StarBorderRoundedIcon style={{ color: "#080a1d" }} />
          )}
          {props.rating >= 4 ? (
            <StarRoundedIcon style={{ color: "#080a1d" }} />
          ) : (
            <StarBorderRoundedIcon style={{ color: "#080a1d" }} />
          )}
          {props.rating >= 5 ? (
            <StarRoundedIcon style={{ color: "#080a1d" }} />
          ) : (
            <StarBorderRoundedIcon style={{ color: "#080a1d" }} />
          )}
        </div>
      </div>
    </>
  );
};

export default Rating;
