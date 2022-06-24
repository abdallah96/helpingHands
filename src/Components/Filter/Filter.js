import React, { useState, useEffect } from "react";
import App from "../../App";
import styles from "./Filter.css";
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
import data from "../../data";
import 'bootstrap/dist/css/bootstrap.min.css';
import {DropdownButton,Dropdown} from 'react-bootstrap'

class Filter extends React.Component
{
    filter = {
        location:["Heidelberg","Mannheim","Stuttgart"],
        categories:["Home Services", "Professional Services"],
        price:["20","35","60"],
        review: ["Lowest", "Highest"]
    }

    render()
    {
        return(
            <div className="dropdown">

                
                
                <DropdownButton id="dropdown-basic-button" variant ="success" title="Location">
                    {this.filter.location.map(data =>(
                    <Dropdown.Item>{data}</Dropdown.Item>
                    ))}
                </DropdownButton>

                {/* <DropdownButton id="dropdown-basic-button" variant ="success" title="Date and Time">
                    {this.filter.categories.map(data =>(
                    <Dropdown.Item >{data}</Dropdown.Item>
                    ))}
                </DropdownButton> */}

                {/* <DropdownButton id="dropdown-basic-button" variant ="success" title="Price Range">
                    {this.filter.price.map(data =>(
                    <Dropdown.Item >{data}</Dropdown.Item>
                    ))}
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" variant ="success" title="Review">
                    {this.filter.review.map(data =>(
                    <Dropdown.Item >{data}</Dropdown.Item>
                    ))}
                </DropdownButton> */}
            </div>
        )
    }
}
export default Filter;