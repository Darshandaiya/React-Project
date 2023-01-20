import React from "react";
import "../App.css";
import axios from "axios";
import ReactDOM from "react-dom";
import Registration from "./Registration";
import Footer from "./Footer";
import BaseCtrl from "../BaseCtrl";
import logo from '../assets/images/NCSlogo.jpeg'

export default class Login extends BaseCtrl {
  signIn(props) {
    if (this.state.loginId === "" || this.state.password === "") {
      if (this.state.loginId === "") {
        this.setState({ message: "Enter Login Id" });
      }
      if (this.state.password === "") {
        this.setState({ message: "Enter Password" });
      }
      if (this.state.loginId === "" && this.state.password === "") {
        this.setState({ message: "Enter Login Id & Password" });
      }
    } else {
      let url = "http://api.sunilos.com:9080/ORSP10/Auth/login";
      axios.post(url, this.state).then((res) => {
        if (res.data.success) {
          localStorage.setItem("token", "Darshan")
          window.location.href = "/"
          // ReactDOM.render(
          //   <React.StrictMode>
          //     <App Admin={res.data.result.data} />
          //   </React.StrictMode>,
          //   document.getElementById("root")
          // );
        } else {
          this.setState({ message: "Invalid LoginId & Password" });
        }
      });
    }
  }

  openReg() {
    ReactDOM.render(
      <React.StrictMode>
        <Registration />
        <Footer />
      </React.StrictMode>,
      document.getElementById("root")
    );
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div>
          </div>
        </nav>
        <div className="back_col">
          <div className="form-signin">
            <p className='text-center' style={{ color: 'red' }}> {this.state.message}</p>
            <div className="logo_img">
              <img src={logo} alt="img" />
            </div>
            <h5 className="mb-0 pt-2 text-center"><strong>Welcome</strong>, Please login</h5>
            <input type="email" name="loginId" className="form-control input_field" placeholder="Enter Your Email" required autoFocus onChange={(ev) => this.changeState(ev)} ></input>
            <input type="password" id="password" name="password" className="form-control input_field" placeholder="Enter Your Password" required autoFocus
              onChange={(ev) => this.changeState(ev)}></input>
            <div className="col-sm-12 text-center">
              <button className="btn regsiter_btn" variant="primary" type="button" onClick={() => this.signIn()}>Sign in</button>
            </div>
            {/* <div className="col-sm-12 text-center">
              <button className="btn regsiter_btn" variant="primary" type="button" onClick={() => this.openReg()}>Registration</button>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
