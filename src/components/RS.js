import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PersonAddOutLinedIcon from '@material-ui/icons/PersonAddOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import axios from "axios";
import Home from './Home'
import { MenuItem } from "@material-ui/core";
import Select from '@material-ui/core/Select'
import { array } from "prop-types";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import SellerProducts from "./SellerProducts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const usersBackendURL = "http://localhost:2000/";

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

class RS extends Component {
  state = {

    form: {
      email: '',
      password: '',
      username: '',
      tanNumber:"",
      gstNumber: '',
      accountNumber: '',
      mobNumber: '',  
    },
    formErrMsg: {
      email: '',
      password: '',
      username: '',
      gstNumber: '',
      tanNumber: "",
      accountNumber: '',
      mobNumber: '', 
    },
    formValid: {
        email: false,
        password: false,
        username: false,
        gstNumber: false,
        tanNumber: false,
        accountNumber: false,
        mobNumber: false,
        buttonActive: false
    },
    successResponse: "",
    errorMessage: "",
    // product:[],
    // flag:false,
    // redirect:false
   
   
  }


  handleInputChange = (event) => {
    // const name = e.target.name;
    // const value = e.target.value;
    // // console.log(e.target.value)
    // this.setState({ form: { ...this.state.form, [name]: value} });
   
    // this.validateField(name, value);
    var inputfield = event.target.name;
    var enteredValue = event.target.value;
    var formObj = this.state.form
    formObj[inputfield] = enteredValue
    this.setState({ form: formObj })
    this.validateField(inputfield, enteredValue);
    // if(this.state.form.category!=''){
    // this.setState({flag:true,product:[]})}
   
  }

