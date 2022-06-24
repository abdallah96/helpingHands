import React, { useState } from "react";
// import data from './data';
import data from "../../data";
import Filter from "../Filter/Filter";
// import 'react-chat-elements/dist/main.css';
import { Popup } from "react-chat-elements";
import { NavLink, Route, Routes } from "react-router-dom";
import { useNavigate,useLocation } from "react-router-dom";
import Listing from "../Listing/Listing";
import UserProfile from "../UserProfile/UserProfile";
import Login from "../Login/Login"
import Header from "../Header/Header";
// import { Switch } from "@material-ui/core";
import './Home.css'

const Home2 = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");

  const searchText = (event) => {
    setFilter(event.target.value);
  };
  let dataSearch = data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  
  const buttonPress = () => {
   navigate('/Listing')
  };
  const loginNav = () => {
    navigate('/Login')
   };

  
  const toUserprof = () => {
   
    console.log(location);
    console.log(location.state);
    //console.log(location.state.data);
    if(location.state == null){
      console.log("inside null")
      navigate('/UserProfile',{ state: null })
    }
    else {
      navigate('/UserProfile',{ state: { data: location.state.data } })
    }
   
   };
  
  
  return (
    <div>
      <Header/>
      <button
                        type="button"
                        className="btn btn-success" onClick={toUserprof}>Profile</button>  
                        <button
                        type="button"
                        className="btn btn-success" onClick={loginNav}>Login</button>  
                        
      <section className="py-4 container_home">
        <div className="row justify-content-center">
          <div className="col-12 mb-5">
            <div className="mb-3 col-4 mx-auto text-center">
              <label className="form-label h4">Helping Hands</label>
              <input
                type="text"
                placeholder="Search for services"
                className="form-control"
                value={filter}
                onChange={searchText.bind(this)}
              />
            </div>
            <Filter />
          </div>
          {/* Print data using map method */}
          {dataSearch.map((item, index) => {
            return (
              <div key={index} className="col-11 col-sm6 col-lg-3 mx-0 mb-4">
                <div className="card p-0 overflow-hidden h-100 shadow">
                  <img src={item.img} className="card-body" />
                  <div className="card-body">
                    <h5 className="card-title"> {item.title}</h5>

                    
                      <button
                        type="button"
                        className="btn btn-success" onClick={buttonPress}>{item.desc}</button>
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Popup
        show=""
        header="Lorem ipsum dolor sit amet."
        headerButtons={[
          {
            type: "transparent",
            color: "black",
            text: "close",
            onClick: () => {
              this.setState({ show: false });
            },
          },
        ]}
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem animi veniam voluptas eius!"
        footerButtons={[
          {
            color: "white",
            backgroundColor: "#ff5e3e",
            text: "Vazgeç",
          },
          {
            color: "white",
            backgroundColor: "lightgreen",
            text: "Tamam",
          },
        ]}
      />
    </div>
  );
};
export default Home2;