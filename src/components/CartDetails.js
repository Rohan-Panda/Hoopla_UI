import React, { Component } from 'react';
import axios from "axios";
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import Grid from '@material-ui/core/Grid';
import CartCard from "./CartDetails";
import CheckoutCard from "./CheckoutCard";
import ProductDetails from "./productDetails";
import Product from "./Product"
import Checkout from "./Checkout"
import store from "./Local"
import Redirect from 'react-router/Redirect';


const url = "http://localhost:2000/cart/"


class CartDetails extends Component {
   constructor(props) {
      super(props);
      this.state = {
         cartData: [],
         goBack: false,
         successMessage: "",
         errorMessage: "",
         successMsg: "",
         errorMsg: "",
         currentCart: {},
         p_id: "",
         active:false,
         price:0,
         delcurrentId: "",
         goBack: false,
         check:false,
         currentProduct: {},
         val:0,
         quantity:1
      }
   }

   componentDidMount() {
      this.fetchCartDetails()
    }
    
    handle= (data,quant,index) => {
      console.log("handel data", data);
      data.pQuantity=quant.value;
      var arr=this.state.cartData;
      arr[index]=data;
      this.setState({price:0,cartData:arr})
      var bill = 0;
      this.state.cartData.map((ele)=>{
         bill=bill + (ele.pQuantity*ele.pPrice);
         ele.bill=(((ele.pQuantity*ele.pPrice)-((ele.pQuantity*ele.pPrice)*ele.pDiscount))+ele.pShippingCharges);
      })
      let productQuantity = {
         p_Id : data.cartProdIds,
         quantity: data.pQuantity,
         index: index
      }
      console.log("handle quantity", productQuantity);
      
      console.log("handle", bill, arr);
      this.setState({price:bill})
      var cart = localStorage.getItem("uCart");
      var uCartItem = JSON.parse(cart);
      uCartItem[index].pQuantity = quant.value;
      localStorage.setItem("uCart", JSON.stringify(uCartItem))

   }
   fetchCartDetails = () => {
      // console.log("val", val);
      
      console.log("userId url", url+localStorage.getItem("userid"));
      
      axios.get(url+localStorage.getItem("userid"))
        .then(response => {
          console.log("fetchCartDetails", response.data)
          var data1=response.data;
          data1.map((data)=>{
            data.quantity=Number(1);
            data.bill=Number(0);
          })
         
          this.setState({ cartData: data1, errorMessage: "" });
          console.log("cartData", this.state.cartData);
        }).catch(error => {
          console.log("Error")
          this.setState({ cartData: [] });
        });

      
    }

    deleteCartProducts = () => {

      console.log("p_id", this.state.currentProduct);  
      let u = this.state.currentProduct.cartProdIds;
      var cart = localStorage.getItem("uCart");
         var uCartItem = JSON.parse(cart);
         console.log("cartITEM", uCartItem);
         var updatedCart = [];
         var flag=0;
         uCartItem.map((item, index) => {
            if(item.cartProdIds != u){
               updatedCart.push(item)
            }
         })
         localStorage.setItem('uCart', JSON.stringify(updatedCart)) 
         console.log("updatedCart", updatedCart);
         
      console.log("u", url+localStorage.getItem("userid")+u);
      axios.put(url+localStorage.getItem("userid")+"/" + u)
      .then(response => {
         this.setState({ successMsg: response.data.message, currentProduct: null});
         console.log("updated cartData", this.state.cartData);     
         console.log("successMsg", this.state.successMsg);         

       }).catch(error => {
         console.log("Error")
         this.setState({ errorMsg: "error delete axios", currentProduct: null});
       });

       this.fetchCartDetails()

   }

   render(){
      var ret=null
      var cart = localStorage.getItem("uCart");
      var uCartItem = JSON.parse(cart);
      console.log("currentProduct", this.state.currentProduct);
      if(this.state.goBack){
         return <Redirect to="/"/>
      }
      if(this.state.currentProduct && this.state.active){
         this.deleteCartProducts();
      }
      if(this.state.check)
         {
            let updatedCart = []
            uCartItem.map((item, index) => {
               if(item.cartProdIds == 0){
                  updatedCart.push(item)
               }
            })
            localStorage.setItem("uCart", JSON.stringify(updatedCart))
            if(uCartItem.length == 0){
               alert("There must be at least 1 product to checkout.")         
            }
            else{
               return <Checkout cart={uCartItem}></Checkout>
            }
            
         }
      console.log("rcart", this.state.cartData);   
      if(!localStorage.getItem("login")){
         ret=<Redirect to="/"/>
   }     
     
      return (
         <React.Fragment>
                
                     <div className="pt-5 ml-5 mt-5">
                        <h4>You have {uCartItem.length} product in your cart</h4>
                        {localStorage.setItem("cartItems",uCartItem.length)}
                        <div className="float-right">
                        
                        <div>
                           <div name="cartTotal" className="card col-md-8 bg-card">
                              <div className="card-body">
                              <CheckoutCard  element ={uCartItem}/>
                              </div>
                              <div className="card-footer">
                              <button name="checkoutButton" className="btn btn-primary btn-block" onClick={()=>{this.setState({check:true})}}>Checkout</button>
                              <button className="btn btn-block btn-warning" onClick={()=>{this.setState({goBack:true})}}>GoBack</button>

                              </div>
                           </div>
                        </div>

                        </div>
                        <div className="mt-5 pt-5">
               <div className="mt-5 mb-2 card-deck col-md-6">
                     <div className="card ">
                     <table className="card-table">
                     <thead>
                        <tr>
                           <th className="p-2 text-center">Sr.No</th>
                           <th className="p-2 text-center" >ProdName</th>
                           <th className="p-2 text-center">Quantity </th>
                           <th className="p-2 text-center"> Amount </th>
                           <th className="p-2 text-center"> Availability</th>
                           <th className="p-2 text-center">Remove </th>
                        </tr>
                     </thead>
                     <tbody>
                     {uCartItem.map((element, i) => {
                        return (
                        <tr  key={i}>
                        <td className="text-center">{i+1}</td>
                        <td className="text-center"><a href="#" > {element.pName}</a>
                        </td>
                        <td className="text-center">
                           <input type="number" className="form form-control ml-3 shadow col-md-8" min="1" max={Number(element.pAvailability)} value={uCartItem[i].pQuantity} onChange={(e)=>{this.handle(element,e.target,i)}}></input> 
                        </td>
                        <td className="text-center">
                        &#8377; {(element.pPrice*element.pQuantity-(element.pPrice*element.pDiscount*element.pQuantity))+element.pShippingCharges}
                        </td>
                        <td className="text-center">
                        {element.pAvailability}
                        </td>
                        <td className="text-center">
                        <Grid item xs={8}>
                           <DeleteRoundedIcon onClick={()=>{this.setState({currentProduct:element, active:true})}} /></Grid>
                        </td>
                        </tr>
                        )
                     })
                     }
                  </tbody>
                  </table>
                  </div>
                  </div>
                     </div>
                  </div>
         </React.Fragment>
      )
   }
  
}

export default CartDetails;