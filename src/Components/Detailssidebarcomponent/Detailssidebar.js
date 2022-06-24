import { NavLink } from "react-router-dom";
import { Route, Routes, useNavigate } from "react-router-dom";
import Address from '../Services/Adress';
import Payment from '../Services/Payment.js';
import DateTime from '../Services/DateTime.js';
import Details from "../Services/Details.js";
import { useEffect } from "react";
import './Detailssidebar.css';
import { MdChat } from "react-icons/md";

import {
    MdFormatAlignJustify, MdPostAdd, MdAddLocationAlt, MdLocalSee,
    MdFmdGood, MdVerified, MdLibraryAdd, MdWallpaper, MdInsertPhoto,
    MdInsertInvitation, MdOutlineSubtitles, MdCreditCard
} from "react-icons/md";
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const Detailssidebar = () => {

    //const history = useHistory();
    const navigate = useNavigate();
    useEffect(() => {
        console.log("Componented about mounted");
        //console.log(history);
       //history.push("/details/generaldetails");
     // navigate("/details/generaldetails")

    }, [])
    return (

        <div className="Detailssidebar_container">
                    <div className="left_div">
                        <nav className="Details_nav">
                            <div className="GD_div">
                                <div className="aa">
                                    <MdFormatAlignJustify className="iconofdetail" />
                                    <NavLink exact to="/details/generaldetails" >General Details</NavLink>
                                </div>
                            </div>
                            <div className="GD_div">
                                <div className="aa"  >
                                    <MdAddLocationAlt className="iconofdetail" />
                                    <NavLink className="aa" to="/details/address" >Address</NavLink>
                                </div>
                            </div>
             
                            <div className="GD_div">
                                <div className="aa">
                                    <MdCreditCard className="iconofdetail" />
                                    <NavLink className="aa" to="/details/payment">Payment</NavLink>
                                </div>

                            </div>


                            <div >
                                <div className="GD_div" >
                                <div className="aa">
                                <MdChat className="iconofdetail" />
                                    <NavLink className="aa" to="/details/chat">Chat</NavLink>
                                    </div>
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



    )
}


export default Detailssidebar;