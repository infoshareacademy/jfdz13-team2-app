/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-unused-state */
import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Toolbar,
  MonthView,
  WeekView,
  ViewSwitcher,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  DragDropProvider,
  EditRecurrenceMenu,
  AllDayPanel
} from "@devexpress/dx-react-scheduler-material-ui";
import { connectProps } from "@devexpress/dx-react-core";
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import LocationOn from "@material-ui/icons/LocationOn";
import Notes from "@material-ui/icons/Notes";
import Close from "@material-ui/icons/Close";
import CalendarToday from "@material-ui/icons/CalendarToday";
import Create from "@material-ui/icons/Create";

export const appointments = [
  {
    title: "Website Re-Design Plan",
    startDate: new Date(2018, 5, 25, 9, 35),
    endDate: new Date(2018, 5, 25, 11, 30),
    id: 0,
    location: "Room 1"
  },
  {
    title: "Book Flights to San Fran for Sales Trip",
    startDate: new Date(2018, 5, 25, 12, 11),
    endDate: new Date(2018, 5, 25, 13, 0),
    id: 1,
    location: "Room 1"
  },
  {
    title: "Install New Router in Dev Room",
    startDate: new Date(2018, 5, 25, 14, 30),
    endDate: new Date(2018, 5, 25, 15, 35),
    id: 2,
    location: "Room 2"
  },
  {
    title: "Approve Personal Computer Upgrade Plan",
    startDate: new Date(2018, 5, 26, 10, 0),
    endDate: new Date(2018, 5, 26, 11, 0),
    id: 3,
    location: "Room 2"
  },
  {
    title: "Final Budget Review",
    startDate: new Date(2018, 5, 26, 12, 0),
    endDate: new Date(2018, 5, 26, 13, 35),
    id: 4,
    location: "Room 2"
  },
  {
    title: "New Brochures",
    startDate: new Date(2018, 5, 26, 14, 30),
    endDate: new Date(2018, 5, 26, 15, 45),
    id: 5,
    location: "Room 2"
  },
  {
    title: "Install New Database",
    startDate: new Date(2018, 5, 27, 9, 45),
    endDate: new Date(2018, 5, 27, 11, 15),
    id: 6,
    location: "Room 1"
  },
  {
    title: "Approve New Online Marketing Strategy",
    startDate: new Date(2018, 5, 27, 12, 0),
    endDate: new Date(2018, 5, 27, 14, 0),
    id: 7,
    location: "Room 3"
  },
  {
    title: "Upgrade Personal Computers",
    startDate: new Date(2018, 5, 27, 15, 15),
    endDate: new Date(2018, 5, 27, 16, 30),
    id: 8,
    location: "Room 3"
  },
  {
    title: "Customer Workshop",
    startDate: new Date(2018, 5, 28, 11, 0),
    endDate: new Date(2018, 5, 28, 12, 0),
    id: 9,
    location: "Room 3"
  },
  {
    title: "Prepare 2015 Marketing Plan",
    startDate: new Date(2018, 5, 28, 11, 0),
    endDate: new Date(2018, 5, 28, 13, 30),
    id: 10,
    location: "Room 1"
  },
  {
    title: "Brochure Design Review",
    startDate: new Date(2018, 5, 28, 14, 0),
    endDate: new Date(2018, 5, 28, 15, 30),
    id: 11,
    location: "Room 2"
  },
  {
    title: "Create Icons for Website",
    startDate: new Date(2018, 5, 29, 10, 0),
    endDate: new Date(2018, 5, 29, 11, 30),
    id: 12,
    location: "Room 2"
  },
  {
    title: "Upgrade Server Hardware",
    startDate: new Date(2018, 5, 29, 14, 30),
    endDate: new Date(2018, 5, 29, 16, 0),
    id: 13,
    location: "Room 3"
  },
  {
    title: "Submit New Website Design",
    startDate: new Date(2018, 5, 29, 16, 30),
    endDate: new Date(2018, 5, 29, 18, 0),
    id: 14,
    location: "Room 3"
  },
  {
    title: "Launch New Website",
    startDate: new Date(2018, 5, 29, 12, 20),
    endDate: new Date(2018, 5, 29, 14, 0),
    id: 15,
    location: "Room 2"
  },
  {
    title: "Website Re-Design Plan",
    startDate: new Date(2018, 6, 2, 9, 30),
    endDate: new Date(2018, 6, 2, 15, 30),
    id: 16,
    location: "Room 1"
  },
  {
    title: "Book Flights to San Fran for Sales Trip",
    startDate: new Date(2018, 6, 2, 12, 0),
    endDate: new Date(2018, 6, 2, 13, 0),
    id: 17,
    location: "Room 3"
  },
  {
    title: "Install New Router in Dev Room",
    startDate: new Date(2018, 6, 2, 14, 30),
    endDate: new Date(2018, 6, 2, 17, 30),
    id: 18,
    location: "Room 2"
  },
  {
    title: "Approve Personal Computer Upgrade Plan",
    startDate: new Date(2018, 6, 2, 16, 0),
    endDate: new Date(2018, 6, 3, 9, 0),
    id: 19,
    location: "Room 2"
  },
  {
    title: "Final Budget Review",
    startDate: new Date(2018, 6, 3, 10, 15),
    endDate: new Date(2018, 6, 3, 13, 35),
    id: 20,
    location: "Room 1"
  },
  {
    title: "New Brochures",
    startDate: new Date(2018, 6, 3, 14, 30),
    endDate: new Date(2018, 6, 3, 15, 45),
    id: 21,
    location: "Room 3"
  },
  {
    title: "Install New Database",
    startDate: new Date(2018, 6, 3, 15, 45),
    endDate: new Date(2018, 6, 4, 12, 15),
    id: 22,
    location: "Room 3"
  },
  {
    title: "Approve New Online Marketing Strategy",
    startDate: new Date(2018, 6, 4, 12, 35),
    endDate: new Date(2018, 6, 4, 14, 15),
    id: 23,
    location: "Room 3"
  },
  {
    title: "Upgrade Personal Computers",
    startDate: new Date(2018, 6, 4, 15, 15),
    endDate: new Date(2018, 6, 4, 20, 30),
    id: 24,
    location: "Room 2"
  },
  {
    title: "Customer Workshop",
    startDate: new Date(2018, 6, 5, 6, 0),
    endDate: new Date(2018, 6, 5, 14, 20),
    id: 25,
    location: "Room 1"
  },
  {
    title: "Customer Workshop",
    startDate: new Date(2018, 6, 5, 14, 35),
    endDate: new Date(2018, 6, 5, 16, 20),
    id: 26,
    location: "Room 1"
  },
  {
    title: "Customer Workshop 2",
    startDate: new Date(2018, 6, 5, 10, 0),
    endDate: new Date(2018, 6, 5, 11, 20),
    id: 27,
    location: "Room 2"
  },
  {
    title: "Prepare 2015 Marketing Plan",
    startDate: new Date(2018, 6, 5, 20, 0),
    endDate: new Date(2018, 6, 6, 13, 30),
    id: 28,
    location: "Room 3"
  },
  {
    title: "Brochure Design Review",
    startDate: new Date(2018, 6, 6, 14, 10),
    endDate: new Date(2018, 6, 6, 15, 30),
    id: 29,
    location: "Room 3"
  },
  {
    title: "Create Icons for Website",
    startDate: new Date(2018, 6, 6, 10, 0),
    endDate: new Date(2018, 6, 7, 14, 30),
    id: 30,
    location: "Room 1"
  },
  {
    title: "Upgrade Server Hardware",
    startDate: new Date(2018, 6, 3, 9, 30),
    endDate: new Date(2018, 6, 3, 12, 25),
    id: 31,
    location: "Room 2"
  },
  {
    title: "Submit New Website Design",
    startDate: new Date(2018, 6, 3, 12, 30),
    endDate: new Date(2018, 6, 3, 18, 0),
    id: 32,
    location: "Room 2"
  },
  {
    title: "Launch New Website",
    startDate: new Date(2018, 6, 3, 12, 20),
    endDate: new Date(2018, 6, 3, 14, 10),
    id: 33,
    location: "Room 2"
  },
  {
    title: "Book Flights to San Fran for Sales Trip",
    startDate: new Date(2018, 5, 26, 0, 0),
    endDate: new Date(2018, 5, 27, 0, 0),
    id: 34,
    location: "Room 1"
  },
  {
    title: "Customer Workshop",
    startDate: new Date(2018, 5, 29, 10, 0),
    endDate: new Date(2018, 5, 30, 14, 30),
    id: 35,
    location: "Room 1"
  },
  {
    title: "Google AdWords Strategy",
    startDate: new Date(2018, 6, 3, 0, 0),
    endDate: new Date(2018, 6, 4, 10, 30),
    id: 36,
    location: "Room 3"
  },
  {
    title: "Rollout of New Website and Marketing Brochures",
    startDate: new Date(2018, 6, 5, 10, 0),
    endDate: new Date(2018, 6, 9, 14, 30),
    id: 37,
    location: "Room 3"
  },
  {
    title: "Update NDA Agreement",
    startDate: new Date(2018, 6, 1, 10, 0),
    endDate: new Date(2018, 6, 3, 14, 30),
    id: 38,
    location: "Room 2"
  },
  {
    title: "Customer Workshop",
    startDate: new Date(2018, 6, 1),
    endDate: new Date(2018, 6, 2),
    allDay: true,
    id: 39,
    location: "Room 1"
  }
];

