import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavContainer from "./Components/Navigation/NavContainer";
import AllPlans from "./Components/AllPlans/AllPlans";
import Calendar from "./Components/Calendar/Calendar";
import MyPlan from "./Components/MyPlan/MyPlan";
import MyProfile from "./Components/MyProfile/MyProfile";
import WhyMoveOn from "./Components/WhyMoveOn/WhyMoveOn";

// import ResponsiveDrawer from "./Components/Nav";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavContainer />
        <hr />
        <Switch>
          <Route exact path="/" component={WhyMoveOn} />
          <Route exact path="/all-plans" component={AllPlans} />
          <Route exact path="/my-plan" component={MyPlan} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/my-profile" component={MyProfile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
