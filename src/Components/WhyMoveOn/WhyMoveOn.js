import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import "./WhyMoveOn.css";

const WhyMoveOn = () => {
  let data = {
    datasets: [
      {
        data: [18, 3, 10, 5, 9],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(255, 159, 64, 0.8)"
        ]
      }
    ],

    labels: ["Red", "Yellow", "Blue", "Green", "Brown"],
    options: {
      title: {
        display: true,
        text: "Custom Chart Title"
      }
    }
  };

  let usersNumber = {
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(255, 159, 64, 0.8)"]
      }
    ],

    labels: ["Kobiety", "Mężczyźni"],
    options: {
      title: {
        display: true,
        text: "Custom Chart Title"
      }
    }
  };
  return (
    <div>
      <div className={"doughnutChart"}>
        <Doughnut data={usersNumber} />
      </div>

      <div className={"charts"}>
        <div className={"barChart"}>
          <Bar data={data} />
        </div>

        <div className={"barChart"}>
          <Bar data={data} />
        </div>
      </div>
    </div>
  );
};

export default WhyMoveOn;
