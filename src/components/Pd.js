// import React, { Component } from 'react';
// import MyOrders from "./MyOrders"


// class ProductDetails extends Component {
//    state={
//       cart:false
//    }
//     specifications = () => {
//      var cat = this.props.product.pDetails.pCategory;
//      var sp1= this.props.product.pDetails.specification[cat]
//      if(cat=="Shoes")
//      {
//         return  <div>
//              <p> Color : {sp1["color"]}    &nbsp;&nbsp;&nbsp;   OuterMaterial: {sp1["outerMaterial"]}
//              &nbsp;&nbsp;&nbsp; IdealFor: {sp1["idealFor"]}  </p>  <p> SoleMaterial: {sp1["soleMaterial"]}
//              &nbsp;&nbsp;&nbsp;  warranty: {sp1["warranty"]}</p>
       
//         </div>
//      }
//      else if(cat=="Electronics")
//      {
//         return <div>
//             {console.log(sp1)}
//              <p> Color : {sp1["color"]}   &nbsp;&nbsp;&nbsp;  Os : {sp1["os"]} &nbsp;&nbsp;&nbsp; rearCamera : {sp1["rearCamera"]} </p>   
//              <p> Ram : {sp1["ram"]}    &nbsp;&nbsp;&nbsp;   ROM : {sp1["rom"]}  &nbsp;&nbsp;&nbsp;   FrontCamera : {sp1["frontCamera"]} </p>   
                
//         </div>
//      }
//      else if(cat=="Clothing")
//      {
//           return <div>
//              <p>Color : {sp1["color"]}   &nbsp;&nbsp;&nbsp;   Fabric : {sp1["fabric"]}</p>   
//              Ideal For : {sp1["idealFor"]}   &nbsp;&nbsp;&nbsp;  Warranty : {sp1[" warranty"]}
//         </div>
//      }else if(cat=="Furniture")
//      {
//         return <div>
//              <p>Color: {sp1["color"]}  &nbsp;&nbsp;&nbsp;     Size: {sp1["size"]}</p> 
//              Type: {sp1["type"]}    &nbsp;&nbsp;&nbsp;     Warranty :{sp1["warranty"]}
//         </div>
//      }

//     }
//   render() {
//     return <React.Fragment>
//          {this.state.cart?<MyOrders></MyOrders>: 
//          (<div className="pt-5 mt-5">
//          <div className="row  ml-1">
//           <span className="col-md-3 col-sm-3">
//    <img  className="card-img-top img-rounded img-responsive mt-2 " style={{ weidth:"350",height: "250px" }}  src={require("../assets/img/" + this.props.product.pDetails.pImage)} alt="product imagess"></img>
//          </span>
//          <div className="card card-body col-sm-2 col-md-4  col-lg-4 mt-2 offset-md-4 offset-lg-4" >
//          <h4 className="text-strong">{this.props.product.pDetails.pCategory} </h4>
//          <h5> {this.props.product.pDetails.pName}</h5>
//          <h5 className="mt-1">Seller  </h5>
//          <span>{this.props.product.pDetails.s_Id}</span>
//          <h4 className="mt-1">Description</h4>
//          <p>{this.props.product.pDetails.pDescription}</p>
//          <h5>Specification </h5>
//          {this.specifications()}
//          <h5>Rating :  <span className="bg-warning">&nbsp;{this.props.product.pRating}&nbsp;</span></h5>
//          <h5>Price</h5><span>{(((this.props.product.pDetails.price)*(this.props.product.pDetails.pDiscount))+150).toFixed(2)} Rs.</span>
//        <p style={{textDecoration:"line-through",color:"#808080"}}>{this.props.product.pDetails.price}</p>
//        <h5 className="text-warning">{this.props.product.pDetails.pDiscount*100}% Off + 150 Rs Shipping Charges</h5>
//        <h5>Availability</h5>
//        <span>{this.props.product.pAvailability}</span>
//        <button className="btn btn-primary" onClick={()=>{this.setState({cart:true})}}> ADD TO CART</button>&nbsp;&nbsp;&nbsp;
//           <button className="btn btn-warning">GoBack</button></div>
//           </div>
//           </div>
       
