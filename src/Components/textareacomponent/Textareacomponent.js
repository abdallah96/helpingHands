import "./Textareacomponent.css"


const Textareacomponent = (props) => {
    let { placeholder, id, addAddress, width, height, marginLeft, comp } = props;
    //   console.log(width,height,marginLeft);

    let className = '';
    if (comp === "Address") {
        className = 'txtareaAddress';
    }

    if (comp === "Details") {
        className = 'textAreaDetails';
    }



    return ( <
        textarea placeholder = { placeholder }
        id = { id }
        className = { className }
        onChange = {
            (e) => addAddress(e) }
        />
    )
}

export default Textareacomponent;