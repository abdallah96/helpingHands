import './Butt.css'

const Butt = (props) => {
    let { nameofbtn, buttonPress, addressarray, comp } = props
    console.log(`${comp} Buuton`);
    let className = '';
    if (comp === 'Detailsnextbtn') {

        className = 'btnnext';
    }

    if (comp === 'Addresssaveaddress') {
        className = 'btnsaveaddress';
    }

    if (comp === 'AddressNext') {
        className = 'btnnextaddress';
    }


    return ( <div>
        <button className = { className }
        onClick = {
            () => buttonPress()
        } > { nameofbtn } </button> </ div > )
}

export default Butt;