//          )}
//       </React.Fragment>
//   }
// }

// export default ProductDetails;
// *******************************
// import React, { Component } from 'react';
// import MyOrders from "./MyOrders";
// import Magnifier from "react-magnifier";
// import Product from "./Product";
// import CartDetails from "./CartDetails";
// import axios from "axios";
// import Redirect from 'react-router/Redirect';
// import LoginComponent from "./Login"
// const url = "http://localhost:2000/cartData/10001";



// // class ProductDetails extends Component {
// //    state={
// //       cart:false
// //    }
// class ProductDetails extends Component {
//    constructor(props) {
//       super(props);
//       this.state = {
//          cartData: {},
//          goBack: false,
//          successMessage: "",
//          errorMessage: "",
//          pCategory: "",
//          redt:false
//       }
//    }
   
//    addCart = () => {
//       if(!localStorage.getItem("login")){
//          this.setState({redt:true})
//       }else{
//       let cartData = {
//          cartProdIds : this.props.product.p_id,
//          pName : this.props.product.pDetails.pName,
//          pPrice : this.props.product.pDetails.price,
//          pQuantity : this.props.product.pDetails.pQuantity,
//          pAvailability : this.props.product.pAvailability,
//          pDiscount : this.props.product.pDetails.pDiscount,
//          pShippingCharges : this.props.product.pDetails.pShippingCharges
//       }

//       console.log("usercart", cartData);
//       this.setState({ successMessage: "", errorMessage: "", pCategory : this.props.product.pDetails.pCategory })
//       axios.post(url, cartData)
//         .then(response => {
//           console.log("cartData",response.data)
//           this.setState({ successMessage: response.data, errorMessage: "" });
//         }).catch(error => {
//           this.setState({  successMessage: "" });
//         })
//       }
//     };
//     specifications = () => {
//      var cat = this.props.product.pDetails.pCategory;
//      var sp1= this.props.product.pDetails.specification[cat]
//      if(cat=="Shoes")
//      {
//         return  <div>
//              <p> Color : {sp1["color"]}    &nbsp;&nbsp; Material: {sp1["outerMaterial"]}
//              &nbsp;&nbsp;&nbsp; IdealFor: {sp1["idealFor"]}  </p>  <p> SoleMaterial: {sp1["soleMaterial"]}
//              &nbsp;&nbsp;&nbsp;  warranty: {sp1[" warranty"]}</p>
       
//         </div>
//      }
//      else if(cat=="Electronics")
//      {
//         return <div>
//             {console.log(sp1)}
//              <p> Color : {sp1["color"]}   &nbsp;&nbsp;&nbsp;  Os : {sp1["os"]} &nbsp;&nbsp;&nbsp; rearCamera : {sp1["rearCamera"]} </p>   
//              <p> Ram : {sp1["ram"]}    &nbsp;&nbsp;&nbsp;   ROM : {sp1["rom"]}  &nbsp;&nbsp;&nbsp;   FrontCamera : {sp1["frontCamera"]} </p>   
                
//         </div>
//      }
//      else if(cat=="Clothing")
//      {
//           return <p>Color : {sp1["color"]}   &nbsp;&nbsp;&nbsp;   Fabric : {sp1["fabric"]} &nbsp;&nbsp;&nbsp;
//              Ideal For : {sp1["idealFor"]}   &nbsp;&nbsp;&nbsp;  Warranty : {sp1[" warranty"]}</p>   
        
//      }else if(cat=="Furniture")
//      {
//         return <div>
//              <p>Color: {sp1["color"]}  &nbsp;&nbsp;&nbsp;  Size: {sp1["size"]} &nbsp;&nbsp;
//              Type: {sp1["type"]}    &nbsp;&nbsp;&nbsp;     Warranty :{sp1["warranty"]}</p> 
//         </div>
//      }

