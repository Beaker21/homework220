import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

export default class Navigationbro extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
               <NavLink exact to="/">Home</NavLink>

               <NavLink exact to="/about-me">About</NavLink>

               <NavLink exact to="/contact">Contact</NavLink>
                
            </div>
        )
    }
};