
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Redirect from "../../node_modules/react-router-dom/Redirect"
import withStyles from '@material-ui/core/styles/withStyles';
// import SearchProduct from "./SearchProduct"
// import IconButton from '@material-ui/core/IconButton';
// import axios from "axios";
import store from "./Local"
import SellerLogin from './SellerLogin';


const styles =(theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  }
})
class NavUser extends Component {
 
   
    state = {
      search: "",
      stateSearch:false,
      data:[],
      errorMessage:"",
      seller:false
    }
  

  searchProduct = (event) => {
    var val = event.target.value
    
    this.setState({ search: val})

   
  }
  submitSearch = (event) => {
    event.preventDefault();
    console.log("ss",this.state.search)
    this.setState({stateSearch:true})
    
  //   // this.setState({data:[],errorMessage:""})
  //   //    axios.get(url).then(response => {
  //   //     this.setState({ data: response.data, errorMessage: "",searchState:true });
  //   //   }).catch(error => {
  //   //     if (error.response) {
  //   //       this.setState({  errorMessage: error.response.data.message,data:[] })
  //   //     } else {
  //   //       this.setState({  errorMessage: "Server Error",data:[] });
  //   //     }
  //   //   });

  }
  // sets=()=>{
  //   if(this.props.login.length>0){
  //   this.setState({forUser:true})}
  // }

siri=()=>{
  localStorage.removeItem("login")
  localStorage.removeItem("name")
  localStorage.removeItem("pass")
  localStorage.removeItem("nm")
  {window.location.reload(false)}
}
  render() {
  const { classes } = this.props;
   var redirect=null
   var val=false
   console.log(this.state.stateSearch)
   if(this.state.stateSearch){
    console.log("hi")
    let url = "/dashboard/"+this.state.search
    console.log(url)
    redirect=<Redirect to={url} ></Redirect>}
  //     // return <SearchProduct key={this.state.search}/>
  //     //  return <Redirect to={url}></Redirect>
//   if(this.props.login!==""){
// // this.setState({forUser:true})
//     val=true
//   }

//  }
    
    return (
      <React.Fragment>
        <AppBar  >
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap >
              <Link to='/dashboard' exact={"true"} style={{ color: "white" }}>Hoopla</Link>
            </Typography>            
            
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon  />
              </div>
             <form onClick={(event)=>this.submitSearch(event)} >
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={this.state.search}
                onChange={this.searchProduct}
              />
              </form>
            </div>
            
            {/* <Link  className="ml-auto" to="/register" >Register</Link> */}
            {/* <Link className="ml-auto text-light" to="/login" >Login</Link> */}
            {/* {()=>this.sets} */}
            {/* {console.log(this.state.forUserProps,"foruser")}
            {console.log(val,"user")} */}

            {/* {!val?
            
             <span>Welcome</span>:<Link className="ml-auto text-light" to="/login" >Login</Link> }   */}
             
           <h5 className="ml-auto text-light">Welcome,{localStorage.getItem("nm")}</h5>
           <button onClick={()=>this.siri()}>Logout</button>
           <button  className="btn btn-primary" onClick={()=>{this.setState({seller:true})}}>SellerLogin</button>
          </Toolbar>
          <div>

            <Link className="ml-auto col-3" to="/Electronics" style={{ fontStyle: "Arial", fontSize: "20px", color: "white" }} >ELECTRONICS</Link>

            <Link className="ml-auto col-3" to="/Shoes" style={{ fontStyle: "Arial", fontSize: "20px", color: "white" }} >SHOES</Link>

            <Link className="ml-auto col-3" to="/Furniture" style={{ fontStyle: "Arial", fontSize: "20px", color: "white" }} >FURNITURE</Link>

            <Link className="ml-auto col-3" to="/Clothing" style={{ fontStyle: "Arial", fontSize: "20px", color: "white" }} >CLOTHING</Link>
            {redirect}
          </div>



        </AppBar>
        {/* <ProductBar/> */}
{(this.state.seller)?<SellerLogin></SellerLogin>:null}
      </React.Fragment>

    )
  }
}
export default withStyles(styles)(NavUser)






