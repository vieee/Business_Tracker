/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import loginImg from "../../login.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="Login Image" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="id">ID</label>
              <input type="text" name="id" placeholder="ID" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="type">Type Of User</label>
              <label htmlFor="type">Retailer</label>
              <input type="radio" id="type" name="type" value="Retailer" placeholder="Retailer" />
              <label htmlFor="type">Wholesailer</label>
              <input type="radio" id="type" name="type" value="Wholesailer" placeholder="Wholesailer" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.props.setLogin}>
            Register
          </button>
        </div>
      </div>
    );
  }
}