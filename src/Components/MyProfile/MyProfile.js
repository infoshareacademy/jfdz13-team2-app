import React from "react";

import MyProfileCard from "./MyProfileCard";
import Heading from "../Heading";

// const user = UsersData[0];

class myProfile extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch("https://jfdz13-team2-app.firebaseio.com/UsersData.json")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Heading content="MY PROFILE" />
        {data
          .filter(user => {
            return user.id === 1;
          })
          .map(user => {
            return <MyProfileCard key={user.id} user={user} />;
          })}
      </div>
    );
  }
}

export default myProfile;
