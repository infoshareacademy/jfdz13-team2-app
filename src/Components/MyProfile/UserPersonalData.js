import React from "react";
import MaterialTable from "material-table";

export default function UserPersonalData() {
  const [state, setState] = React.useState({
    columns: [
      { title: "No.", field: "number", type: "numeric" },
      { title: "Date", field: "date", type: "numeric" },
      { title: "Belly", field: "belly", type: "numeric" },
      { title: "Thigh", field: "thigh", type: "numeric" },
      {
        title: "Biceps",
        field: "biceps",
        type: "numeric"
      }
    ],
    data: [
      { belly: 100, thigh: 62, number: 1, biceps: 35, date: "31-03-2020" },
      {
        belly: 98,
        thigh: 61,
        number: 2,
        biceps: 34,
        date: "04-04-2020"
      }
    ]
  });

  return (
    <MaterialTable
      title="Body Measures"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
}
