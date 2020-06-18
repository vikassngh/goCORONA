import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Toolbox from './Toolbox/Toolbox';
import { News } from './Pages/News';
import { covid19 } from './Pages/Covid';
import { LetsFight} from './Pages/Letsfight';
import { main } from './Pages/Main.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" component={main}/>
                        <Route path="/News" component={News}/>
                        <Route path="/Covid-19" component={covid19}/>
                        <Route path="/LetsFight" component={LetsFight}/>
                        <Route component={LetsFight}/>
                    </Switch>
                    < Toolbox/>
                </Router>
                <main/>
                <div className="social-container">
                    <h3>Copyright @2020 goCORONA</h3>
                    <div className="gap"/>
                    <a
                        href="https://www.facebook.com/vikas.sngh.5"
                        className="facebook social"
                    >
                        <FontAwesomeIcon icon={faFacebook} size="3x" />
                    </a>
                    <a
                        href="https://www.instagram.com/vikas_sngh_/"
                        className="instagram social"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </a>
                </div>
            </React.Fragment>
        );
    }
}
export default App;