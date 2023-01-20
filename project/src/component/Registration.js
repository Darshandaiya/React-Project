import React, { Component } from 'react'
import axios from 'axios';
import ReactDOM from "react-dom";
import Login from './Login';
import Footer from './Footer';

class Registration extends Component {

 constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      loginId: "",
      roleId: "",
      password: "",
      message:""
    };
  }

  changeState(ev) {
    let name = ev.target.name;
    let value = ev.target.value;
    this.setState({ [name]: value });
  }

  addData() {
    let url = "http://api.sunilos.com:9080/ORSP10/User/save";
    axios.post(url, this.state).then((res) => {
      this.setState({ list: res.data.result.data });
      if (res.data.success) {
        ReactDOM.render(
          <React.StrictMode>
            <Login />
            <Footer/>
          </React.StrictMode>,
          document.getElementById("root")
        );
        this.setState({ message: "Data saved Successfully" });
      } else {
        this.setState({ message: "Data didn't Saved" , txtClr:"danger" });
      }
    });
  }



    render() {
        return (
            <section>
                {/* <h5>{this.state.message}</h5> */}
                <div className="container register_container">
                <form className="form-signIn" >
                <h1 className="mb-5 pt-2 text-center">User Registration</h1>
                <h5 className={`text-${this.state.txtClr} text-center`}> {this.state.message}  </h5>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="needed" htmlFor="user_name">First Name</label>
                                    <input type="text" name="firstName" className="form-control" id="user_name" placeholder="Please Enter Your First Name" onChange={(ev) => this.changeState(ev)}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="needed">Last Name</label>
                                    <input type="text" name="lastName" className="form-control" placeholder="Please Enter Your Last Name" onChange={(ev) => this.changeState(ev)} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Email Id</label>
                                    <input type="text" name="loginId" className="form-control" placeholder="Please Enter Your Email Id" onChange={(ev) => this.changeState(ev)} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="needed">Password</label>
                                    <input type="password" name="password" className="form-control" placeholder="Please Enter Your Password" onChange={(ev) => this.changeState(ev)} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="needed">Roll Id</label>
                                    <input type="text" name="roleId" className="form-control" placeholder="Please Enter Your Roll Id" onChange={(ev) => this.changeState(ev)} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <button className="btn regsiter_btn" type="button" onClick={(ev) => {this.addData(ev);}}>Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>



        )
    }
}

export default Registration;