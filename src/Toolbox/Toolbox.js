import React from "react";
import './Toolbox.css';
import { Link } from "react-router-dom";

const toolbox = props => (
    <header className="toolbox">
        <nav className="navigation">
            <div></div>
            <div className="brandname"><Link to="/" className="link">goCORONA</Link></div>
            <div className="gap"></div>
            <div className="item-navigation">
                <ul>
                    <li><Link to="/News" className="illink">NEWS</Link></li>
                    <li ><Link to="/Covid-19" className="illink">COVID-19</Link></li>
                    <li><Link to="/Letsfight" className="illink">#LETSFIGHT</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);
export default (toolbox);
