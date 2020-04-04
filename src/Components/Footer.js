import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./Navigation/Navigation.css";
//Navigation style
const useStyles = makeStyles({
  root: {
    width: 500,
    background: "#01091C"
  }
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{ backgroundColor: "#080a1d", alignItems: "center" }}
      position="fixed"
      className={classes.appBar}
    >
      <BottomNavigation
        style={{ marginTop: "50vh", marginLeft: "50vh" }}
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          style={{ color: "#fe466a" }}
          label="Recents"
          value="recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          style={{ color: "#fe466a" }}
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          style={{ color: "#fe466a" }}
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          style={{ color: "#fe466a" }}
          label="Folder"
          value="folder"
          icon={<FolderIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
