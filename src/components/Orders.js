import React, { Component } from 'react';
import axios from "axios";
import MyOrders from './MyOrders';
import Redirect from 'react-router-dom/Redirect'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
const url = "http://localhost:2000/uAvailability"
class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      selectedOrder: {},
      successMsg: "",
      redt:false
    }
  }

  componentDidMount() {
    this.updateAvailability()
  }
  updateAvailability = () => {
    console.log(this.props.location.state.cart)
    console.log("availability that should be updated")
    axios.put(url, this.props.location.state.cart)
      .then(response => {
        console.log("updatation of newly cart data", response.data)
        this.setState({ successMsg: response.data, errorMessage: "" });
        console.log("availability in check out ", this.state.successMsg);
      }).catch(error => {
        console.log("Error in catch")
        this.setState({ successMsg: "" });
      });
  }
  products = () => {
    return <CardDeck>
      {this.state.selectedOrder.order.map((data, i) => {
        return <Card className="bg-info col-md-4">
          <Card.Body>
            <Card.Title>{data.pName}</Card.Title>
            <div className="text-light font-weight-bold"><span className="text-dark font-weight-bold">ProdId :&nbsp;&nbsp;</span>{data.prodIds}</div>
            <div className="text-light font-weight-bold"><span className="text-dark font-weight-bold">Quantity : &nbsp;&nbsp;</span>{data.quantity}</div>
            <div className="text-light font-weight-bold"><span className="text-dark font-weight-bold">Product Price :&nbsp;&nbsp;</span>{data.pPrice}</div>
            <div className="text-light font-weight-bold"><span className="text-dark font-weight-bold">discount :&nbsp;&nbsp;</span>{data.discount * 100}%</div>
            <div className="text-light font-weight-bold">
              <span className="text-dark font-weight-bold">
                Amount :&nbsp;&nbsp;</span>
              {(data.quantity * data.pPrice) - ((data.quantity * data.pPrice) * data.discount).toFixed(2)}&#8377;<div className="text-danger">Excluding all Taxes</div></div>
          </Card.Body>
        </Card>
      })}
    </CardDeck>
  }

  checkstatus = (date) => {

    var time = new Date().getTime() - new Date(date).getTime();
    var diff = time / (1000 * 3600 * 24)
    console.log(diff)
    if (diff >= 0 && diff < 2) {
      return "placed"
    }
    else if (diff >= 2 && diff < 5) {
      return "dispatched"
    }
    else if (diff >= 5 && diff < 10) {
      return "shipped"
    }
    else {
      return "recieved"
    }
  }
  // calculate=(data)=>{
  //   var  bill=Number(0);
  //   console.log("bill data", data.order)
  //         return data.order.map((res)=>{
  //           console.log("values comming for billing",res.quantity,res.pPrice)
  //             return bill=(Number(bill) + (Number(res.quantity) * Number(res.pPrice)))
  //         })
  // }
  render() {
    var data = 0;
    var st = "";
    var redt=null
    //  const sortedActivities = activities.sort((a, b) => b.date - a.date)
    const myorders = this.props.location.state.orderData.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate))
    if(this.state.redt){
      redt=<Redirect to="/"/>
    }
    return <React.Fragment>
      {redt}
      <div className="mt-5 pt-5">
        <h1 className="mt-5  pt-5"></h1></div>
      <div className="ml-5 mr-5">
        {console.log("props data is here...", this.props.location.state.orderData)}
        <div>
          {(!this.state.status) ?
            <Table className="table table-striped table-hover table-center table-info">
              <Thead className="bg-info">
                <Tr>
                  <Th>Sr.Id</Th>
                  <Th>OrderId</Th>
                  <Th>OrderDate</Th>
                  <Th>Total Amount</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {myorders.map((element, id) => (id % 2) == 0 ? <Tr key={element.orderId} value={element.orderId} onClick={() => { this.setState({ status: true, selectedOrder: element }) }}>
                  <Td>{id + 1}</Td>
                  <Td>{element.orderId}</Td>
                  <Td>{new Date(element.orderDate).toLocaleString()}</Td>
                  <Td>{Number(element.billAmount).toFixed(2)}&nbsp;&#8377;</Td>
                  <Td>{st = this.checkstatus(element.orderDate)}</Td>
                </Tr> : (<Tr className="bg-light" key={element.orderId} value={element.orderId} onClick={() => { this.setState({ status: true, selectedOrder: element }) }}>
                  <Td>
                    {id + 1}
                  </Td>
                  <Td>{element.orderId}</Td>
                  <Td>{new Date(element.orderDate).toLocaleString()}</Td>
                  <Td>{Number(element.billAmount).toFixed(2)}&nbsp;&#8377;</Td>
                  <Td>{st = this.checkstatus(element.orderDate)}</Td>
                </Tr>)

                )}
              </Tbody>
            </Table> : this.products()}
        </div>
      </div>
      <div className="justify-content-center">
      <button className="btn btn-success" onClick={() => this.setState({ redt: true })}>Go Back</button></div>
    </React.Fragment>
  }

}

export default Orders;