import React from "react";
import "./App.css";
import Footer from "./Components/Footer";

import SegmentExampleRaised from "./Components/AllPlans/AllPlans.js";
import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";

import CenteredGrid from "./Components/AllPlans/AllPlans";

// import ResponsiveDrawer from "./Components/Nav";

function App() {
  return (
    <div>
      <p>Apps</p>
      <header>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/">
                  <span role="img">🏠</span> Move On
                </NavLink>
              </li>
              <li>
                <NavLink to="/Components/AllPlans/AllPlans.js">
                  All Plans
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="container">
            <Switch>
              {/* <Route path="/components/test/SignIn" component={SignIn} /> */}
              <Route path="/Components/AllPlans" component={CenteredGrid} />
            </Switch>
          </div>
        </BrowserRouter>
      </header>

      <Footer />
    </div>
  );
}

export default App;
