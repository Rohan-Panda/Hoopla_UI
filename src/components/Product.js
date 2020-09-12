// 
import React, { Component } from 'react';
import './App.css';
import ProductDetails from "./productDetails"
import axios from "axios"
import { element } from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';
import Redirect from "react-router-dom/Redirect";

class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category,
      cardsData: [],
      errorMessage: "",
      active:false,
      currentProduct:{}
    };

  }

  componentDidMount() {
    this.fetchDetails()
  }
  fetchDetails = () => {
    const url = "http://localhost:2000/getProducts/"
    axios.get(url + this.state.category)
      .then(response => {
        console.log("JINAL S SHAH", response.data)
        this.setState({ cardsData: response.data, errorMessage: "" });
      }).catch(error => {
        console.log("Error")

        this.setState({ errorMessage: error.response.data.message, cardsData: [] });
      });
  }

  render() {
  return <React.Fragment>
    {this.state.active?
    // <ProductDetails product={this.state.currentProduct}></ProductDetails>:
    this.props.from=="prod"?
    <Redirect to={{
           pathname: '/pd1',
           state: { product: this.state.currentProduct,ref:"yes"}
       }}/>:
         <Redirect to={{
           pathname: '/pd',
           state: { product: this.state.currentProduct,ref:"yes"}
       }}/>:
 (
  <div className="p-2 ml-5">
  <div className="mt-5 pt-5 mr-5 card-deck">
{this.state.cardsData.map((element, index) => {
 return <div className="col-md-3 mt-2 card-deck col-sm-1 text-light"> 
 <div className="card shadow-lg hover bg-secondary product mb-5" onClick={()=>{this.setState({currentProduct:element,active:true})}}>
   <img className="card-img-top img-rounded p-1"  style={{ height: "250px" }} src={require("../assets/img/" + element.pDetails.pImage)} alt="product imagess" onClick={()=>{this.setState({currentProduct:element,active:true})}}></img>
   <div className="card-body">
   <div className="ml-1">
     <h5>{element.pDetails.pName}</h5> </div>
    <h5 > 
    &#8377; {element.pDetails.price}
    </h5>
    <h5> <span className="text-dark  text-strong bg-warning">&nbsp;{element.pRating}★&nbsp;</span></h5>
    </div>
    </div>
  </div>
})}

</div>
 </div>)}
    </React.Fragment>


  }
}

export default Product