import React, { Component } from "react";
import "./button.scss";
import { Link } from "gatsby"


class Button extends Component {
    render() {
        return (
           <div className={`button ${this.props.type}`}>
            <Link to={this.props.linkTo}>{this.props.linkContent}</Link>
           </div>
        );
    }
}

export default Button;
