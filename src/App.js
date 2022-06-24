import "./App.css";
// import { NavLink, Route,Routes, Switch } from "react-router-dom";
import Home from './Components/Home/Home'
import Listing from "./Components/Listing/Listing";
import UserProfile from "./Components/UserProfile/UserProfile";
import Login from "./Components/Login/Login"
import MyDetails from "./Components/MyDetails.js/MyDetails";
import { NavLink, Route, Routes } from "react-router-dom";
import { Button } from "bootstrap";
import Slider from "./Components/Home/Slider";
import Detailssidebar from "./Components/Detailssidebarcomponent/Detailssidebar"
import Details from "./Components/Services/Details";
import Address from "./Components/Services/Address";
import Payment from "./Components/Services/Payment";
import UserProfilesidebar from "./Components/UserProfilesidebar/UserProfilesidebar";
import Chat from "./Components/ChatComponent/Chat.js";
import Header from "./Components/Header/Header";
import Home2 from "./Components/Home/Home2";
import PaymentReceipt from "./Components/Services/PaymentReceipt";
function App() {
  return (
    <div className="App">

     
{/* <nav>
        <img src="https://cdn-icons-png.flaticon.com/512/2618/2618475.png" style={{width:70 , height:70}}/>
        <h1>Helping Hands</h1>
        <NavLink to ="/" exact>Slider</NavLink>
        <NavLink to ="/Home" exact>Home</NavLink>
        <NavLink to ="/about">Services</NavLink>
        <NavLink to ="/products"><img src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png" style={{width:70 , height:70}}/></NavLink>
      </nav> */}
     
  

      
         <Routes>
         <Route path={'/Home'} element={<Home/>} ></Route>
         <Route path={'/Home2'} element={<Home2/>} ></Route>
         <Route path={'/'} element={<Home/>} ></Route>

        <Route path={'/Listing'} element={<Listing/>} > </Route>
        <Route path="/MyDetails" element={<MyDetails/>}></Route>
       
        {/* <Route path={"/details"} element = {<Detailssidebar/>}/> */}

        <Route path={"/details/generaldetails"} element = {<Details/>}/>

        <Route path={'/UserProfile'} element={<UserProfile/>} > </Route>

        <Route path={'/Login'} element={<Login/>} ></Route>

        <Route path="/details/address" element={<Address/>}></Route>
        <Route path="/details/chat" element={<Chat/>}></Route>
                           
        <Route path="/details/payment" element={<Payment/>}></Route>
        
        <Route path={'/Slider'} element={<Slider/>}></Route>

        <Route path="/paymentReceipt" element={<PaymentReceipt/>}></Route>
        <Route path="/UserProfilesidebar" element={<UserProfilesidebar/>}></Route>
        
       
        
      </Routes>
    </div>
  );
}

export default App;
