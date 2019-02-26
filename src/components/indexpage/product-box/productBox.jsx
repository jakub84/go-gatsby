import React, { Component } from "react";
import "./productBox.scss";
import { Link } from "gatsby";
import icon from "../../../../static/product-icons/kokardy-narodowe-icon.svg";


function ProductBox(props) {
    return (
        <div className="product-box">
            <div className="icon-container">
                <img src={props.icon} alt="icon" />
            </div>
            <h4>{props.title}</h4>
            <div className="separator product"></div>
            <p className="product-description">{props.content}</p>
            {props.children}
 
        </div>
    );
}


export default ProductBox;
