import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Footer from "./Components/Footer";
import TrainingList from "./Components/TrainingList";
import ButtonAppBar from "./Components/ButtonAppBar";
// import ResponsiveDrawer from "./Components/Nav";

function App() {
  return (
    <div style={{ backgroundColor: "#030b2f" }}>
      <CssBaseline />
      <ButtonAppBar />
      <TrainingList />

      <Footer />
    </div>
  );
}

export default App;
