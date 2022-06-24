import React, { useState ,useEffect } from "react";
import { Form, FormLabel } from "react-bootstrap";
import './Payment.css';
import PaymentData from "./PaymentData.json";
import PaymentReceipt from "./PaymentReceipt";
import {Link, Navigate, Route, Router, useNavigate} from "react-router-dom"
import Detailssidebar from "../Detailssidebarcomponent/Detailssidebar.js";
import Header from "../Header/Header";
// import * as fs from 'fs'
function Payment()  {

    const [inputs, setInputs] = useState({});
    
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();

      var obj ={
        username: document.getElementById("username").value,
        surname: document.getElementById("surname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        zip: document.getElementById("zip").value,
        year: document.getElementById("year").value,
        month: document.getElementById("month").value,
        price: document.getElementById("price").value,
        cash: document.getElementById("cash").value,
        
      };

      navigate('/PaymentReceipt', { state: {data: obj}});
   
    }
    
    return (
      <div>

        
      
            <div className="center_content">
                <div className="detailssidebar_payment">
                <Detailssidebar />
                </div>
            <div className="container_Payment">
    
      
                    <form id="form" onSubmit={handleSubmit}>
                    <div>
                        <label><h2>Billing Details</h2></label>
                    </div>
                    <div className="input-container">
                        <label className="input-group">First name:
                        <input id="username" type="text" name="username" value={inputs.username || ""} onChange={handleChange}
                        />
                        </label>
                    </div>

                    <div className="input-container">
                        <label className="input-group">Last name:
                        <input id="surname" type="text" name="surname" value={inputs.surname || ""} onChange={handleChange}
                        />
                        </label>
                    </div>

                    <div className="input-container">
                        <label className="input-group">Email:
                        <input id="email" type="text" name="email" value={inputs.email || ""} onChange={handleChange}
                        />
                        </label>
                    </div>

                    <label className="input-group">Phone:
                        <input id="phone" type="text" name="phone" value={inputs.phone || ""} onChange={handleChange}
                        />
                    </label>

                    <label className="input-group">Zip code:
                        <input id="zip" type="text" name="zip" onChange={handleChange}
                        />
                    </label>
                    
                    <label className="input-group">Amount to be paid:
                        <input id="price" type="text" name="price" onChange={handleChange}
                        />
                    </label>

                        <h4 className="method" style={{color:"white"}}>Payment Method</h4>
                <div className="payment_method">
                    <h4 className="input-group2">Card Number:
                        <input id="card" type="text" name="card" onChange={handleChange}
                        />
                    </h4>
                    <div className="input-group2">
                                <h4 className="input-group2">CVV</h4>
                            <input name="cvv" type="password" placeholder="CVV" />
                            </div>
                    <div>
                            <div className="input-group2">
                            <h4 className="input-group2">Month</h4>
                                <select id="year" name="year"  onChange={handleChange}>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    4<option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </div>
                            <div className="input-group2">
                                <h4 className="input-group2">Year</h4>
                                <select id="month" name="month"  onChange={handleChange}>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                </select>
                            </div>
                           
                        </div>

                        </div>
                           
                        
                        <div className="radio_payment">
                                
                                    
                                    <input type="radio" style={{marginLeft:"-39%",marginTop:"5%"}} name="cash" id="cash" value={inputs.cash}/><h5 style={{marginLeft:"-42%",marginTop:"4%"}}>Cash</h5>
                                
                               
                            </div>
                        <button className="button_submit" type="submit" onClick={handleSubmit}>Confirm</button>
                        
                </form>
                
           </div>
        
        </div>
        <div style={{marginTop:"-41%"}}> <Header/></div>
       
      </div>

    );
    
}
    export default Payment; 