  validateField = (fieldName, value) => {
    var message;
    var { formErrMsg } = this.state;
    var { formValid } = this.state;

    switch (fieldName) {
        case 'email':
        let emailRegex = new RegExp(/^[A-z][A-z0-9.]+@[a-z]+\.[a-z]{2,3}$/);
        value === "" ? message = "Please enter the email id" : emailRegex.test(value) ? message = "" : message = "Email id format is wrong"
        break;

        case "password":
        let passRegex = new RegExp(/^(?=.*[A-Z])(?=.*[!@#$&*%&])(?=.*[0-9])(?=.*[a-z]).{7,20}$/);
        value === "" ? message = "Please enter the password" : passRegex.test(value) ? message = "" : message = "Should be 7-20 characters long consisiting of alphabets, digits and any of !@#$%&"
        break

        case 'username':
        let uRegex = new RegExp(/^[A-Za-z]{1}[A-Za-z ]{2,}[A-Za-z]$/)
        value === "" ? message = "Please enter the username" : uRegex.test(value) ? message = "" : message = "Should be at least 3 characters long consisting of alphabet and spaces and spaces should not at start or end"
        break;

        case 'tanNumber':
        let tRegex = new RegExp(/^[A-Z]{4}[0-9]{5}[A-Z]{1}$/)
        value === "" ? message = "Please enter the Tan Number" : tRegex.test(value) ? message = "" : message ="TAN number should be of format AAAA12345A"
        break;

        case 'gstNumber':
        let gRegex = new RegExp(/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/)
        value === "" ? message = "Please enter the GST number" : gRegex.test(value) ? message = "" : message = "GST number should be of format 12ABCDE1234A1Z1"
        break;

        case 'accountNumber':
        let aRegex = new RegExp(/^[0-9]{9,18}$/)
        value === "" ? message = "Please enter the Account number" : aRegex.test(value) ? message = "" : message = "Account number should be 9-18 characters long and should consists only numbers"
        break;

        case 'mobNumber':
        let nRegex = new RegExp(/^[1-9]{1}[0-9]{9}$/)
        value === "" ? message = "Please enter the mobile number" : nRegex.test(value) ? message = "" : message = "Mobile number should be 10 digit"
        break;

        

      default:
        break;
    }
    //Form err message set
    formErrMsg[fieldName] = message;
    this.setState({ formErrMsg: formErrMsg });
    //Form Valid set
    message === "" ? formValid[fieldName] = true : formValid[fieldName] = false;
    console.log(this.state.formValid.email)
    formValid.buttonActive = formValid.email && formValid.password && formValid.username && formValid.mobNumber && formValid.gstNumber && formValid.accountNumber && formValid.tanNumber;
    this.setState({ formValid: formValid });
  }

  submitRegister = (e) => {
    e.preventDefault();
    const userRegisterData =
    {
      name: this.state.form.username,
      category: this.state.form.category,
      subCategory: this.state.form.subcat,
      uDob: this.state.form.dob,
      phone: this.state.form.mobNumber,
      email: this.state.form.email,
      pass: this.state.form.password,
      gstNo: this.state.form.gstNumber,
      address: this.state.form.address,
      account: this.state.form.accountNumber
    };
    console.log(this.state.form.category)
    // const userRegisterData = {Name: this.state.form.username,category:this.state.form.category, uDob:this.state.form.dob, uMobilenumber:this.state.form.mobileNumber, uEmail: this.state.form.email, uPass: this.state.form.password };
   
    // axios.post(usersBackendURL + 'seller/register', userRegisterData)
    //   .then(response => {this.setState({ successResponse: response.data })
    //   })
     
    //   .catch(error => {
    //     this.setState({ errorMessage: error.response ? error.response.data.message : error.message })
       
    //   })
  }


// setproducts=(catg)=>{
//   console.log(catg)
//   this.setState({product:catg})
 
// }

render() {
    const { email, password,username, gstNumber,tanNumber, mobNumber,accountNumber } = this.state.form;
    const { formErrMsg } = this.state
    const { classes } = this.props;  
 
   
   if(this.state.successResponse){
    toast("Successfully Registered!");
   }
  
//   if(this.state.redirect){
//     return <SellerProducts/>
//   }
//   if(this.state.formValid.buttonActive  && this.state.successResponse){
//     this.setState({redirect:true})}
   
  return (
      <React.Fragment>
         
        <br></br><br></br>
        <div className="col-md-4 offset-4">
          <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
              <Avatar className={classes.avatar}>
                <PersonAddOutLinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Wanna Sell? Signup!
              </Typography>
              <form className={classes.form} onSubmit={this.submitRegister}>
              
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="semail">Email Id</InputLabel>
                  <Input autoComplete="uName" autoFocus
                    name="email" type="semail" id="semail"
                    value={email} onChange={this.handleInputChange} />
                  <span className="text-danger">{formErrMsg.email}</span>
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="sPass">Password</InputLabel>
                  <Input name="password" type="password" value={password}
                    onChange={this.handleInputChange} id="sPass"
                    autoComplete="current-password" />
                  <span className="text-danger">{formErrMsg.password}</span><br />
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="sName">Name</InputLabel>
                  <Input
                    id="sName" name="username"
                    value={username} onChange={this.handleInputChange} />
                  <span className="text-danger">{formErrMsg.username}</span>
                </FormControl>
               
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="tanNumber">TAN number</InputLabel>
                  <Input name="tanNumber"  id="tanNumber"
                    value={tanNumber} onChange={this.handleInputChange} />
                  <span className="text-danger">{formErrMsg.tanNumber}</span>
                </FormControl>
                 
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="gstNumber">GST number</InputLabel>
                  <Input name="gstNumber"  id="gstNumber"
                    value={gstNumber} onChange={this.handleInputChange} />
                  <span className="text-danger">{formErrMsg.gstNumber}</span>
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="aNumber">Account number</InputLabel>
                  <Input name="accountNumber" type="number" id="aNumber"
                    value={accountNumber} onChange={this.handleInputChange} />
                  <span className="text-danger">{formErrMsg.accountNumber}</span>
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="sMobilenumber">Mobile Number</InputLabel>
                  <Input name="mobNumber" type="number" id="sMobilenumber"
                    value={mobNumber} onChange={this.handleInputChange} />
                  <span className="text-danger">{formErrMsg.mobNumber}</span>
                </FormControl>

                
                <span className="text-danger">*Mandatory Fields</span>              

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={!this.state.formValid.buttonActive}
                  >Register
                </Button>

              </form><br />
              <Link to="/sellerLogin" exact={"true"} onClick={this.handleClick}>Existing Seller? Log in</Link><br />
              {this.state.errorMessage ? (<div className={'text-danger'}>{this.state.errorMessage}</div>) :
                this.state.successResponse && <div className="text-success">Successfully logged in</div>}
            </Paper>
          </main>
        </div>
      </React.Fragment>
    )
               
  }
}

export default withStyles(styles)(RS)

