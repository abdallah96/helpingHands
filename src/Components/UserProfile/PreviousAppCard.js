import React, { useState, useEffect } from "react";
import "./UserProfile.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Button } from "bootstrap";
const PreviousAppCard = ({ Pname, Reviews, Status, Delete }) => {
  return (
    <div style={{textAlign: "center"}}>
      <div className="MainCard2_previous">
       
          <MDBCard className="card_comp_previous"> 
            <MDBCardBody>
              <img
                className="Card_compImg2_previous"
                src="https://sandbox-uploads.imgix.net/u/1647303789-de419e06ec8a765af0e9d11d52251f3c?w=500&h=500"
                alt=""
              />
              <div className="cardContent2_previous">
                <MDBCardText  className="headding">Appointment Details</MDBCardText>
                <MDBCardTitle className="title2_previous">Name: {Pname}</MDBCardTitle>
                <MDBCardText className="service2">Service used: Driving</MDBCardText>
                
                <MDBCardText  className="status2">Status:{Status}</MDBCardText>
                <MDBCardText className="review2">Write a review : <input type="text" placeholder="Write a review" style={{width:"40%", height:"10%"}}></input></MDBCardText>
                
               
              </div>
             
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    
  );
};
export default PreviousAppCard;
