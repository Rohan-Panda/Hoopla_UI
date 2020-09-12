// import React, { Component } from 'react';

// import './App.css';


// import axios from "axios"

// // import { element } from 'prop-types';

// class SearchProduct extends Component {


//     constructor(props) {

//         super(props);

//         this.state = {

//             category: this.props.match.params.key,
            

//             cardsData: [],

//             errorMessage: ""

//         };

//     }


//     componentDidMount() {

//         this.fetchDetails()

//     }

//     fetchDetails = () => {

//         const url = "http://localhost:2000/getProducts1/"

//         axios.get(url + this.state.category)

//             .then(response => {


//                 this.setState({ cardsData: response.data, errorMessage: "" });

//             }).catch(error => {

//                 console.log("Error")


//                 this.setState({ errorMessage: error.response.data.message, cardsData: [] });

//             });

//     }



//     render() {

//         return <React.Fragment>

//             <br/><br/><br/><br/><br/>
//             <div className="card-deck">

//                 {this.state.cardsData.map((element, index) => {

//                     return <div className="card ">

//                         <img className="card-img-top" style={{ height: "250px" }} src={require("../assets/img/" + element.pDetails.pImage)} alt="productimagess"></img>

//                         <div className="card-body">

//                             <div className=" mr-1">

//                                 <button className="btn btn-small btn-warning">{element.pRating}</button>

//                             </div>

//                         </div>

//                         <div className="ml-1 text-dark">

//                             {element.pDetails.pName}</div>

//                         <div className="mr-1 text-dark">

//                             {element.pDetails.price}

//                         </div>

//                     </div>


//                 })}



//             </div>

//         </React.Fragment>



//     }

// }
// *******************************************************
// import React, { Component } from 'react';
// import './App.css';
// import ProductDetails from "./productDetails"
// import axios from "axios"
// import { element } from 'prop-types';



// class SearchProduct extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//     category: this.props.match.params.key,
//       cardsData: [],
//       errorMessage: "",
//       active:false,
//       currentProduct:{}
//     };

//   }

//   componentDidMount() {
//     this.fetchDetails()
//   }
//   fetchDetails = () => {
//     const url = "http://localhost:2000/getProducts1/"
//     axios.get(url + this.state.category)
//       .then(response => {
//         console.log( response.data)
//         this.setState({ cardsData: response.data, errorMessage: "" });
//       }).catch(error => {
//         console.log("Error")

//         this.setState({ errorMessage: error.response.data.message, cardsData: [] });
//       });
//   }

//   render() {
//   return <React.Fragment>
//     {this.state.active?
//     <ProductDetails product={this.state.currentProduct}></ProductDetails>:
//  ( <div className="mt-5 pt-5 card-deck">
// {this.state.cardsData.map((element, index) => {
//   return <div className="col-md-3  col-sm-1"> 
//   <div className="card  mb-5" onClick={()=>{this.setState({currentProduct:element,active:true})}}>
//     <img className="card-img-top img-rounded" style={{ height: "250px" }} src={require("../assets/img/" + element.pDetails.pImage)} alt="product imagess" onClick={()=>{this.setState({currentProduct:element,active:true})}}></img>
//     <div className="card-body">
//       <div className=" mr-1">
//         <button className="btn btn-small btn-warning">{element.pRating}</button>
//       </div>
//     </div>
//     <div className="ml-1">
//       {element.pDetails.pName}</div>
//     <div className="mr-1">
//       {element.pDetails.price}
//     </div>
//     </div>
//   </div>
// })}


//  </div>)}
//     </React.Fragment>


//   }
// }
// export default SearchProduct
// *****************************************
import React, { Component } from 'react';
import './App.css';
import ProductDetails from "./productDetails"
import axios from "axios"
import { element } from 'prop-types';
import Redirect from "react-router-dom/Redirect";




class SearchProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
    category: this.props.match.params.key,
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
    var cat =this.state.category;
    const url = "http://localhost:2000/getProducts1/"
    axios.get(url+cat)
      .then(response => {
        console.log( response.data)
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
    <Redirect to={{
      pathname: '/pd',
      state: { product: this.state.currentProduct}
  }}/>:
 ( <div className="mt-5 pt-5 card-deck">
{this.state.cardsData.map((element, index) => {
  return <div className="col-md-3  col-sm-1"> 
  <div className="card  mb-5" onClick={()=>{this.setState({currentProduct:element,active:true})}}>
    <img className="card-img-top img-rounded" style={{ height: "250px" }} src={require("../assets/img/" + element.pDetails.pImage)} alt="product imagess" onClick={()=>{this.setState({currentProduct:element,active:true})}}></img>
    <div className="card-body">
      <div className=" mr-1">
        <button className="btn btn-small btn-warning">{element.pRating}</button>
      </div>
    </div>
    <div className="ml-1">
      {element.pDetails.pName}</div>
    <div className="mr-1">
      {element.pDetails.price}
    </div>
    </div>
  </div>
})}


 </div>)}
    </React.Fragment>


  }
}
export default SearchProduct