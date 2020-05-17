import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import "./WhyMoveOn.css";
import Heading from "./../Heading";

const WhyMoveOn = () => {
  let mostPopularActivities = {
    datasets: [
      {
        data: [18, 3, 10, 5, 9],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(8, 10, 21, 0.6)",
          "rgba(63, 81, 181, 0.6)",
          "rgba(111, 132, 133, 0.6)"
        ]
      }
    ],

    labels: ["Running", "Cycling", "Sprint", "Jump rope"],
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0
            }
          }
        ]
      },

      legend: {
        display: false
      },

      title: {
        display: true,
        text: "Most popular activities"
      }
    }
  };

  let usersGender = {
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ["rgba(8, 10, 21, 0.6)", "rgba(254, 70, 106, 0.6)"]
      }
    ],

    labels: ["Women", "Men"],
    options: {
      fontSize: 20,
      title: {
        display: true,
        text: "Our users gender"
      }
    }
  };

  let mostPopularPlans = {
    datasets: [
      {
        label: false,
        data: [50, 30, 20],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(8, 10, 21, 0.6)",
          "rgba(63, 81, 181, 0.6)"
        ]
      }
    ],

    labels: ["Slimmer", "Harder", "Stronger"],
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0
            }
          }
        ]
      },

      legend: {
        display: false
      },

      title: {
        display: true,
        text: "Our most popular plans (in %)"
      }
    }
  };

  return (
    <div>
      <Heading content="WHY MOVE ON" />

      <div className={"doughnutChart"}>
        <Doughnut data={usersGender} options={usersGender.options} />
      </div>

      <div className={"charts"}>
        <div className={"barChart"}>
          <Bar data={mostPopularPlans} options={mostPopularPlans.options} />
        </div>

        <div className={"barChart"}>
          <Bar
            data={mostPopularActivities}
            options={mostPopularActivities.options}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyMoveOn;
