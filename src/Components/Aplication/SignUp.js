import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import firebase from "firebase";
import { Redirect } from "react-router";
// import { Link } from "react-router-dom";

class SignUp extends React.Component {
  state = {
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
  };

  //   setValue(event.target.value);
  // };
  // const classes = useStyles();
  // const [value, setValue] = React.useState("female");

  // const handleChange = event => {
  //   setValue(event.target.value);
  // };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/my-profile" />;
    }
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form noValidate onSubmit={this.handleOnSubmit}>
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
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  // value={value}
                  // onChange={handleChange}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
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
                  autoComplete="age"
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
            <br />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className
              style={{ backgroundColor: "#080a1d" }}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}
export default SignUp;