const containerStyles = theme => ({
  container: {
    width: theme.spacing(68),
    padding: 0,
    paddingBottom: theme.spacing(2)
  },
  content: {
    padding: theme.spacing(2),
    paddingTop: 0
  },
  header: {
    overflow: "hidden",
    paddingTop: theme.spacing(0.5)
  },
  closeButton: {
    float: "right"
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 2)
  },
  button: {
    marginLeft: theme.spacing(2)
  },
  picker: {
    marginRight: theme.spacing(2),
    "&:last-child": {
      marginRight: 0
    },
    width: "50%"
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(1, 0)
  },
  icon: {
    margin: theme.spacing(2, 0),
    marginRight: theme.spacing(2)
  },
  textField: {
    width: "100%"
  }
});

class AppointmentFormContainerBasic extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      appointmentChanges: {}
    };

    this.getAppointmentData = () => {
      const { appointmentData } = this.props;
      return appointmentData;
    };
    this.getAppointmentChanges = () => {
      const { appointmentChanges } = this.state;
      return appointmentChanges;
    };

    this.changeAppointment = this.changeAppointment.bind(this);
    this.commitAppointment = this.commitAppointment.bind(this);
  }

  changeAppointment({ field, changes }) {
    const nextChanges = {
      ...this.getAppointmentChanges(),
      [field]: changes
    };
    this.setState({
      appointmentChanges: nextChanges
    });
  }

  commitAppointment(type) {
    const { commitChanges } = this.props;
    const appointment = {
      ...this.getAppointmentData(),
      ...this.getAppointmentChanges()
    };
    if (type === "deleted") {
      commitChanges({ [type]: appointment.id });
    } else if (type === "changed") {
      commitChanges({ [type]: { [appointment.id]: appointment } });
    } else {
      commitChanges({ [type]: appointment });
    }
    this.setState({
      appointmentChanges: {}
    });
  }

  render() {
    const {
      classes,
      visible,
      visibleChange,
      appointmentData,
      cancelAppointment,
      target,
      onHide
    } = this.props;
    const { appointmentChanges } = this.state;

    const displayAppointmentData = {
      ...appointmentData,
      ...appointmentChanges
    };

    const isNewAppointment = appointmentData.id === undefined;
    const applyChanges = isNewAppointment
      ? () => this.commitAppointment("added")
      : () => this.commitAppointment("changed");

    const textEditorProps = field => ({
      variant: "outlined",
      onChange: ({ target: change }) =>
        this.changeAppointment({
          field: [field],
          changes: change.value
        }),
      value: displayAppointmentData[field] || "",
      label: field[0].toUpperCase() + field.slice(1),
      className: classes.textField
    });

    const pickerEditorProps = field => ({
      className: classes.picker,
      // keyboard: true,
      ampm: false,
      value: displayAppointmentData[field],
      onChange: date =>
        this.changeAppointment({
          field: [field],
          changes: date
            ? date.toDate()
            : new Date(displayAppointmentData[field])
        }),
      inputVariant: "outlined",
      format: "DD/MM/YYYY HH:mm",
      onError: () => null
    });

    const cancelChanges = () => {
      this.setState({
        appointmentChanges: {}
      });
      visibleChange();
      cancelAppointment();
    };

    return (
      <AppointmentForm.Overlay
        syles={{}}
        visible={visible}
        target={target}
        fullSize
        onHide={onHide}
      >
        <div>
          <div className={classes.header}>
            <IconButton className={classes.closeButton} onClick={cancelChanges}>
              <Close color="action" />
            </IconButton>
          </div>
          <div className={classes.content}>
            <div className={classes.wrapper}>
              <Create className={classes.icon} color="action" />
              <TextField {...textEditorProps("title")} />
            </div>
            <div className={classes.wrapper}>
              <CalendarToday className={classes.icon} color="action" />
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <KeyboardDateTimePicker
                  label="Start Date"
                  {...pickerEditorProps("startDate")}
                />
                <KeyboardDateTimePicker
                  label="End Date"
                  {...pickerEditorProps("endDate")}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div className={classes.wrapper}>
              <LocationOn className={classes.icon} color="action" />
              <TextField {...textEditorProps("location")} />
            </div>
            <div className={classes.wrapper}>
              <Notes className={classes.icon} color="action" />
              <TextField {...textEditorProps("notes")} multiline rows="6" />
            </div>
          </div>
          <div className={classes.buttonGroup}>
            {!isNewAppointment && (
              <Button
                variant="outlined"
                color="secondary"
                className={classes.button}
                onClick={() => {
                  visibleChange();
                  this.commitAppointment("deleted");
                }}
              >
                Delete
              </Button>
            )}
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              onClick={() => {
                visibleChange();
                applyChanges();
              }}
            >
              {isNewAppointment ? "Create" : "Save"}
            </Button>
          </div>
        </div>
      </AppointmentForm.Overlay>
    );
  }
}

