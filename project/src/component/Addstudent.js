import React from "react";
import axios from "axios";
import BaseCtrl from "../BaseCtrl";
import withRouter from "./withRouter";


class Addstudent extends BaseCtrl {
    constructor(props) {
        super(props);
        if (this.props.params.id) {
            this.get();
        }
    }
    get() {
        let url = "http://api.sunilos.com:9080/ORSP10/Student/get/" + this.props.params.id;
        axios.get(url).then((res) => {
            console.log(res.data.result.data)
            this.setState({
                firstName: res.data.result.data.firstName,
                lastName:res.data.result.data.lastName,
                collegeId:res.data.result.data.collegeId,
                collegeName:res.data.result.data.collegeName,
                mobileNo:res.data.result.data.mobileNo,
                email:res.data.result.data.email,


            })

        })
    }

    addData() {
        let url = "http://api.sunilos.com:9080/ORSP10/Student/save";
        axios.post(url, this.state).then((res) => {
            this.setState({ list: res.data.result.data });
            if (res.data.success) {
                this.setState({ message: "Student added Successfully", txtClr: "success" });
            } else {
                this.setState({ message: "Student didn't Added", txtClr: "danger" });
            }
        });
    }

    render() {
        return (
            <section>

                <div className="container register_container">
                    <form className="form-signIn" >
                        <h1 className="mb-5 pt-2 text-center">{
                            this.props.params.id ? "Update Student" : "Add Student"
                        }</h1>
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
                                    <label className="needed">College ID</label>
                                    <input type="text" name="collegeId" className="form-control" placeholder="Please Enter Your College ID" value={this.state.collegeId} onChange={(ev) => this.changeState(ev)} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="needed">College Name</label>
                                    <input type="text" name="collegeName" className="form-control" placeholder="Please Enter Your College Name" value={this.state.collegeName} onChange={(ev) => this.changeState(ev)} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="needed">Contact No</label>
                                    <input type="text" name="mobileNo" className="form-control" placeholder="Please Enter Your Contact No" value={this.state.mobileNo} onChange={(ev) => this.changeState(ev)} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="needed">Email ID</label>
                                    <input type="text" name="email" className="form-control" placeholder="Please Enter Your Email ID" value={this.state.email} onChange={(ev) => this.changeState(ev)} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <button className="btn regsiter_btn" type="button" onClick={(ev) => { this.addData(ev); }}>{
                                    this.props.params.id ? "Update Student" : "Add Student"
                                }</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}
export default withRouter(Addstudent)