import './Details.css';
import Detailssidebar from "../Detailssidebarcomponent/Detailssidebar.js";
import Textlinecomponent from '../textlinecomponent/textlinecomponent';
import Textareacomponent from '../textareacomponent/Textareacomponent';
import { MdAddAPhoto, MdStarRate, MdVerified, MdStarHalf } from "react-icons/md";
import { useNavigate,useLocation } from "react-router-dom";
import Butt from '../Button/Butt.js'
import { NavLink } from 'react-router-dom';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
} from "mdb-react-ui-kit";
import Header from '../Header/Header';

const Details = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div> <Header></Header></div> 
        <div className="content_details">
           
           <div>
               <Detailssidebar />
           </div>

            
                        <div className="center_div">
                            <div className='Page_title'>
                            <h4>General Details</h4>
                            </div>
                         
                         <div className='subTitle'>

                         
                            <h5>What is to be done?</h5>
                            </div>
                            <Textlinecomponent className='line' />
                            <br></br>
                            <br></br>
                            <div className='DescDetail'>
                            <h5>Describe your order in detail</h5>
                            </div>
                            <Textareacomponent comp="Details"  placeholder="eg: Get your own tools bitte"></Textareacomponent>
                            <br></br>
                            <div className='Addimage_div'>
                            <h5>Add images</h5>
                            </div>


                            <label className='label' htmlFor ='file'>
                                <i>
                                    <MdAddAPhoto className='addpht_icon' />
                                    <input type="file" id="file" accept='image' name="file" />
                                </i>
                            </label>

                            <div className='Btn_next_div'>
                                {/* <Butt comp="Detailsnextbtn" nameofbtn="NEXT" style={{ width: "80px", height: "40px" }} > </Butt> */}
                                <NavLink  to="/details/address"> <button className="btnnext">NEXT</button></NavLink>
                            </div>


                        </div>


                <div className="right_div">
              
                    <div className="Freelancersinfo_Div">
                        <div className='imagebox'>
                            <img src="https://sandbox-uploads.imgix.net/u/1647303869-d1052a0881eb8e5c00466cf534d73e87?w=700&h=500" className='freelance_image'></img>
                        </div>
                        <div className='freelance-information'>
                            <label className='name'>Name: Alex H. </label>
                            <br></br>
                            <label className='name'>28 yrs, Heidelberg</label>


                        </div>
                        <div className='freelanc_info'>
                            <MdStarRate className='star_rating'></MdStarRate>
                            <label className='rating_label'>4.8/5 (128 reviews)</label>
                            <div>
                                <label>Orders completed : 40</label>
                            </div>
                        </div>



                    </div>
                    


                    <div className="verified">
                        <MdVerified className='verification_icon' />
                        <div className='Id_div'>
                            <label className='label_ID'>ID Verified</label>
                        </div>

                    </div>

                    <div className='Ratingreview_div'>
                        <div className='Titlediv_details'>
                            <label className='label_Review'>Reviews</label>
                        </div>
                        <div className='Photo_Reviewtitle_div'>
                            <div className='user_photo'>
                             <img className='pht_user' src="https://images.unsplash.com/photo-1622322062536-895d869b09ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="distressed Italian wall in pink and grey hues"></img> 
                            </div>
                            <div className="reviewititleandstars" >
                            <div className='Review_title'>
                                <label>Very Professional</label>
                            </div>
                           
                            <div className='star_div'>
                                <MdStarRate className='star1' />
                                <MdStarRate className='star1' />
                                <MdStarRate className='star1' />
                                <MdStarRate className='star1' />
                                <MdStarHalf className='star1' />
                            </div>
</div>


                        </div>
                        
                        <div className='reviewinwords'>
                            <label>A fantastic organisation! Great cutomer support from beginning to end of the process.
                            The team are really informed and go the extra mile at every stage. I would recommend them unreservedly.
                            </label>
                        </div>
                           
                           
                        
                        </div>

                    </div>
                </div>



            </div>

    )
}

export default Details;