import * as React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import "./UserProfile.css";
import UserProfileSidebar from "../UserProfilesidebar/UserProfilesidebar";
import { useNavigate } from "react-router-dom";
import Data from "./data.json";

import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { Link, useLocation } from "react-router-dom";

import UserProfileComponent from "./UserProfileComponent";
import PreviousAppCard from "./PreviousAppCard"
import SimpleTabs from "../TabComponent/TabComponent";
import Detailssidebar from "../Detailssidebarcomponent/Detailssidebar";
import UserProfilesidebar from "../UserProfilesidebar/UserProfilesidebar";
import { useCookies } from 'react-cookie';
import Header from "../Header/Header";

const UserProfile = (props) => {
  const [cookies, setCookie] = useCookies(['user']);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  console.log(location.state);
  const data = document.cookie.replace(/(?:(?:^|.*;\s*)data\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  const btnpress=()=>{
    navigate("/Login")
  }
  const btnpress_login=()=>{
    navigate("/Home")
  }
  //console.log(location.state.data);

  if (data == "null" || location.state == null ) {
   
    console.log("inside else");
    return (
      
      <div> 
      <div>
      <div class="Up_login_container">

       <p className="p">Please login to see your personalised appointments</p>
        <button
              type="submit"
              className="btn btn-dark btn-lg b"
              onClick={btnpress}
            >
              Login
            </button>
            <button
              type="submit"
              className="btn btn-dark btn-lg b"
              onClick={btnpress_login}
            >
              Home
            </button>
          
        </div>
        </div>
        </div>
    );
  } else if (location.state.data == "loggeduser" || data == "loggeduser") {
    return (
      <div>
       
        <div><UserProfilesidebar /></div>
        <div className="Tabdiv">
          <SimpleTabs
            one={
              <div className="postLine">
                {Data.map((post) => {
                  return (
                    <div key={post.id}>
                      <UserProfileComponent
                        Pname={post.Pname}
                        Reviews={post.Reviews}
                        Status={post.Status}
                        Delete={post.Delete}
                        imgsrc={post.imgsrc}
                      />
                    </div>
                  );
                })}
                
              </div>
            }
            two={
              <div className="postLineDone">
                <div>
                  <PreviousAppCard
                    Pname="Chris Mathews"
                    Reviews="4.8/5"
                    Status="Appointment Done"
                    Delete=""
                  />
                </div>
              </div>
            }
          />
        </div>
        <div style={{marginTop:"-22%"}}> <Header></Header></div>
      </div>
     
    );
  } else if (location.state.data == "loggeduserNoApp" || data == "loggeduserNoApp") {
    return (
      <div>
        <Header></Header>
        <div><UserProfilesidebar/></div>
        <div className="Tabdiv">
          <SimpleTabs
            one={
              <div className="postLine">
                <h3 className="noLogin">No appointments</h3>
              </div>
            }
            two={
              <div className="postLine">
                <h3 className="noLogin">No appointments</h3>
              </div>
            }
          />
        </div>
      </div>
    );
  }
};

export default UserProfile;


