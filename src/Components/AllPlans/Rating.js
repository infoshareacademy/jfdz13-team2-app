import React from "react";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import Tooltip from "@material-ui/core/Tooltip";

const Rating = props => {
  return (
    <>
      <div className="star_allPlans">
        <Tooltip title="LEVEL">
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
        </Tooltip>
      </div>
    </>
  );
};

export default Rating;
