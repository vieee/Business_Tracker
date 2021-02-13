/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-constructor */
import React from "react";
import loginImg from "../../login.svg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Wholesailer from "../wholesailer/Wholesailer";
import Retailer from "../retailer/Retailer";

export class Login extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/wholesailer">
                        <Wholesailer />
                    </Route>
                    <Route path="/retailer">
                        <Retailer />
                    </Route>
                    <Route path="/">
                        <div className="base-container" ref={this.props.containerRef}>
                            <div className="header">Login</div>
                            <div className="content">
                                <div className="image">
                                    <img src={loginImg} />
                                </div>
                                <div className="form">
                                    <div className="form-group">
                                        <label htmlFor="id">ID</label>
                                        <input type="text" name="id" placeholder="ID" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" placeholder="password" />
                                    </div>
                                </div>
                            </div>
                            <div className="footer">
                                <Link to="/retailer">
                                    <button type="submit" className="btn">
                                        Login
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </Route>
                </Switch>
            </Router>
        );
    }
}