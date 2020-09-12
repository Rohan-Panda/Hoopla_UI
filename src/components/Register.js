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
import Redirect from "react-router-dom/Redirect";


const usersBackendURL = "http://localhost:2000";

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

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
  this.state = {
    userProfile : {},
    form: {
      uName: '',
      uDOB: '',
      uPhone: '',
      uEmail: '',
      uPass: ''
    },
    formErrMsg: {
      uName: '',
      uDOB: '',
      uPhone: '',
      uEmail: '',
      uPass: '',
    },
    formValid: {
      uName: false,
      uDOB: false,
      uPhone: false,
      uEmail: false,
      uPass: false,
      buttonActive: false
    },
    successResponse: "",
    errorMessage: "",
    re:false
  };
}


  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ form: { ...this.state.form, [name]: value } });
    this.validateField(name, value);
  }
  handleClick=(e)=>{
    this.setState({re:true})
  }
  

  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrMsg;
        let formValid = this.state.formValid;
    
        switch (fieldName) {
            case "uName":
                const uNameRegex = /^[A-Za-z]{1}[A-Za-z ]{2,}[A-Za-z]$/
                if (value === "") {
                fieldValidationErrors.uName = "field required";
                formValid.uName = false;
                } else if (!value.match(uNameRegex)) {
                fieldValidationErrors.uName = "Please enter valid Name";
                formValid.uName = false;
                } else {
                fieldValidationErrors.uName = "";
                formValid.uName = true;
                }
                break;
            case "uDOB":
                if (value === "") {
                fieldValidationErrors.uDOB = "field required";
                formValid.uDOB = false;
                } else if (new Date(value) > new Date()) {
                fieldValidationErrors.uDOB = "Date of birth should not be greater than today's date";
                formValid.uDOB = false;
                } else {
                fieldValidationErrors.uDOB = "";
                formValid.uDOB = true;
                }
                break;

            case "uPhone":
            let pattern=/^[0-9]{10}/

                if (value === "") {
                    fieldValidationErrors.uPhone = "field required";
                    formValid.uPhone = false;
                } else if(!pattern.test(value)){
                    fieldValidationErrors.uPhone = "Please enter a valid Phone number";;
                    formValid.uPhone = false;
                } else {
                    fieldValidationErrors.uPhone =""
                    formValid.uPhone = true;
                }
                break;
            case "uEmail":
                let uEmailRegex = new RegExp(/^[A-z][A-z0-9.]+@[a-z]+\.[a-z]{2,3}$/);                
                if (value === "") {
                    fieldValidationErrors.uEmail = "field required";
                    formValid.uEmail = false;
                } else if(uEmailRegex.test(value)){
                  fieldValidationErrors.uEmail = "";
                    formValid.uEmail = true;
                } else {
                  fieldValidationErrors.uEmail = "Email Id format is wrong";
                    formValid.uEmail = false;
                }
                break;

            case "uPass":
                let passRegex = new RegExp(/^(?=.*[A-Z])(?=.*[!@#$&*%&])(?=.*[0-9])(?=.*[a-z]).{7,20}$/); 
                if (value === "") {
                    fieldValidationErrors.uPass = "field required";
                    formValid.uPass = false;
                } else if(passRegex.test(value)){
                  fieldValidationErrors.uPass = "";
                    formValid.uPass = true;
                } else {
                  fieldValidationErrors.uPass = "should be 7-20 characters long consisting of  atleast one uppercase and lowercase alphabet, digits and any of !@#$%^&* ";
                    formValid.uPass = false;
                }
                break;
            default:
                break;
        }
        formValid.buttonActive =
          formValid.uName &&
          formValid.uDOB &&
          formValid.uPhone &&
          formValid.uEmail &&
          formValid.uPass
        this.setState({ formErrorMessage: fieldValidationErrors, formValid: formValid })
  }

  // setuProfile = ()=>{
  //   var newuProfile = this.state.uProfile;
  //   newuProfile.push(this.state.form)
  //   var resetForm ={ uName: "",uDOB:"",uPhone: "",uEmail:"",uPass:""}
  //   var resetValidField = {uName: false,uDOB:false,uPhone:false,uEmail:false,uPass:false,buttonActive:false}
  //   this.setState({ uProfile: newuProfile, form: resetForm, formValid:resetValidField })

  // }


  submitSignUp = (e) => {
    e.preventDefault();
    let uProfile = {
      userId: "",
      uCredentials: {
        uEmail: this.state.form.uEmail,
        uPass: this.state.form.uPass
      },
      uName: this.state.form.uName,
      uDOB: this.state.form.uDOB,
      uPhone: this.state.form.uPhone,
      uDateJoined: new Date(),
      uCart: []
    }
    console.log("uProfile", uProfile);
    

    this.setState({ errorMessage: "", successMessage: "" })
    axios.post(usersBackendURL + '/register', uProfile)
      .then(response => this.setState({ successResponse: response.data }))
      .catch(error => {
        console.log("errorResponse", error.response, "errorMessage",  error.message );
        this.setState({ errorMessage: error.response ? error.response.data.message : error.message })
      })
  }

  render() {
    const { uName, uDOB, uPhone, uEmail, uPass } = this.state.form;
    const { formErrMsg } = this.state
    const { classes } = this.props;
    var redt=null
    if(this.state.re){
      redt=<Redirect to="/login"/>
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
                Please sign up to continue
              </Typography>

              <form className={classes.form} onSubmit={this.submitSignUp} id="regForm">
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="uName">Username<sup>*</sup></InputLabel>
                  <Input autoComplete="uName" autoFocus
                    id="uName" name="uName" type="text"
                    value={uName} onChange={this.handleInputChange} />
                  <span className="text-danger">{formErrMsg.uName}</span>
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                  <label htmlFor="uDOB">Date Of Birth</label>
                  <Input autoComplete="uDOB" type = "date" autoFocus
                    id="uDOB" name="uDOB"
                    value={uDOB} onChange={this.handleInputChange} />
                  <span className="text-danger">{formErrMsg.uDOB}</span>
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="uPhone">Mobile Number<sup>*</sup></InputLabel>
                  <Input autoComplete="uPhone" type = "number" autoFocus
                    id="uPhone" name="uPhone"
                    value={uPhone} onChange={this.handleInputChange} />
                  <span className="text-danger">{formErrMsg.uPhone}</span>
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="uEmail">Email address</InputLabel>
                  <Input autoComplete="uEmail" autoFocus
                    id="uEmail" name="uEmail" type="email"
                    value={uEmail} onChange={this.handleInputChange} />
                  <span className="text-danger">{formErrMsg.uEmail}</span>
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="uPass">Password</InputLabel>
                  <Input name="uPass" type="password" value={uPass}
                    onChange={this.handleInputChange} id="uPass"
                    autoComplete="current-uPass" />
                  <span className="text-danger">{formErrMsg.uPass}</span><br />
                </FormControl>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={this.submitSignUp}
                  className={classes.submit}
                  disabled={!this.state.formValid.buttonActive}
                >Register
              </Button>

              </form><br />
              <Link to="/register" exact={"true"} onClick={this.handleClick}>Already registered? Log In Here</Link><br />
              {this.state.errorMessage ? (<div className="text-danger">{this.state.errorMessage}</div>) :
                this.state.successResponse && <div className="text-success">Account Successfully created. Just go to login page</div>}
            </Paper>
          </main>
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(RegisterComponent)