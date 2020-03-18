import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavContainer from "./Components/Navigation/NavContainer";
import AllPlans from "./Components/AllPlans/AllPlans";
import MyPlan from "./Components/MyPlan/SlimmerTraining";
import MyProfile from "./Components/MyProfile/MyProfile";
import WhyMoveOn from "./Components/WhyMoveOn/WhyMoveOn";
import Schedule from "./Components/Calendar/Calendar";

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
          <Route exact path="/calendar" component={Schedule} />
          <Route exact path="/my-profile" component={MyProfile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
