import React from "react";

import MyProfileCard from "./MyProfileCard";
import Heading from "../Heading";
import UserProvider from "./../Aplication/UserProvider";

// const user = UsersData[0];

class myProfile extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch("https://jfdz13-team2-app.firebaseio.com/UsersData.json/")
      .then(resp => resp.json())
      .then(objectUsers => {
        const keys = Object.keys(objectUsers);
        const arrayUsers = keys.map(key => {
          return {
            id: key,
            ...objectUsers[key]
          };
        });

        this.setState({
          data: arrayUsers
        });
      });
  };

  render() {
    const { data } = this.state;
    return (
      <UserProvider>
        {user => {
          return user ? (
            <div>
              <Heading content="MY PROFILE" />
              {data
                .filter(user => {
                  return user.email === "testowy@testowy.pl";
                })
                .map(user => {
                  return <MyProfileCard user={user} />;
                })}
            </div>
          ) : (
            <h2>Sign In to see your Profile</h2>
          );
        }}
      </UserProvider>
    );
  }
}

export default myProfile;
