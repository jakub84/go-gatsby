import React, { Component } from "react";
import "./navigation.scss";
import { Link } from "gatsby"
// import { Link, animateScroll as scroll } from "react-scroll";


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

    closeMenu = () => {
        this.setState({
            isOpen: false
        })
    }
    render() {
        return (
            <div className="navigation-container">
                <ul className={`navigation ${this.state.isOpen && 'open'}`}>
                    <li><Link to="#header" onClick = {this.closeMenu}>home</Link></li>
                    <li><Link to="#nasze-produkty" onClick = {this.closeMenu}>nasze produkty</Link></li>
                    {/* <li><Link to="#oferta-specjalna" onClick = {this.toogleMenu}>oferta specjalna</Link></li> */}
                    <li><Link to="#o-nas" onClick = {this.closeMenu}>o nas</Link></li>

                    <li><Link to="#kontakt" onClick = {this.closeMenu}>kontakt</Link></li>
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