//     }

//     displayCart=()=>{
//       return (
//          <React.Fragment>
//             <CartDetails pCategory = {this.state.pCategory}></CartDetails>
//          </React.Fragment>
//       )
//    }
    
//   render() {
//    if(this.state.goBack){
//       return <Product category={this.props.product.pDetails.pCategory}/>
//    } 
//    if(this.state.redt){
//       return <LoginComponent product={this.props.product}/>
//    }
//    if(this.state.successMessage===""){
//     return <React.Fragment>
//          {this.state.cart?<MyOrders></MyOrders>: 
//          (<div className="pt-5 mt-5">
//          <div className="row  ml-1">
//           <span className="col-md-3 col-sm-3 ">
//  <div className="mt-5 card shadow-lg" style={{marginLeft: "10%"}}>
//  <img  className="card-img-top p-2 img-rounded img-responsive " style={{ width:"400",height: "350px" }}  src={require("../assets/img/" + this.props.product.pDetails.pImage)} alt="product imagess"></img>
//     </div> 
//          </span>
//          <div className="card card-body col-sm-2 col-md-4 bg-dark text-light  border-primary col-lg-4 mt-2 offset-md-4 offset-lg-4 shadow-lg" >
//          <h4 className="text-strong">{this.props.product.pDetails.pCategory} </h4>
//          <h5> {this.props.product.pDetails.pName}</h5>
//          <div className="mt-1"> <span className="font-weight-bold">Seller :</span> {this.props.product.pDetails.s_Id}</div>
        
//          <div className="mt-1"> <span className=" font-weight-bold">Description :</span>{this.props.product.pDetails.pDescription}</div>
//          <div className="font-weight-bold">Specification </div>
//          {this.specifications()}
//          <div> <span className="font-weight-bold">Rating :</span> <span className="text-dark  text-strong bg-warning">&nbsp;{this.props.product.pRating}★&nbsp;</span></div>
//          <div><span className="font-weight-bold">Price :</span> <span>&#8377; {((this.props.product.pDetails.price)-((this.props.product.pDetails.price)*(this.props.product.pDetails.pDiscount))+150).toFixed(2)}&nbsp;&nbsp;
//          <span style={{textDecoration:"line-through",color:"#808080"}}> &#8377;  {this.props.product.pDetails.price}</span>
//          </span></div>
    
//        <h5 className="text-warning">{this.props.product.pDetails.pDiscount*100}% Off + 150 Rs Shipping Charges</h5>
//        <h5>Availability : &nbsp;
//        <span>{this.props.product.pAvailability}</span></h5>
//        {/* <button className="btn btn-primary" onClick={()=>{this.setState({cart:true})}}> ADD TO CART</button>&nbsp;&nbsp;&nbsp;
//           <button className="btn btn-warning">GoBack</button></div>
//           </div>
//           </div> */}
//            <button className="btn btn-primary" onClick={this.addCart}> ADD TO CART</button>&nbsp;&nbsp;&nbsp;
//           <button className="btn btn-warning" onClick={()=>{this.setState({goBack:true})}}>GoBack</button></div>
//           </div>
//           </div>
       
//          )}
//       </React.Fragment>}
//       else{
//          return this.displayCart();
//       }
//   }
// }

// export default ProductDetails;
// ***************************************************************************************************

import React, { Component } from 'react';
import MyOrders from "./MyOrders";
import Magnifier from "react-magnifier";
import Product from "./Product";
import CartDetails from "./CartDetails";
import axios from "axios";
import Redirect from 'react-router/Redirect';
import LoginComponent from "./Login"
import Carousel from 'react-bootstrap/Carousel'

const url = "http://localhost:2000/cartData/";



// class ProductDetails extends Component {
//    state={
//       cart:false
//    }
class PD1 extends Component {
   constructor(props) {
      super(props);
      this.state = {
         cartData: {},
         goBack: false,
         successMessage: "",
         errorMessage: "",
         pCategory: "",
         redt:false,
         quantity: 1
      }
   }
   
