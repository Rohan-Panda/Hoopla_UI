import React, { Component } from 'react';
import './App.css';
import axios from "axios"

class MyOrders extends Component {

  constructor(props) {
    super(props);
    this.state = {
        cartData:[],
        errorMessage:"",
        orderstrue:true
    };
  }

  mypurchase = () => {
    var total=0;
    return <div><table className="table bg-dark card-table table-hover mt-2 table-striped ">
     <thead className="bg-info">
      <tr className="white">
        <th><h5> OrderId </h5></th>
        <th><h5>Ordered Date</h5></th>
        <th><h5>Total cost</h5></th>
      </tr>
    </thead>
    <tbody className="table-secondary">

{this.state.cartData.map((data)=>{
      return data.myOrders.map((data1)=>{
        return <tr onClick={()=>{this.setState({orderstrue:false})}}>
        <td>{data1.orderId}</td>
        <td>{new Date(data1.orderDate).toLocaleDateString()}</td>
        {data1.order.forEach(element => {
         return total+= (element.pPrice*element.quantity)
        })}
        <td>{total}</td>
      </tr>
      }) 
    })}
    </tbody>
    </table>
    </div>
}


 orderedProducts = (data)=>{
   var total;
     return data.map((res,index)=>{
        return <tr key={index}>
        {console.log("in map of orderedproducts",res)}
        <td>{res.prodIds}</td>
        <td>{res.quantity}</td>
        <td>{res.pPrice}</td>
      </tr>

     })
 }
  componentDidMount() {
    this.fetchDetails()
  }
  fetchDetails = () => {
    const url = "http://localhost:2000/getOrders/"+localStorage.getItem("userid")
    let arr=[]
    axios.get(url)
      .then(response => {
        console.log("JINAL orders...", response.data)
        arr.push(response.data)
        this.setState({ cartData: arr, errorMessage: "" });
      }).catch(error => {
        console.log("|ERRORRRR")

        this.setState({ errorMessage: error.response.data.message, cartData: [] });
      });
  }

render() { 
  return <React.Fragment>
  {(this.state.orderstrue)?(<div className="card offset-md-4 col-md-5 bg-dark shadow-lg" style={{marginTop:"10%"}}><div><div className=" card-header text-center text-white font-weight-bold"><h4>Your Orders !!</h4></div>{this.mypurchase()}</div></div>):(
    <div className="col-md-6 offset-2">
    <div class="card offset-2 p-2 bg-dark shadow-lg"  style={{width: "18rem"}}>
    <div className="card-body">
     <table className="card-table table mt-5 pt-5 table-striped ">
    <thead className="bg-info">
      <tr>
        <th scope="col"><h5>Product Id</h5></th>
        <th scope="col"><h5>Quantity</h5></th>
        <th scope="col"><h5>Total cost</h5></th>
      </tr>
    </thead>
    <tbody className="table-dark ">
    {this.state.cartData.map((element,index)=> 
    {
      return element.myOrders.map((data)=>
      {
         return this.orderedProducts(data.order)
      })     
    })}
</tbody>
</table>
</div>
</div>
</div>
  )} 
  </React.Fragment>    
  }
}

export default MyOrders