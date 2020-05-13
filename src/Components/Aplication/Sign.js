import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import RadioGroup from "@material-ui/core/RadioGroup";
import firebase from "firebase";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import UserProvider from "./UserProvider";
import "./../Aplication/Sign.css";
import Heading from "./../../Components/Heading";

const now = new Date();
const today = ` ${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`;

class Sign extends React.Component {
  state = {
    id: "",
    firstName: "",
    myTrainingPlan: "",
    lastName: "",
    sex: "",
    age: "",
    height: "",
    weight: "",
    email: "",
    password: "",
    date: today,
    redirect: false
  };

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleOnSubmit = event => {
    event.preventDefault();
    if (this.props.isSignUp) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(resp => {
          const uid = resp.user.uid;
          this.setState({
            redirect: true
          });
          fetch(
            `https://jfdz13-team2-app.firebaseio.com/UsersData/${uid}.json`,
            {
              method: "PUT",
              body: JSON.stringify({
                id: uid,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                sex: this.state.sex,
                age: this.state.age,
                height: this.state.height,
                weight: this.state.weight,
                email: this.state.email,
                date: this.state.date,
                myTrainingPlan: this.state.myTrainingPlan
              })
            }
          ).then(() => {
            this.setState({
              id: this.state.id,
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              sex: this.state.sex,
              age: this.state.age,
              height: this.state.height,
              weight: this.state.weight,
              email: this.state.email,
              date: this.state.date,
              myTrainingPlan: this.state.myTrainingPlan
            });
          });
        });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          this.setState({
            redirect: true
          });
        })
        .catch(function(error) {
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/my-profile" />;
    }
    return (
      <UserProvider>
        {user => {
          return user ? (
            <h2 style={{ textAlign: "center", marginTop: 20 }}>
              YOU ARE ALREADY LOGGED IN!
            </h2>
          ) : (
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div>
                <Heading
                  content={this.props.isSignUp ? "SIGN UP" : "SIGN IN"}
                />

                <br />
                <form noValidate onSubmit={this.handleOnSubmit}>
                  {this.props.isSignUp ? (
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="fname"
                          name="firstName"
                          variant="outlined"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
                          autoFocus
                          value={this.state.firstName}
                          onChange={this.handleOnChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="lname"
                          name="lastName"
                          variant="outlined"
                          required
                          fullWidth
                          id="lastName"
                          label="Last Name"
                          autoFocus
                          value={this.state.lastName}
                          onChange={this.handleOnChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <RadioGroup>
                          <div className="radioButtonSign">
                            <label>
                              <input
                                name="sex"
                                type="radio"
                                value="Female"
                                checked={this.state.sex === "Female"}
                                onChange={this.handleOnChange}
                              />
                              <p className="regularPText">Female</p>
                            </label>

                            <label>
                              <input
                                name="sex"
                                type="radio"
                                value="Male"
                                checked={this.state.sex === "Male"}
                                onChange={this.handleOnChange}
                              />
                              <p className="regularPText">Male</p>
                            </label>
                          </div>
                        </RadioGroup>
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          type="number"
                          variant="outlined"
                          required
                          fullWidth
                          id="age"
                          label="Age"
                          name="age"
                          autoComplete="age"
                          value={this.state.age}
                          onChange={this.handleOnChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          type="number"
                          autoComplete="height"
                          name="height"
                          variant="outlined"
                          required
                          fullWidth
                          id="height"
                          label="Height in cm"
                          autoFocus
                          value={this.state.height}
                          onChange={this.handleOnChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          type="number"
                          variant="outlined"
                          required
                          fullWidth
                          id="weight"
                          label="Weight in kg"
                          name="weight"
                          autoComplete="weight"
                          value={this.state.weight}
                          onChange={this.handleOnChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          value={this.state.email.toLowerCase()}
                          onChange={this.handleOnChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                          value={this.state.password}
                          onChange={this.handleOnChange}
                        />
                      </Grid>
                    </Grid>
                  ) : (
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          value={this.state.email}
                          onChange={this.handleOnChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                          value={this.state.password}
                          onChange={this.handleOnChange}
                        />
                      </Grid>
                    </Grid>
                  )}

                  <br />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className
                    style={{ backgroundColor: "#080a1d" }}
                  >
                    {this.props.isSignUp ? "Sign up" : "Sign in"}
                  </Button>
                  <br />
                  <br />
                  <Grid container justify="flex-end">
                    <Grid item>
                      {this.props.isSignUp ? (
                        <NavLink className="regularText" to="/signin">
                          DO YOU HAVE AN ACCOUNT? SIGN IN
                        </NavLink>
                      ) : (
                        <NavLink className="regularText" to="/signup">
                          DON'T HAVE AN ACCOUNT? SIGN UP
                        </NavLink>
                      )}
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Container>
          );
        }}
      </UserProvider>
    );
  }
}

export default Sign;
