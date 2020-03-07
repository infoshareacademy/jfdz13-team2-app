import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Footer from "./Components/Footer";
import SlimmerTraining from "./Components/SlimmerTraining";
import ButtonAppBar from "./Components/ButtonAppBar";

// import ResponsiveDrawer from "./Components/Nav";

function App() {
  return (
    <div>
      <CssBaseline />
      <ButtonAppBar />
      <SlimmerTraining />
      <Footer />
    </div>
  );
}

export default App;