   addCart = () => {
      let ci = localStorage.getItem("cartItems")
      ci=ci+1
      localStorage.setItem("cartItems", ci)
      let cartData = {
         cartProdIds : this.props.location.state.product.p_id,
         pName : this.props.location.state.product.pDetails.pName,
         pPrice : this.props.location.state.product.pDetails.price,
         pQuantity : this.state.quantity,
         pAvailability : this.props.location.state.product.pAvailability,
         pDiscount : this.props.location.state.product.pDetails.pDiscount,
         pShippingCharges : this.props.location.state.product.pDetails.pShippingCharges
      }
      if(!localStorage.getItem("login")){
         this.setState({redt:true})
      }else{
         var p_id = this.props.location.state.product.p_id
         console.log("add cart pID", p_id);
         var quant = 0
         var cart = localStorage.getItem("uCart");
         var uCartItem = JSON.parse(cart);
         console.log("cartITEM", uCartItem);
         var flag=1;
         uCartItem.map((item, index) => {
            if(item.cartProdIds == p_id){
               flag=0;
               item.pQuantity = item.pQuantity + 1;
               quant = item.pQuantity
               uCartItem[index].pQuantity = quant;
               localStorage.setItem('uCart', JSON.stringify(uCartItem)) 
            }
         })
         if(flag){
            uCartItem.push(cartData)
            localStorage.setItem('uCart', JSON.stringify(uCartItem))
            console.log("new uCart", uCartItem);
         }
         
      console.log("usercart", cartData);
      this.setState({ successMessage: "", errorMessage: "", pCategory : this.props.location.state.product.pDetails.pCategory })
      axios.post(url+localStorage.getItem("userId"), cartData)
        .then(response => {
          console.log("cartData",response.data)
          this.setState({ successMessage: response.data, errorMessage: "" });
        }).catch(error => {
          this.setState({  successMessage: "" });
        })
      }
    };
    specifications = () => {
     var cat = this.props.location.state.product.pDetails.pCategory;
     var sp1= this.props.location.state.product.pDetails.specification[cat]
     if(cat=="Shoes")
     {
        return  <div>
             <p> Color : {sp1["color"]}    &nbsp;&nbsp; Material: {sp1["outerMaterial"]}
             &nbsp;&nbsp;&nbsp; IdealFor: {sp1["idealFor"]}  </p>  <p> SoleMaterial: {sp1["soleMaterial"]}
             &nbsp;&nbsp;&nbsp;  warranty: {sp1[" warranty"]}</p>
       
        </div>
     }
     else if(cat=="Electronics")
     {
        return <div>
            {console.log(sp1)}
             <p> Color : {sp1["color"]}   &nbsp;&nbsp;&nbsp;  Os : {sp1["os"]} &nbsp;&nbsp;&nbsp; rearCamera : {sp1["rearCamera"]} </p>   
             <p> Ram : {sp1["ram"]}    &nbsp;&nbsp;&nbsp;   ROM : {sp1["rom"]}  &nbsp;&nbsp;&nbsp;   FrontCamera : {sp1["frontCamera"]} </p>   
                
        </div>
     }
     else if(cat=="Clothing")
     {
          return <p>Color : {sp1["color"]}   &nbsp;&nbsp;&nbsp;   Fabric : {sp1["fabric"]} &nbsp;&nbsp;&nbsp;
             Ideal For : {sp1["idealFor"]}   &nbsp;&nbsp;&nbsp;  Warranty : {sp1[" warranty"]}</p>   
        
     }else if(cat=="Furniture")
     {
        return <div>
             <p>Color: {sp1["color"]}  &nbsp;&nbsp;&nbsp;  Size: {sp1["size"]} &nbsp;&nbsp;
             Type: {sp1["type"]}    &nbsp;&nbsp;&nbsp;     Warranty :{sp1["warranty"]}</p> 
        </div>
     }

    }

    displayCart=()=>{
      return (
         <React.Fragment>
            <CartDetails pCategory = {this.state.pCategory}></CartDetails>
         </React.Fragment>
      )
   }
    
