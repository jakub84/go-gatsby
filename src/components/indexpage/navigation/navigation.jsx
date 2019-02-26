import React, { Component } from "react";
import "./navigation.scss";
import { Link } from "gatsby"


class navigation extends Component {
        state = {
            isOpen: false
        }
    
    toogleMenu = () => {
       this.setState(prevstate => {
           return {
           isOpen: !prevstate.isOpen
       }})
    }
    render() {
        return (
            <div className="navigation-container">
                <ul className={`navigation ${this.state.isOpen && 'open'}`}>
                    <li><Link to="#">home</Link></li>
                    <li><Link to="#">o nas</Link></li>
                    <li><Link to="#">nasze produkty</Link></li>
                    <li><Link to="#">kontakt</Link></li>
                </ul>
                <div className="hamburger-menu" onClick = {this.toogleMenu}>
                    <span className="nav-icon-element"></span>
                    <span className="nav-icon-element"></span>
                    <span className="nav-icon-element"></span>
                </div>
            </div>
        );
    }
}

export default navigation;
