import React from "react";

import {
  Scheduler,
  DayView,
  Appointments
} from "@devexpress/dx-react-scheduler-material-ui";

const Schedule = () => (
  <Scheduler
    data={[
      {
        startDate: "2018-10-31 10:00",
        endDate: "2018-10-31 11:00",
        title: "Meeting"
      },
      {
        startDate: "2020-18-03 18:00",
        endDate: "2020-18-03 19:30",
        title: "Go to a gym"
      }
    ]}
  >
    <DayView />
    <Appointments />
  </Scheduler>
);

export default Schedule;
