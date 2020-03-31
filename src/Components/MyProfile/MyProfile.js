import React from "react";

import UsersData from "../../Data/UsersData";
import MyProfileCard from "./MyProfileCard";

const user = UsersData[0];

const myProfile = () => {
  return (
    <div>
      <MyProfileCard user={user} />
    </div>
  );
};

export default myProfile;
