// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { fade, makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import SearchIcon from '@material-ui/icons/Search';
// import InputBase from '@material-ui/core/InputBase';
// // import ProductBar from './Productbar'

// const useStyles = makeStyles(theme => ({
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(3),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     width: theme.spacing(7),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 7),
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: 200,
//     },
//   }
//   }))


//   const Sample=()=>{
//     const classes = useStyles();
//     // console.log(this.state.search)
//     return (
//       <React.Fragment>

//         <AppBar  >
//           <Toolbar>
//             <Typography variant="h6"  color="inherit"  noWrap >
//               <Link to='/dashboard' exact={"true"} style={{color:"white"}}>Hoopla</Link>
//             </Typography>
//            {/* <Link  className="ml-auto" to="/register" >Register</Link>
//             <Link className="ml-auto" to="/login" >Login</Link>  */}
//              <div className={classes.search}>
//             <div className={classes.searchIcon}>
//               <SearchIcon />
//             </div>

//             <InputBase
//               placeholder="Search…"
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
//               inputProps={{ 'aria-label': 'search' }}
//               // value={this.state.search}
//               // onChange={this.searchProduct}
//               // onSubmit={this.submitSearch}
//             />
//           </div>
//           </Toolbar>


//          {/* <div >
//            <a className="nav-a col-3 text-center offset-1 " style={{fontStyle:"Arial" ,fontSize:"20px",color:"white"}} href='#'>ELECTRONICS</a>
//            <a className="nav-a col-3 text-center offset-2" style={{fontStyle:"Arial" ,fontSize:"20px",color:"white"}} href="#">SHOES</a>
//            <a className="nav-a col-3 text-center offset-2" style={{fontStyle:"Arial" ,fontSize:"20px",color:"white"}} href="#">FURNITURE</a>
//            <a className="nav-a col-3 text-center offset-2" style={{fontStyle:"Arial" ,fontSize:"20px",color:"white"}} href="#">CLOTHING</a>
//          </div> */}
//           {/* <div>

//             <Link className="ml-auto col-3" to="/dashboard/Electronics" style={{ fontStyle: "Arial", fontSize: "20px", color: "white" }} >ELECTRONICS</Link>

//             <Link className="ml-auto col-3" to="/dashboard/Shoes" style={{ fontStyle: "Arial", fontSize: "20px", color: "white" }} >SHOES</Link>

//             <Link className="ml-auto col-3" to="/dashboard/Furniture" style={{ fontStyle: "Arial", fontSize: "20px", color: "white" }} >FURNITURE</Link>

//             <Link className="ml-auto col-3" to="/dashboard/Clothing" style={{ fontStyle: "Arial", fontSize: "20px", color: "white" }} >CLOTHING</Link>

//           </div> */}
//           <div>

//             <Link className="ml-auto col-3" to="/Electronics" style={{ fontStyle: "Arial", fontSize: "20px", color: "white" }} >ELECTRONICS</Link>

//             <Link className="ml-auto col-3" to="/Shoes" style={{ fontStyle: "Arial", fontSize: "20px", color: "white" }} >SHOES</Link>

//             <Link className="ml-auto col-3" to="/Furniture" style={{ fontStyle: "Arial", fontSize: "20px", color: "white" }} >FURNITURE</Link>

//             <Link className="ml-auto col-3" to="/Clothing" style={{ fontStyle: "Arial", fontSize: "20px", color: "white" }} >CLOTHING</Link>

//           </div> 



//         </AppBar>
//         {/* <ProductBar/> */}

//       </React.Fragment>
//     );
//   }
// //  class NavBar extends Component {
// //    constructor(){
// //      super()
// //      this.state={
// //       search:"Hi",
// //       searchState:false
// //     }
// //    }

//   // searchProduct=(event)=>{
//   //   var val=event.target.value
//   //   this.setState({search:val})
//   // }
//   // submitSearch=(event)=>{
//   //   event.preventDefault();
//   //  let url="/dashboard/"+this.state.search;
//   //  return <Link to={url}></Link>

//   // }

//   export default class Navbar extends Component{
//   render() {
//     return (
//       <div>
//          <Sample/>  
//       </div>
//    );
// }}


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Redirect from "../../node_modules/react-router-dom/Redirect"
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import FormControl from '@material-ui/core/FormControl';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
// import SearchProduct from "./SearchProduct"
// import IconButton from '@material-ui/core/IconButton';
// import axios from "axios";
import LoginComponent from "./Login"
import CartI from "./CartIcon"
import StyledBadge from '@material-ui/core/Badge';
// import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Home from "./Home"

const styles = (theme) => ({
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
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    }
  }
})
class NavBar extends Component {


  state = {
    search: "",
    stateSearch: false,
    data: [],
    errorMessage: "",
    res: false,
   
    redt:false
  }


