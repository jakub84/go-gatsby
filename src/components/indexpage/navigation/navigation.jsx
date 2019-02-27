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
                    <li><Link to="#header" onClick = {this.toogleMenu}>home</Link></li>
                    <li><Link to="#products" onClick = {this.toogleMenu}>nasze produkty</Link></li>
                    {/* <li><Link to="#oferta-specjalna" onClick = {this.toogleMenu}>oferta specjalna</Link></li> */}
                    <li><Link to="#o-nas" onClick = {this.toogleMenu}>o nas</Link></li>

                    <li><Link to="#kontakt" onClick = {this.toogleMenu}>kontakt</Link></li>
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
