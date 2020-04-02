import React from "react";

import UsersData from "../../Data/UsersData";
import MyProfileCard from "./MyProfileCard";
import Heading from "../Heading";

const user = UsersData[0];

const myProfile = () => {
  return (
    <div>
      <Heading content="MY PROFILE" />
      <MyProfileCard user={user} />
    </div>
  );
};

export default myProfile;
