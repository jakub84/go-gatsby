import React, { Component } from "react";
import "./navigation.scss";
import { Link } from "gatsby"


class navigation extends Component {
    render() {
        return (
            <ul className="navigation">
               <li><Link to="#">home</Link></li>
               <li><Link to="#">o nas</Link></li>
               <li><Link to="#">nasze produkty</Link></li>
               <li><Link to="#">kontakt</Link></li>
            </ul>
        );
    }
}

export default navigation;
