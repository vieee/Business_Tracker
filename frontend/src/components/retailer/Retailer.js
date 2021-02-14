import "./styleRetailer.scss";

import React from "react";
import { Login } from "../login/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RetailerSalesForm from "./RetailerSalesForm";
import RetailerBuyForm from "./RetailerBuyForm";
import ViewDetails from "./ViewDetails";
import CurrentAnalysis from "./CurrentAnalysis";

const Retailer = () => {
  return (
    <Router>
      <Switch>
        <Route path="/retailer/add-sales">
          <RetailerSalesForm />
        </Route>
        <Route path="/retailer/add-buy">
          <RetailerBuyForm />
        </Route>
        <Route path="/retailer/view-details">
          <ViewDetails />
        </Route>
        <Route path="/retailer/current-analysis">
          <CurrentAnalysis />
        </Route>
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
              <Link to="/retailer/current-analysis">
                <button className="btn">Current Analysis</button>
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
