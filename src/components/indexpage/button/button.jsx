import React, { Component } from "react";
import "./button.scss";
import { Link } from "gatsby"


class Button extends Component {
    render() {
        return (
           <div className="button">
            <Link to="#">I'm link!</Link>
           </div>
        );
    }
}

export default Button;
