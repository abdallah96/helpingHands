import * as React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./ListingCardComponent.css";
import { BsStarFill, BsStar, BsArrowRight, BsHouseFill,BsChatRightTextFill } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import { Button } from "bootstrap";

const ListingCardComponent = ({title, tag, age, price, LicNo,imgsrc}) => {
  return (
    <div>
  
      <div className="MainCard">
        <div>
        <Link to="/details/generaldetails" style={{ textDecoration: 'none' }}>
          <MDBCard className="card_comp shadow">
        
            <MDBCardBody className="CardImg">
            <img className="Card_compImg"
                src= {imgsrc}
                alt=""
              />
              <div className="cardContent">
                
            
              
                <MDBCardTitle className="title">Name: {title}</MDBCardTitle>
                <MDBCardText className="chatIcon"> 
                
                <Link to={"/details/chat"} style={{ textDecoration: 'none',color:"white" }}><BsChatRightTextFill/></Link>
                </MDBCardText>
                <MDBCardText className="age">{age}</MDBCardText>
                <MDBCardText className="licno">{LicNo}</MDBCardText>
                <MDBCardText className="tag">{tag}</MDBCardText>
             
              <MDBCardText className="price">{price}</MDBCardText>
              <MDBCardText className="star">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStar />
              </MDBCardText>
              </div>
            </MDBCardBody>
          
          </MDBCard>
          </Link>
        </div>
      </div>
     
    </div>
  );
};
export default ListingCardComponent;