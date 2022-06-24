import "./UserProfilesidebar.css";
import { NavLink } from "react-router-dom";
import { MdFormatAlignJustify, MdOutlineDateRange } from "react-icons/md";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const UserProfilesidebar = () => {
  return (
    <div className="UP_container">
      <div className="UP_left_div">
        <nav className="UP_Details_nav">
          <div>
            <img
              className="UP_img"
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
              alt=""
            />
            <div className="styleside">
              <p>Ashwini Sarode</p>
              <p>ashwini9Sarode@gmail.com</p>
              <p>+49 12575923849</p>
              <p>Mannheim,68309</p>
            </div>
          </div>
        </nav>

        {/* <Routes>
            <Route path="/details/generaldetails" component={Details}></Route>
            <Route path="/details/address" component={Address}></Route>
            <Route path="/details/datetime" component={DateTime}></Route>
            <Route path="/details/payment" component={Payment}></Route>
        </Routes> */}
      </div>
    </div>
  );
};

export default UserProfilesidebar;
