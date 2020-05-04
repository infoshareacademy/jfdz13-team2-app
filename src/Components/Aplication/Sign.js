import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import firebase from "firebase";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import UserProvider from "./UserProvider";

class Sign extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    sex: "",
    age: "",
    height: "",
    weight: "",
    email: "",
    password: "",
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
        .then(() => {
          this.setState({
            redirect: true
          });
        })
        .catch(function(error) {
          const errorMessage = error.message;
          alert(errorMessage);
        });
      fetch("https://jfdz13-team2-app.firebaseio.com/UsersData.json", {
        method: "POST",
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          sex: this.state.sex,
          age: this.state.age,
          height: this.state.height,
          weight: this.state.weight
        })
      }).then(() => {
        this.setState({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          sex: this.state.sex,
          age: this.state.age,
          height: this.state.height,
          weight: this.state.weight
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
              You are already logged in!
            </h2>
          ) : (
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div>
                <Avatar>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  {this.props.isSignUp ? "Sign up" : "Sign in"}
                </Typography>
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
                        <RadioGroup
                          aria-label="gender"
                          name="gender1"
                          // value={this.state.sex}
                          // onChange={handleChange}
                        >
                          <FormControlLabel
                            value="female"
                            onChange={this.handleOnChange}
                            control={<Radio />}
                            label="Female"
                          />
                          <FormControlLabel
                            value="male"
                            onChange={this.handleOnChange}
                            control={<Radio />}
                            label="Male"
                          />
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
                  <Grid container justify="flex-end">
                    <Grid item>
                      {this.props.isSignUp ? (
                        <NavLink to="/signin">
                          Do you have an account? Sign In
                        </NavLink>
                      ) : (
                        <NavLink to="/signup">
                          Don't have an account? Sign Up
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
