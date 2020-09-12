import React from "react";
import Redirect from "react-router-dom/Redirect";

export default function CheckoutCard(props){
    var sum = 0;
    var cartTotal = props.element.map((e)=>{
        console.log("Inside checkout cart", e);
        console.log("typeOF", typeof(e.pPrice));
        
            let price = e.pPrice*e.pQuantity;
            let discount = e.pDiscount;
            let shippingCharges = e.pShippingCharges;
            sum += (price-(price*discount))+shippingCharges;
            console.log("sum", sum, typeof(sum));
            
            return sum

            
            // sum+=((Number(e.pPrice)-(Number(e.pPrice)*Number(e.pDiscount)))+Number(e.pShippingCharges).toFixed(2))
        
    })
    return(
        <React.Fragment>
            <div className="text-custom">Cart total (MRP):</div>
            <h6 className="ml-4 text-custom">&#8377; {(sum).toFixed(2)}</h6>
            <div className="text-custom">Total Tax (17% by default):</div>  
            <h6 className="ml-4 text-custom">&#8377; {(sum*0.17).toFixed(2)}</h6>
            <div className="text-custom">Total payable</div>
            <h6 className="ml-4 text-custom">{props.bill}</h6>
            <h6 className="ml-4 text-custom">&#8377; {(sum+sum*0.17).toFixed(2)}</h6>
            
        </React.Fragment>
    )
}