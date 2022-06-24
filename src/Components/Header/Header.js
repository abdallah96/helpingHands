import './Header.css'
import { NavLink } from "react-router-dom";
import Detailssidebar from '../Detailssidebarcomponent/Detailssidebar';
import Home from '../Home/Home';
import { useNavigate } from "react-router-dom";
import { FaHandshake } from "react-icons/fa";
import { MdOutlineAccountCircle, MdOutlineHome,MdLogout } from "react-icons/md";
import { useCookies,cookies } from 'react-cookie';


const Header = () => {
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
        <div className="Header_div sticky">
            <div className="image_div">
                <FaHandshake className='Handshake_icon' />
            </div>

            <div className="Heading_div">
            <h1 className="headingheader"> HelpingHands</h1>
           </div>

           <div className="icons_header">

                <div className="Login_div">
                    <button id="btn_profile" accept='image' name="file" className='profilebtn' onClick={homebtn} >
                       
                    </button>
                    <MdOutlineHome className='home_icon' />  
                </div>

                <div className="Profile_div">
                <button id="btn_profile" accept='image' name="file" className='profilebtn_acc' onClick={userProfdirection} > 
                
                </button>
                <MdOutlineAccountCircle className='account_icon' />     
                </div>

                <div className="Logout_div">
                <button id="btn_profile" accept='image' name="file" className='logout' onClick={logout} > 
               
                </button>
                <MdLogout className='logout_icon'/>
                </div>
            </div>


        </div>
    )
}
export default Header;