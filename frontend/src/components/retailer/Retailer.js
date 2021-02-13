import "./styleRetailer.scss";

import React from "react";
import { Login } from "../login/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Retailer = () => {
  return (
    <Router>
      <Switch>
        <Route path="/retailer">
          <div className="base-container">
            <div className="header">Retailer</div>
            <div className="content">
              <Link to="/retailer/add-sales">
                <button className="btn">Add Sales Details</button>
              </Link>
              <Link to="/retailer/add-buy">
                <button className="btn">Add Buy Details</button>
              </Link>
              <Link to="/retailer/view-details">
                <button className="btn">View Details</button>
              </Link>
            </div>
          </div>
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default Retailer;
