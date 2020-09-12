import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import axios from "axios";
import RS from "./RegisterSeller"
import Redirect from "react-router-dom/Redirect";
import store from "./Local"
const url = "http://localhost:2000";

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
});

class SellerLogin extends Component {
  state = {
    form: {
      email: '',
      password: ''
    },
    formErrMsg: {
      email: '',
      password: '',
    },
    formValid: {
      email: false,
      password: false,
      buttonActive: false
    },
    successResponse: "",
    errorMessage: "",
    signup: false,
    sLogin: false,
    re: false
  }


  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ form: { ...this.state.form, [name]: value } });
    this.validateField(name, value);
  }

  validateField = (fieldName, value) => {
    var message;
    var { formErrMsg } = this.state;
    var { formValid } = this.state;

    switch (fieldName) {
      case 'email':
        let emailRegex = new RegExp(/^[A-z][A-z0-9.]+@[a-z]+\.[a-z]{2,3}$/);
        value === "" ? message = "Please enter your email id" : emailRegex.test(value) ? message = "" : message = "Email id format is wrong"
        break;

      case "password":
        let passRegex = new RegExp(/^(?=.*[A-Z])(?=.*[!@#$&*%&])(?=.*[0-9])(?=.*[a-z]).{7,20}$/);
        value === "" ? message = "Please enter your password" : passRegex.test(value) ? message = "" : message = "Invalid password"
        break

      default:
        break;
    }
    //Form err message set
    formErrMsg[fieldName] = message;
    this.setState({ formErrMsg: formErrMsg });
    //Form Valid set
    message === "" ? formValid[fieldName] = true : formValid[fieldName] = false;
    formValid.buttonActive = formValid.email && formValid.password;
    this.setState({ formValid: formValid });
  }

  submitSignIn = (e) => {
    e.preventDefault();
    const sellerLoginData = { uEmail: this.state.form.email, uPass: this.state.form.password };
    axios.post(url + '/sellerlogin', sellerLoginData)
      .then(response => this.setState({ successResponse: response.data, sLogin: true }))
      .catch(error => {
        this.setState({ errorMessage: error.response ? error.response.data.message : error.message })
      })
  }
  siri = () => {
    if (this.state.sLogin) {
      store("sname", this.state.form.email)
      store("spass", this.state.form.password)
      store("slogin", this.state.sLogin)
      store("snm", this.state.form.email)
      return <Redirect to="/SellerAdd" />
    }
  }
  handleClick = (e) => {
    this.setState({ re: true })
  }
  siri2 = () => {
    if (alert(this.state.errorMessage)) { }
    else window.location.reload();
  }



  render() {
    const { email, password } = this.state.form;
    const { formErrMsg } = this.state
    const { classes } = this.props;
    var redt = null
    if (this.state.re) {
      redt = <Redirect to="/Register" />
    }

    return (
      <React.Fragment>
        {redt}
        <br></br><br></br>
        <div className="col-md-4 offset-4">
          <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in to start Selling
        </Typography>

              <form className={classes.form} onSubmit={this.submitSignIn} id="sellerForm">
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="uemail">Email address</InputLabel>
                  <Input autoComplete="email" autoFocus
                    id="uemail" name="email"
                    value={email} onChange={this.handleInputChange} />
                  <span className="text-danger">{formErrMsg.email}</span>
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="uPass">Password</InputLabel>
                  <Input name="password" type="password" value={password}
                    onChange={this.handleInputChange} id="uPass"
                    autoComplete="current-password" />
                  <span className="text-danger">{formErrMsg.password}</span><br />
                </FormControl>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={!this.state.formValid.buttonActive}
                >Login
        </Button>

              </form><br />
              <Link to="/rs" exact={"true"} onClick={this.handleClick}>Wanna sell? Sign up to Sell</Link><br />
              {this.state.errorMessage ? (<div className="text-danger">{this.state.errorMessage}</div> && this.siri2()) :
                this.state.successResponse && this.siri()}
            </Paper>
          </main>
        </div>

      </React.Fragment>
    )
  }
}

export default withStyles(styles)(SellerLogin)