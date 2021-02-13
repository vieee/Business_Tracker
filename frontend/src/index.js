import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Wholesailer from "./components/wholesailer/Wholesailer";
import Retailer from "./components/retailer/Retailer";

ReactDOM.render(
  <Router>
    {/* <div>
      <nav>
        <ul>
          <li>
            <Link to="/">App</Link>
          </li>
          <li>
            <Link to="/retailer">Retailer</Link>
          </li>
          <li>
            <Link to="/wholesailer">Wholesailer</Link>
          </li>
        </ul>
      </nav> */}

      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/wholesailer">
          <Wholesailer />
        </Route>
        <Route path="/retailer">
          <Retailer />
        </Route>
        <Route path="/">
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Route>
      </Switch>
    {/* </div> */}
  </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
