import React, { Component } from 'react'
import "./navbar.scss"
import logo from "../../assets/lorad.svg"
export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <img className="navbar__logo" src={logo} alt="logo"/>
                <div className="navbar__list">
                    <div>Opportunities</div>
                    <div>Get Listed</div>
                    <div>Blog</div>
                    <div>About Us</div>
                </div>
            </div>
        )
    }
}
