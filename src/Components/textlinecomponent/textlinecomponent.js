import './textlinecomponent.css';

const Textlinecomponent =(props) => {
    let {value, addAddress,id } = props
return(
    <input type="text" id={id}  className="text_line" value={value} 
    onChange={(e) => addAddress(e)}></input>
)
}

export default Textlinecomponent;