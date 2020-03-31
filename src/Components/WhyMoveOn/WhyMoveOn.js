import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";

const WhyMoveOn = () => {
  let data = {
    datasets: [
      {
        data: [10, 20, 30, 50],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(255, 159, 64, 0.8)"
        ]
      }
    ],

    labels: ["Red", "Yellow", "Blue", "Green"]
  };
  return (
    <div>
      <Doughnut data={data} />
      <Bar data={data} />
      <Bar data={data} />
    </div>
  );
};

export default WhyMoveOn;
