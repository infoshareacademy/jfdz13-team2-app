import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllPlans from "./Components/AllPlans/AllPlans";
import Calendar from "./Components/Calendar/Calendar";
import HarderPlan from "./Components/MyPlan/HarderPlan";
import MyProfile from "./Components/MyProfile/MyProfile";
import WhyMoveOn from "./Components/WhyMoveOn/WhyMoveOn";
import Navigation from "./Components/Navigation/Nav";

function App() {
  return (
    <div className="app__container">
      <BrowserRouter>
        <div>
          <Navigation>
            <Switch>
              <Route exact path="/" component={WhyMoveOn} />
              <Route exact path="/all-plans" component={AllPlans} />
              <Route exact path="/my-plan" component={HarderPlan} />
              <Route exact path="/calendar" component={Calendar} />
              <Route exact path="/my-profile" component={MyProfile} />
            </Switch>
          </Navigation>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
