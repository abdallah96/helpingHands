import './Saveaddress.css';

const SavedAddress = (props) =>{
    let { addressarray } = props

console.log(`${addressarray} Araay`);
  return addressarray.map((addrs)=>{
     return  (
        <div className='radio_div'>     
        <input type="radio" ></input>
        <div class="card_address">
        <label>
           <h5>Home</h5>
           <hr></hr>
           <p>{addrs.street_houseno},
              { addrs.postal }, {addrs.city}, 
              {addrs.Addtionalinfo} </p>    
        </label>
        </div>
        <br></br>
        </div>
       
    );
});
}

export default SavedAddress;