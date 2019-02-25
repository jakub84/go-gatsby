import React, { Component } from "react";
import "./productBox.scss";
import { Link } from "gatsby";
import icon from "../../../../static/product-icons/kokardy-narodowe-icon.svg";
import Button from "../button/button";


class ProductBox extends Component {
    render() {
        return (
            <div className="product-box">
                <div className="icon-container">
                    <img src={icon} alt="icon" />
                </div>
                <h4>KOKARDY <br /> NARODOWE </h4>
                <div className="separator product"></div>
                <p className="product-description">Bacon ipsum dolor amet filet mignon brisket pork chop, tongue pork belly pork corned beef biltong doner sausage picanha. Shank beef ribs short loin capicola picanha landjaeger swine pastrami brisket ground round frankfurter flank pork chop ham.</p>
                <Button />
            </div>
        );
    }
}

export default ProductBox;