  render() {
   if(this.state.goBack){
      return <Product category={this.props.location.state.product.pDetails.pCategory} from="pd"/>
      // return <Redirect to={{
      //    pathname: '/' + this.props.location.state.product.pDetails.pCategory,
      //    state: { product: this.props.location.state.product.pDetails.pCategory,ref:"yes"}
      // }}/>
   } 
   if(this.state.redt){
     
      return <LoginComponent product={this.props.location.state.product}/>
   }
   if(this.state.successMessage===""){
    return <React.Fragment>
         {this.state.cart?<MyOrders></MyOrders>: 
         (<div className="pt-5 mt-5">
         <div className="row  ml-1">
          <span className="col-md-3 col-sm-3 ">
 <div className="mt-5 card shadow-lg" style={{marginLeft: "10%"}}>
 <Carousel>
      <Carousel.Item><img  className="card-img-top p-2 img-rounded img-responsive " style={{ width:"400",height: "350px" }}  src={require("../assets/img/" + this.props.location.state.product.pDetails.pImage)} alt="product imagess"></img></Carousel.Item>
      <Carousel.Item><img  className="card-img-top p-2 img-rounded img-responsive " style={{ width:"400",height: "350px" }}  src={require("../assets/img/" + this.props.location.state.product.pDetails.pImage)} alt="product imagess"></img></Carousel.Item>
      <Carousel.Item><img  className="card-img-top p-2 img-rounded img-responsive " style={{ width:"400",height: "350px" }}  src={require("../assets/img/" + this.props.location.state.product.pDetails.pImage)} alt="product imagess"></img></Carousel.Item>
   </Carousel>
    </div> 
         </span>
         <div className="card card-body col-sm-2 col-md-4 bg-dark text-light  border-primary col-lg-4 mt-2 offset-md-4 offset-lg-4 shadow-lg" >
         <h4 className="text-strong">{this.props.location.state.product.pDetails.pCategory} </h4>
         <h5> {this.props.location.state.product.pDetails.pName}</h5>
         <div className="mt-1"> <span className="font-weight-bold">Seller :</span> {this.props.location.state.product.pDetails.s_Id}</div>
        
         <div className="mt-1"> <span className=" font-weight-bold">Description :</span>{this.props.location.state.product.pDetails.pDescription}</div>
         <div className="font-weight-bold">Specification </div>
         {this.specifications()}
         <div> <span className="font-weight-bold">Rating :</span> <span className="text-dark  text-strong bg-warning">&nbsp;{this.props.location.state.product.pRating}★&nbsp;</span></div>
         <div><span className="font-weight-bold">Price :</span> <span>&#8377; {((this.props.location.state.product.pDetails.price)-((this.props.location.state.product.pDetails.price)*(this.props.location.state.product.pDetails.pDiscount))).toFixed(2)}&nbsp;&nbsp;
         <span style={{textDecoration:"line-through",color:"#808080"}}> &#8377;  {this.props.location.state.product.pDetails.price}</span>
         </span></div>
    
       <h5 className="text-warning">{this.props.location.state.product.pDetails.pDiscount*100}% Off + 150 Rs Shipping Charges</h5>
       <h5>Availability : &nbsp;
       <span>{this.props.location.state.product.pAvailability}</span></h5>
       {/* <button className="btn btn-primary" onClick={()=>{this.setState({cart:true})}}> ADD TO CART</button>&nbsp;&nbsp;&nbsp;
          <button className="btn btn-warning">GoBack</button></div>
          </div>
          </div> */}
           <button className="btn btn-primary" onClick={this.addCart}> ADD TO CART</button>&nbsp;&nbsp;&nbsp;
          <button className="btn btn-warning" onClick={()=>{this.setState({goBack:true})}}>GoBack</button></div>
          </div>
          </div>
       
         )}
      </React.Fragment>}
      else{
         return this.displayCart();
      }
  }
}

export default PD1;