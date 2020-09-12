import React, { Component } from 'react';
import axios from "axios";
import MyOrders from './MyOrders';
import Redirect from 'react-router-dom/Redirect'
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'



const url = "http://localhost:2000/cart1/"


class Checkout extends Component {
   constructor(props) {
      super(props);
      this.state = {
          cartProducts:this.props.cart,
          orders:[],
          getdata:false
      }
   }
   componentDidMount() {
      localStorage.setItem("cartItems", 0)
      this.updateCartDetails()
    }
    placeorder = ()=>{
      var newOrder={
         "orderId":0,
         "orderDate":new Date(),
         "order":[],
         "billAmount":0

      };
      var order=[];
      var billAmt = 0;
      var cart = localStorage.getItem("uCart");
      var uCartItem = JSON.parse(cart);
      console.log("placeorder", uCartItem, this.state.cartProducts);
      
      this.state.cartProducts.map((ele,i)=>{
         order[i]={"prodIds":ele.cartProdIds,
         "pName":ele.pName,
         "pPrice":ele.pPrice,
         "quantity":ele.pQuantity,
         "discount":ele.pDiscount
      }
      // billAmt=billAmt+ele.bill;
      console.log("price", ele.pPrice, ele.pDiscount, ele.pQuantity, typeof(ele.pQuantity), typeof(ele.pShippingCharges));
      
      // if(billAmt == 0){
         billAmt = billAmt + (ele.pPrice*ele.pQuantity-(ele.pPrice*ele.pDiscount*ele.pQuantity))+ele.pShippingCharges;
      // }
      console.log("billAmt inside map", billAmt, typeof(billAmt));
      
      })
      console.log("billAmt outside map", billAmt);

         newOrder["order"]=order;
         newOrder["billAmount"]=billAmt+(billAmt*0.17)
         console.log("newOrder", newOrder);
         
      return newOrder;
   }
   updateCartDetails = () => {
      var order1=this.placeorder()
      axios.put(url+localStorage.getItem("userid"),order1)
        .then(response => {
          console.log("fyour orders are..here  ", response.data.myOrders)
          this.setState({ orders:response.data.myOrders, getdata:true,errorMessage: "" });
          console.log("cartData in check out ", this.state.orders);
        }).catch(error => {
          console.log("Error in catch")
          this.setState({ orders: [] });
        });
    }
  
render(){
var ret=null
if(this.state.getdata)
{
   ret=<Redirect to={{pathname:'/checkout', state:{orderData:this.state.orders,cart:this.state.cartProducts}}}/>
}
return <React.Fragment>         
{ret}
</React.Fragment>   
   }
  
}

export default Checkout;