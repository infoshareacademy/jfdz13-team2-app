import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllPlans from "./Components/AllPlans/AllPlans";
import Calendar from "./Components/Calendar/Calendar";
import MyPlan from "./Components/MyPlan/MyPlan";
import MyProfile from "./Components/MyProfile/MyProfile";
import WhyMoveOn from "./Components/WhyMoveOn/WhyMoveOn";
import Navigation from "./Components/Navigation/Nav";
import SlimmerPlan from "./Components/MyPlan/SlimmerPlan";
import HarderPlan from "./Components/MyPlan/HarderPlan";
import StrongerPlan from "./Components/MyPlan/StrongerPlan";
function App() {
  return (
    <div className="app__container">
      <BrowserRouter>
        <div>
          <Navigation>
            <Switch>
              <Route exact path="/" component={WhyMoveOn} />
              <Route exact path="/all-plans" component={AllPlans} />
              <Route exact path="/my-plan" component={MyPlan} />
              <Route exact path="/calendar" component={Calendar} />
              <Route exact path="/my-profile" component={MyProfile} />
              <Route exact path="/slimmer-plan" component={SlimmerPlan} />
              <Route exact path="/harder-plan" component={HarderPlan} />
              <Route exact path="/stronger-plan" component={StrongerPlan} />
            </Switch>
          </Navigation>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
