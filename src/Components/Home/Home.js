import React, { useState } from "react";
// import data from './data';
import data from "../../data";
import Filter from "../Filter/Filter";
import Slider from "./Slider";
import "./Home.css";
import { FaHandshake } from "react-icons/fa";
import { MdOutlineAccountCircle, MdOutlineHome } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useNavigate,useLocation } from "react-router-dom";
import Listing from "../Listing/Listing";

import Login from "../Login/Login"
import Header from "../Header/Header";
// import { Switch } from "@material-ui/core";
import './Home.css'
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const toUserprof = () => {
      const data = document.cookie.replace(/(?:(?:^|.*;\s*)data\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        console.log(location);
        console.log(location.state);
        console.log("datatdtadta"+data)

        
        if ( data == "null" || location.state == null ) {
          console.log("inside null");
          navigate("/UserProfile", { state: null });
        } else {
          navigate("/UserProfile", { state: { data: location.state.data } });
        }
      };

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
    const [startDate, setStartDate] = useState(new Date());
    
  return (
    <div className="content_home">
      <div className="Header_div_home">
        <div className="image_div_home">
          <FaHandshake className="Handshake_icon_home" />
        </div>

        <div className="Heading_div_home">
          <h1> HelpingHands</h1>
        </div>

        <div className="Login_div_home">
          <nav>
            <NavLink to="/Home" exact>
              <MdOutlineHome className="home_icon_home" />
            </NavLink>
          </nav>
        </div>

        <div className="Profile_div">
          <MdOutlineAccountCircle className="account_icon_home" />
          <button
            id="btn_profile"
            accept="image"
            name="file"
            className="profilebtn_home"
            onClick={toUserprof}
          >
            {" "}
          </button>
        </div>
      </div>

      <Slider />

      <div>
        <section className="py-4 container_home">
          <div className="row justify-content-center">
            <div className="col-12 mb-5">
              <div className="mx-auto text-center_home">
                <Filter/>
                <DatePicker className="" selected={startDate} onChange={(date) => setStartDate(date)} />
                <input
                  type="text"
                  placeholder="Search for more services"
                  className="form-control_home"
                  value={filter}
                  onChange={searchText.bind(this)}
                />
                <button type="button" className="btn btn-outline search_home">
                Search
                </button>
              </div>
            </div>
            {dataSearch.map((item, index) => {
              return (
                <div className="col-11 col-sm6 col-lg-3 mx-0 mb-4">
                  <div className="card p-0 overflow-hidden h-100 shadow">
                    <img src={item.img} className="card-body img_home" />
                    <div className="card-body">
                      <h5 className="card-title text-center_home text">
                        {" "}
                        {item.title}
                      </h5>
                      <div className="text-center_home">
                        <button
                          type="button"
                          className="btn btn-outline text-center_home"
                          style={{ textAlign: "center" }}
                          onClick={buttonPress}
                        >
                          {item.desc}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
export default Home;
