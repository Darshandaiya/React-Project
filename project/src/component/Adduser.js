import React from "react";
import axios from "axios";
import BaseCtrl from "../BaseCtrl";
import withRouter from "./withRouter";


class AddUser extends BaseCtrl {
    constructor(props) {
        super(props);
        if (this.props.params.id) {
            this.get();
        }
    }
    get() {
        let url = "http://api.sunilos.com:9080/ORSP10/User/get/" + this.props.params.id;
        axios.get(url).then((res) => {
            console.log(res.data.result.data)
            this.setState({
                firstName: res.data.result.data.firstName,
                lastName: res.data.result.data.lastName,
                email: res.data.result.data.email,
                password: res.data.result.data.password,
                roleId: res.data.result.data.roleId

            })

        })

    }
    registered() {
        let url = "http://api.sunilos.com:9080/ORSP10/User/save";
        axios.post(url, this.state).then((res) => {
            this.setState({ list: res.data.result.data });
            if (res.data.success) {
                this.setState({
                    message: "User saved Successfully",
                    txtClr: "success",
                });
            } else {
                this.setState({ message: "User didn't Added", txtClr: "danger" });
            }
        });
    }


    render() {
        return (
            <section>

                <div className="container register_container">
                    <form className="form-signIn" >
                        <h1 className="mb-5 pt-2 text-center">
                            {
                                this.props.params.id ? "Update User" : "Add User"
                            }
                        </h1>
                        <h5 className={`text-${this.state.txtClr} text-center`}> {this.state.message}  </h5>


                        <div className="row">

                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="needed" htmlFor="user_name">First Name</label>
                                    <input type="text" name="firstName" className="form-control" id="user_name" placeholder="Please Enter Your First Name" value={this.state.firstName} onChange={(ev) => this.changeState(ev)} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="needed">Last Name</label>
                                    <input type="text" name="lastName" className="form-control" placeholder="Please Enter Your Last Name" value={this.state.lastName} onChange={(ev) => this.changeState(ev)} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Email Id</label>
                                    <input type="text" name="loginId" className="form-control" placeholder="Please Enter Your Email Id" value={this.state.email} onChange={(ev) => this.changeState(ev)} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="needed">Password</label>
                                    <input type="password" name="password" className="form-control" placeholder="Please Enter Your Password" value={this.state.password} onChange={(ev) => this.changeState(ev)} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="needed">Roll Id</label>
                                    <input type="text" name="roleId" className="form-control" placeholder="Please Enter Your Roll Id" value={this.state.roleId} onChange={(ev) => this.changeState(ev)} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <button className="btn regsiter_btn" type="button" onClick={(ev) => { this.registered(ev); }}>
                                    {
                                        this.props.params.id ? "Update User" : "Add User"
                                    }
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}
export default withRouter(AddUser)