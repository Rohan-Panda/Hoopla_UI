import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router,Redirect,Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import Product from "./Product"
import SearchProduct from "./SearchProduct"
import RegisterComponent from "./Register"
import Nav_User from "./Nav_User"
import ProductDetails from "./productDetails"
import PD1 from "./Pd"
import Orders from "./Orders"
import SellerLogin from "./SellerLogin"
import RS from "./RegisterSeller"
import CartDetails from "./CartDetails"
import SellerAdd from "./SellerAdd"


class App extends Component {
  constructor(props){
    super(props)
  }
  refreshPage=()=> {
    window.location.reload(true);
  }

  render() {
    return (
      <div>
        <Router>
          <Fragment>
            {/* {this.refreshPage} */}
            {/* {localStorage.getItem("login")?<Nav_User/>:<NavBar/>} */}
            <NavBar/>
          
            <Switch>
              <Route exact path="/" render={()=>(<Redirect to="/dashboard"/>)} push/>
              <Route exact path='/dashboard' component={Home} />
              <Route exact path='/login' component={() => <Login />} />
            <Route exact path='/checkout' component={Orders}></Route>
              <Route exact path='/Electronics' component={()=>(<Product category="Electronics"/>)}/>
              <Route exact path='/Shoes' component={()=>(<Product category="Shoes"/>)}/>
              <Route exact path='/Furniture' component={()=>(<Product category="Furniture"/>)}/>
              <Route exact path='/Clothing' component={()=>(<Product category="Clothing"/>)}/>
              <Route exact path='/dashboard/:key' component={SearchProduct} /> 
              <Route exact path='/Register' component={RegisterComponent} /> 
              {/* <Route exact path='/pd' component={()=> <ProductDetails product={this.props.location.state.product}/>} /> */}
              <Route exact path='/pd' component={ProductDetails}/>
              <Route exact path='/pd1' component={PD1}/>
              <Route exact path="/sellerlogin" component={SellerLogin}></Route>
              <Route exact path="/rs" component={RS}></Route>
              <Route exact path="/cartI" component={CartDetails}/>
              <Route exact path="/SellerLogin" component={ SellerLogin}/>
              <Route exact path="/SellerAdd" component={SellerAdd}/>
            </Switch>
            
          </Fragment>
        </Router>
      </div>
    );
  }
}
export default App