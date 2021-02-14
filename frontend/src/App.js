import React from "react";
import "./App.scss";
import { Login, Register } from "./components/login/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isLogginActive: true,
      isRetailer: false,
      isWholesailer: false,
    };
  }

  setCurrentUser(value) {
    this.setState({
      user: value
    })
  } 

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState((prevState) => ({
      isLogginActive: !prevState.isLogginActive,
      isRetailer: false
    }));
  }

  changeRetailer() {
    this.setState((prevState) => ({
      isRetailer: !prevState.isRetailer,
    }));
  }

  changeWholesailer() {
    this.setState((prevState) => ({
      isWholesailer: !prevState.isWholesailer,
    }));
  }



  render() {
    const { isLogginActive, isRetailer } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    const finalStatus = isRetailer ? "Close" : current
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={(ref) => (this.container = ref)}>
            {isLogginActive && (
              <Login
                containerRef={(ref) => (this.current = ref)}
                setRetailer={this.changeRetailer.bind(this)}
                setWholesailer={this.changeWholesailer.bind(this)}
              />
            )}
            {!isLogginActive && (
              <Register
                containerRef={(ref) => (this.current = ref)}
                setLogin={this.changeState.bind(this)}
                setCurrentUser={this.setCurrentUser.bind(this)}
              />
            )}
          </div>
          <RightSide
            current={finalStatus}
            currentActive={currentActive}
            containerRef={(ref) => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;
