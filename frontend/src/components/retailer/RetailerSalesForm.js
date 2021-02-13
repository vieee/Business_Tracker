import "./styleRetailer.scss";

import React from "react";
import loginImg from "../../login.svg"

const RetailerSalesForm = () => {
  return (
    <div className="base-container">
      <div className="header">New Sales Transaction</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} alt="Add Sales Data"/>
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="id">Product ID</label>
            <input type="text" name="id" placeholder="Product ID" />
          </div>
          <div className="form-group">
            <label htmlFor="soldQty">Quantity Sold</label>
            <input type="text" name="soldQty" placeholder="Quantity Sold" />
          </div>
          <div className="form-group">
            <label htmlFor="todate">To Date</label>
            <input type="date" id="todate" name="todate" placeholder="To Date" />
          </div>
          <div className="form-group">
            <label htmlFor="fromdate">From Date</label>
            <input type="date" id="fromdate" name="todate" placeholder="From Date" />
          </div>
          <div className="form-group">
            <label htmlFor="availability">Availability</label>
            <input type="text" name="availability" placeholder="Availability" />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="submit" className="btn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default RetailerSalesForm;
