import * as React from "react";
import { useEffect, useState } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";

import { Form, FormGroup, FormControl } from 'react-bootstrap';
import './MyDetails.css'
import Detailssidebar from "../Detailssidebarcomponent/Detailssidebar";

const MyDetails = () => {
    const [fname, setfname] = useState(" ");
    const [lname, setlname] = useState(" ");
    const [email, setemail] = useState(" ");
    const [phone, setphone] = useState(" ");
    const [address, setaddress] = useState(" ");

    const handleInputChange=()=>{

    }

    return (
       

<div>
<div>
        
    </div>   
            <div className="container ">
                
                    <h2 className="text-center">Edit Profile</h2>
                    <form >
                        <FormGroup className="" >
                            <Form.Label>First Name</Form.Label>
                            <FormControl 
                                type="text"
                                placeholder= "Anna"
                                name="Fname"
                                 onChange={(e) => {
                                    setfname(e.target.value);}}
                            />
                            <Form.Control.Feedback />
                        </FormGroup>
                        <br />
                        <FormGroup className="" >
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder= "Thomas"
                                name="Lname"
                                onChange={(e) => {
                                    setlname(e.target.value);}}
                            />
                            <Form.Control.Feedback />
                        </FormGroup>
                        <br />
                        <FormGroup className="" >
                            <Form.Label>Email</Form.Label>
                            <FormControl
                                type="email"
                                placeholder= "annathomas23@gmail.com"
                                name="email"
                                onChange={(e) => {
                                    setemail(e.target.value);}}
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup className="" >
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder= "+49 15758962254"
                                name="phone"
                                onChange={(e) => {
                                    setphone(e.target.value);}}
                            />
                            <Form.Control.Feedback />
                        </FormGroup>
                        <FormGroup className="" >
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder= "Mannheim"
                                name="address"
                                onChange={(e) => {
                                    setaddress(e.target.value);}}
                            />
                            <Form.Control.Feedback />
                            
                        </FormGroup>
                        
                    </form>
                    <div className="text-center">
                        <button className="btn btn-success btnColor ">Submit</button>
                    </div>
                </div>
                </div>
        
    )

}
export default MyDetails;