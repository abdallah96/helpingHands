import React, { useEffect } from "react";
import './Payment.css';
import { Link, useLocation } from "react-router-dom";
import PaymentData from "./PaymentData.json"



function PaymentReceipt() {
    const location = useLocation();

//     email: ""
// month: "2021"
// phone: ""
// surname: ""
// username: ""
// year: "August"
// zip: ""status
    console.log(location);
    console.log(location.state.data.year);

    const year = location.state.data.year;
    const email = location.state.data.email;
   
    const zip = location.state.data.zip;
   
    const name = location.state.data.name;
   
    const month = location.state.data.month;
   
    const phone = location.state.data.phone;
    const username = location.state.data.username;
   

    return(
        <div className="container">
            <form id="form"> 
                <div className="posts">
                    
                
                    {PaymentData.map(post =>{
                        return(
                            <div key={post.id}>
                            <h2 className="title">{name}</h2> 
                            <div className="row">
                                <h3>Name: {name}</h3>
                            </div>
                            
                            <div className="row">
                                <h3>Email: {post.email}</h3>
                            </div>
                            <div className="row">
                                <h3>Service Name: {post.serviceName}</h3>
                            </div>
                            <div className="row">
                                <h3>Payment Type: {post.paymentType}</h3>
                            </div>
                            <div className="row">
                                <h3>Amount: {post.amountPaid}</h3>
                            </div>
                            </div>
                        )
                    })}    
                </div>

                <div className="input-container mt">
                    <label><h2>Appointment confirmed</h2></label>
                    {/* <h4>Enter card number</h4> */}
                    {/* <input
                        placeholder="Please enter your credit card number"/> */}
                </div>
  
              {/* <div className="input-container"> */}
                  {/* <h4>Card Holder</h4> */}
                  {/* <input  type="text" placeholder="Please enter your full name" required/> */}
              {/* </div> */}
            </form>
        </div>

    )
}

export default PaymentReceipt