import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Heading = ({ content }) => {
  return (
    <Typography variant="h4" component="h4" className="header__title">
      <Box fontWeight="fontWeightBold" m={1}>
        {content}
      </Box>
    </Typography>
  );
};

export default Heading;
