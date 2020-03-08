import React from "react";
import Navigation from "./Nav";
import styles from "./NavContainer.module.css";

const NavContainer = () => {
  return (
    <div className={styles.navigationContainer}>
      <Navigation />
    </div>
  );
};

export default NavContainer;