const AppointmentFormContainer = withStyles(containerStyles, {
  name: "AppointmentFormContainer"
})(AppointmentFormContainerBasic);

const styles = theme => ({
  addButton: {
    position: "absolute",
    bottom: theme.spacing(1) * 3,
    right: theme.spacing(1) * 4
  }
});

/* eslint-disable-next-line react/no-multi-comp */
class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
      currentDate: new Date(),
      confirmationVisible: false,
      editingFormVisible: false,
      deletedAppointmentId: undefined,
      editingAppointment: undefined,
      previousAppointment: undefined,
      addedAppointment: {},
      startDayHour: 9,
      endDayHour: 19,
      isNewAppointment: false
    };

    this.toggleConfirmationVisible = this.toggleConfirmationVisible.bind(this);
    this.commitDeletedAppointment = this.commitDeletedAppointment.bind(this);
    this.toggleEditingFormVisibility = this.toggleEditingFormVisibility.bind(
      this
    );

    this.commitChanges = this.commitChanges.bind(this);
    this.onEditingAppointmentChange = this.onEditingAppointmentChange.bind(
      this
    );
    this.onAddedAppointmentChange = this.onAddedAppointmentChange.bind(this);
    this.appointmentForm = connectProps(AppointmentFormContainer, () => {
      const {
        editingFormVisible,
        editingAppointment,
        data,
        addedAppointment,
        isNewAppointment,
        previousAppointment
      } = this.state;

      const currentAppointment =
        data.filter(
          appointment =>
            editingAppointment && appointment.id === editingAppointment.id
        )[0] || addedAppointment;
      const cancelAppointment = () => {
        if (isNewAppointment) {
          this.setState({
            editingAppointment: previousAppointment,
            isNewAppointment: false
          });
        }
      };

      return {
        visible: editingFormVisible,
        appointmentData: currentAppointment,
        commitChanges: this.commitChanges,
        visibleChange: this.toggleEditingFormVisibility,
        onEditingAppointmentChange: this.onEditingAppointmentChange,
        cancelAppointment
      };
    });
  }

  componentDidUpdate() {
    this.appointmentForm.update();
  }

  onEditingAppointmentChange(editingAppointment) {
    this.setState({ editingAppointment });
  }

  onAddedAppointmentChange(addedAppointment) {
    this.setState({ addedAppointment });
    const { editingAppointment } = this.state;
    if (editingAppointment !== undefined) {
      this.setState({
        previousAppointment: editingAppointment
      });
    }
    this.setState({ editingAppointment: undefined, isNewAppointment: true });
  }

  setDeletedAppointmentId(id) {
    this.setState({ deletedAppointmentId: id });
  }

  toggleEditingFormVisibility() {
    const { editingFormVisible } = this.state;
    this.setState({
      editingFormVisible: !editingFormVisible
    });
  }

  toggleConfirmationVisible() {
    const { confirmationVisible } = this.state;
    this.setState({ confirmationVisible: !confirmationVisible });
  }

  commitDeletedAppointment() {
    this.setState(state => {
      const { data, deletedAppointmentId } = state;
      const nextData = data.filter(
        appointment => appointment.id !== deletedAppointmentId
      );

      return { data: nextData, deletedAppointmentId: null };
    });
    this.toggleConfirmationVisible();
  }

  commitChanges({ added, changed, deleted }) {
    this.setState(state => {
      let { data } = state;
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
      }
      if (deleted !== undefined) {
        this.setDeletedAppointmentId(deleted);
        this.toggleConfirmationVisible();
      }
      return { data, addedAppointment: {} };
    });
  }

  render() {
    const {
      currentDate,
      data,
      confirmationVisible,
      editingFormVisible,
      startDayHour,
      endDayHour
    } = this.state;
    const { classes } = this.props;

    return (
      <Paper>
        <Scheduler data={data} height={660}>
          <ViewState currentDate={currentDate} />
          <EditingState
            onCommitChanges={this.commitChanges}
            onEditingAppointmentChange={this.onEditingAppointmentChange}
            onAddedAppointmentChange={this.onAddedAppointmentChange}
          />
          <WeekView startDayHour={startDayHour} endDayHour={endDayHour} />
          <MonthView />
          <AllDayPanel />
          <EditRecurrenceMenu />
          <Appointments />
          <AppointmentTooltip showOpenButton showCloseButton showDeleteButton />
          <Toolbar />
          <ViewSwitcher />
          <AppointmentForm
            overlayComponent={this.appointmentForm}
            visible={editingFormVisible}
            onVisibilityChange={this.toggleEditingFormVisibility}
          />
          <DragDropProvider />
        </Scheduler>

        <Dialog open={confirmationVisible} onClose={this.cancelDelete}>
          <DialogTitle>Delete Appointment</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this appointment?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.toggleConfirmationVisible}
              color="primary"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={this.commitDeletedAppointment}
              color="secondary"
              variant="outlined"
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>

        <Fab
          color="secondary"
          className={classes.addButton}
          onClick={() => {
            this.setState({ editingFormVisible: true });
            this.onEditingAppointmentChange(undefined);
            this.onAddedAppointmentChange({
              startDate: new Date(currentDate).setHours(startDayHour),
              endDate: new Date(currentDate).setHours(startDayHour + 1)
            });
          }}
        >
          <AddIcon />
        </Fab>
      </Paper>
    );
  }
}

export default withStyles(styles, { name: "EditingDemo" })(Demo);