  searchProduct = (event) => {
    var val = event.target.value

    this.setState({ search: val })


  }
  submitSearch = (event) => {
    event.preventDefault();
    console.log("ss", this.state.search)
    this.setState({ stateSearch: true })

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
  siri = () => {
    localStorage.removeItem("login")
    localStorage.removeItem("name")
    localStorage.removeItem("pass")
    localStorage.removeItem("nm")
    localStorage.removeItem("siri")
    localStorage.removeItem("objs")
    localStorage.removeItem("cartItems")
    { window.location.reload(false) }
    // this.setState({ret:false})
    
  }
  siri2 = () => {
    localStorage.removeItem("slogin")
    localStorage.removeItem("sname")
    localStorage.removeItem("spass")
    localStorage.removeItem("snm")
    
    this.setState({redt:true})
    
  }
  siri1 = () => {
    this.setState({ res: true })
  }
  // cart=()=>{
  //   count+=1
  //   this.setState({count:count})
  //   localStorage.removeItem("cart")
  // }


  render() {
    const { classes } = this.props;
    var redirect = null
    var val = false
    var resd = ""
    var redt=null
    console.log(this.state.stateSearch)
    if (this.state.stateSearch) {
      console.log("hi")
      let url = "/dashboard/" + this.state.search
      console.log(url)
      redirect = <Redirect to={url} ></Redirect>
    }
  
    if (this.state.res) {
      resd=<LoginComponent product={true}/>
    }
    if(this.state.redt){
    redt= <Redirect to="/"/>
    }
    return (
      
      <React.Fragment>
        {redt}
        <AppBar className="bg-info" >
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap >
              <Link to='/dashboard' exact={"true"} style={{ color: "white" }}>Hoopla</Link>
            </Typography>
            {!localStorage.getItem("slogin")?
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <form onClick={(event) => this.submitSearch(event)} >
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
            </div>:<div></div>}

            {/* <Link  className="ml-auto" to="/register" >Register</Link> */}
            {/* <Link className="ml-auto text-light" to="/login" >Login</Link> */}
            {/* {()=>this.sets} */}
            {/* {console.log(this.state.forUserProps,"foruser")}
            {console.log(val,"user")} */}

            {/* {!val?
         
             <span>Welcome</span>:<Link className="ml-auto text-light" to="/login" >Login</Link> }   */}
            {localStorage.getItem("login") ? 
            <h5 className="ml-auto text-light row"><br/>Welcome, {localStorage.getItem("nm")}
            <CartI  num={localStorage.getItem("cartItems")}/> 
           <ExitToAppIcon className="mt-3" onClick={() => this.siri()}> </ExitToAppIcon> 
            </h5>
               :
            localStorage.getItem("slogin")?
            <h5 className="ml-auto text-light row"><br/>Welcome, {localStorage.getItem("snm")}
           <ExitToAppIcon className="mt-3" onClick={() => this.siri2()}> </ExitToAppIcon></h5>:
            <div className="ml-auto "><Link  className="text-light" to="/login" >Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;<Link className="text-light"  to="/SellerLogin">Seller Login</Link> </div>}
              {/* : <button className="btn btn-warning ml-auto" onClick={() => this.siri1()}>Login</button>}  */}
            

              {/* {localStorage.getItem("slogin")?
            <h5 className="ml-auto text-light row"><br/>Welcome, {localStorage.getItem("snm")}
           <ExitToAppIcon className="mt-3" onClick={() => this.siri2()}> </ExitToAppIcon></h5> :
           <div className="ml-auto "><Link  className="text-light" to="/login" >Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;<Link className="text-light"  to="/SellerLogin">Seller Login</Link> </div>} */}

          
          
         
          </Toolbar>


          {/* <div >
           <a className="nav-a col-3 text-center offset-1 " style={{fontStyle:"Arial" ,fontSize:"20px",color:"white"}} href='#'>ELECTRONICS</a>
           <a className="nav-a col-3 text-center offset-2" style={{fontStyle:"Arial" ,fontSize:"20px",color:"white"}} href="#">SHOES</a>
           <a className="nav-a col-3 text-center offset-2" style={{fontStyle:"Arial" ,fontSize:"20px",color:"white"}} href="#">FURNITURE</a>
           <a className="nav-a col-3 text-center offset-2" style={{fontStyle:"Arial" ,fontSize:"20px",color:"white"}} href="#">CLOTHING</a>
         </div> */}
          {/* <div>
  
            <Link className="ml-auto col-3" to="/dashboard/Electronics" style={{ fontStyle: "Arial", fontSize: "20px", color: "white" }} >ELECTRONICS</Link>
  
            <Link className="ml-auto col-3" to="/dashboard/Shoes" style={{ fontStyle: "Arial", fontSize: "20px", color: "white" }} >SHOES</Link>
  
            <Link className="ml-auto col-3" to="/dashboard/Furniture" style={{ fontStyle: "Arial", fontSize: "20px", color: "white" }} >FURNITURE</Link>
  
            <Link className="ml-auto col-3" to="/dashboard/Clothing" style={{ fontStyle: "Arial", fontSize: "20px", color: "white" }} >CLOTHING</Link>
  
          </div> */}
          {!localStorage.getItem("slogin")?
          <div>
          {/* {resd} */}
          
            <Link className="ml-auto col-3" to="/Electronics" style={{ fontStyle: "Arial", fontSize: "20px", color: "white" }} >ELECTRONICS</Link>

            <Link className="ml-auto col-3" to="/Shoes" style={{ fontStyle: "Arial", fontSize: "20px", color: "white" }} >SHOES</Link>

            <Link className="ml-auto col-3" to="/Furniture" style={{ fontStyle: "Arial", fontSize: "20px", color: "white" }} >FURNITURE</Link>

            <Link className="ml-auto col-3" to="/Clothing" style={{ fontStyle: "Arial", fontSize: "20px", color: "white" }} >CLOTHING</Link>
            {redirect}
            
          </div>:<div></div>}



        </AppBar>
        {/* <ProductBar/> */}

      </React.Fragment>

    )
  }
}
export default withStyles(styles)(NavBar)






