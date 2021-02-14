/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef } from "react";
import loginImg from "../../login.svg";
// import { auth, database } from "../Firebase"


export const Register = (props) => {

  // function signUp(id, type, email, password) {
  //   props.setLogin();
  //   auth.createUserWithEmailAndPassword(email, password);
  //   database.ref(`${type}/${id}`).set({
  //     email: email,
  //     type: type,
  //     id: id,
  //   });
  // }

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     // setCurrentUser(user);
  //   });

  //   return unsubscribe;
  // }, []);

  const IDref = useRef()
  const Emailref = useRef()
  const Passwordref = useRef()
  const Typeref = useRef()
  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} alt="Login Image" />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="id">ID</label>
            <input type="text" name="id" placeholder="ID" ref={IDref} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="email" ref={Emailref} />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type Of User</label>
            <label htmlFor="type">Retailer</label>
            <input type="radio" id="type" name="type" value="Retailer" placeholder="Retailer" ref={Typeref} />
            <label htmlFor="type">Wholesailer</label>
            <input type="radio" id="type" name="type" value="Wholesailer" placeholder="Wholesailer" ref={Typeref} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" placeholder="password" ref={Passwordref} />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn" onClick={props.setLogin}>
          Register
          </button>
      </div>
    </div>

  )
}

