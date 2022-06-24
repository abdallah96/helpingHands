import * as React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import "./Listing.css";

import Data from "./data.json";
import { NativeSelect, FormControl } from "@material-ui/core";
import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";

import { BsStarFill, BsStar, BsArrowRight, BsHouseFill } from "react-icons/bs";
import { useState } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { Link } from "react-router-dom";
import Widget from "../FilterBarComponent/widget";

import ListingCardComponent from "../ListingCardComponent/ListingCardComponent";
import UserProfileComponent from "../UserProfile/UserProfileComponent";
import Header from "../Header/Header";

import { useNavigate } from "react-router-dom";
import { FaHandshake } from "react-icons/fa";
import { MdOutlineAccountCircle, MdOutlineHome,MdLogout } from "react-icons/md";
import { useCookies,cookies } from 'react-cookie';
// import '../Header.css'


const Listing = () => {
  const [cookies, setCookie] = useCookies(['user']);
    const navigate = useNavigate();
    // console.log(cookies.data)
    const data = document.cookie.replace(/(?:(?:^|.*;\s*)data\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    console.log("datainhome:"+data)
    const userProfdirection=()=>{
    
        if ( data!= "null") {
           
            navigate("/UserProfile", { state: { data: data } });
          } else {
            navigate("/UserProfile", { state: null });
            
          }
        };
    const homebtn=()=>{
      if ( data!= "null") {
            
          navigate("/Home", { state: { data: data } });
        } else {
          navigate("/Home", { state: null });
          
        }
      }
        const logout=()=>{
            console.log("logout button")
            setCookie('data',null, { path: '/' });
            console.log("cookieesssslogout:"+ data)
            navigate("/Home");

        }
  return (
    <div >
       <div className="container_listing">

     
<div className="CardPosition_listing">
  {
    <ListingCardComponent
      title="Anna Thomas"
      tag="Working as a baby sitter since 2 years and can manage efficiently"
      age="Los Angeles, 19 years old"
      price="Price : 15$/hour"
      LicNo="AQ5468955564"
      imgsrc="https://sandbox-uploads.imgix.net/u/1647303869-d1052a0881eb8e5c00466cf534d73e87?w=700&h=500"
    />
  }

  {
    <ListingCardComponent
      title="Angela Stark"
      tag="Working as a baby sitter since 8 years and love taking care of them"
      age="Los Angeles, 28 years old"
      price="Price : 12$/hour"
      LicNo="AQ5468955564"
      imgsrc="https://sandbox-uploads.imgix.net/u/1647303268-be14108293b689cfde0b5e058b9705c5?w=700&h=500"
    />
  }
  {
    <ListingCardComponent
      title="Martina Jackson"
      tag="Working as a baby sitter since 10 years and can manage efficiently"
      age="Los Angeles, 36 years old"
      price="Price : 10$/hour"
      LicNo="AQ5468955564"
      imgsrc="https://sandbox-uploads.imgix.net/u/1647303591-e9410b233d23b2d5b554273c601d8ef8?w=500&h=500"
    />
  }

  {/* {<BsHouseFill className="houseIcon" />} */}
</div>
<Widget />
      
      <div className="Header_div2 sticky">
            <div className="image_div2">
                <FaHandshake className='Handshake_icon2' />
            </div>

            <div className="Heading_div2" style={{top:0}}>
            <h1 className="headingheader2"> HelpingHands</h1>
           </div>
      <div className="icons_header2">

            <div className="Login_div2">
                <button id="btn_profile" accept='image' name="file" className='profilebtn2' onClick={homebtn} >
                    
                </button>
                <MdOutlineHome className='home_icon'/>  
            </div>

            <div className="Profile_div2">
              <button id="btn_profile" accept='image' name="file" className='profilebtn_acc2' onClick={userProfdirection} > 
                
              </button>
              <MdOutlineAccountCircle className='account_icon2' />  
            </div>

            <div className="Logout_div2">
              <button id="btn_profile" accept='image' name="file" className='logout2' onClick={logout} > 
             
              </button>
              <MdLogout className='logout_icon2'/>
            </div>
      </div>


        </div>
     
     
     
      <div className="results" >
        <h3 style={{ marginTop: "10%" }} >Results for your search</h3>
      </div>
    </div>
    
    </div>
  );
};

export default Listing;
