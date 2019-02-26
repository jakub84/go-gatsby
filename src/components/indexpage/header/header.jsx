import React, { Component } from "react";
import "./header.scss";
import Navigation from "../navigation/navigation";
import mainLogo from "../../../../static/header/go_logo.svg";
import Button from "../button/button";
import { Link } from "gatsby";

function header(props) {

    return (
        <div className="header">
            <div className="container">
                <nav>
                    <div className="logo-container">
                        <Link to="#">
                            <img src={mainLogo} />
                        </Link>
                    </div>
                    <div className="navigation">
                        <Navigation />
                    </div>
                </nav>
                <div className="main-content">
                    <div className="text-content">
                        <h1>This is headline</h1>
                        <p>Bacon ipsum dolor amet filet mignon brisket <strong> pork chop tongue pork belly pork corned beef biltong doner sausage picanha. Shank beef ribs short loin capicola picanha landjaeger</strong> swine pastrami brisket ground round frankfurter flank pork chop ham.</p>
                        <div className="btns-content">
                            <Button
                                
                                linkContent="Oferta"
                                linkTo="#" />
                            <Button
                                
                                linkContent="Allegro"
                                linkTo="#" />
                        </div>
                    </div>
                    <div className="image-content">
                        <div className="image">image</div>
                    </div>
                    <div className="slider-navigation">
                        <div className="nav-cirkle active"></div>
                        <div className="nav-cirkle"></div>
                        <div className="nav-cirkle"></div>
                        <div className="nav-cirkle"></div>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default header;
