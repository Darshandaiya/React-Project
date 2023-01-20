import React from "react";
import axios from "axios";
import BaseCtrl from "../BaseCtrl";
import withRouter from "./withRouter";


 class Addcollage extends BaseCtrl {
    constructor(props) {
        super(props);
        if (this.props.params.id) {
          this.get();
        }
      }
      get() {
        let url = "http://api.sunilos.com:9080/ORSP10/College/get/" + this.props.params.id;
        axios.get(url).then((res) => {
          console.log(res.data.result.data)
          this.setState({
            name: res.data.result.data.name,
            address: res.data.result.data.address,
            city: res.data.result.data.city,
            state: res.data.result.data.state,
            phoneNo: res.data.result.data.phoneNo,

          })
        })
      }
  addData() {
    let url = "http://api.sunilos.com:9080/ORSP10/College/save";
    axios.post(url, this.state).then((res) => {
      this.setState({ list: res.data.result.data });
      if (res.data.success) {
        this.setState({ message: "Collage added Successfully", txtClr:"success" });
      } else {
        this.setState({ message: "Collage didn't Added", txtClr:"danger" });
      }
    });
  }

  render() {
    return (
        <section>
           
            <div className="container register_container">
                <form className="form-signIn" >
                <h1 className="mb-5 pt-2 text-center">Add Collage</h1>
                <h5 className={`text-${this.state.txtClr} text-center`}> {this.state.message}  </h5>


                    <div className="row">
                     
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label className="needed" htmlFor="user_name">Name</label>
                                <input type="text" name="name" className="form-control" id="user_name" placeholder="Please Enter Your Name" value={this.state.name} onChange={(ev) => this.changeState(ev)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label className="needed">Address</label>
                                <input type="text" name="address" className="form-control" placeholder="Please Enter Your Address" value={this.state.address} onChange={(ev) => this.changeState(ev)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label className="needed">City</label>
                                <input type="text" name="city" className="form-control" placeholder="Please Enter Your City" value={this.state.city} onChange={(ev) => this.changeState(ev)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label className="needed">State</label>
                                <input type="text" name="state" className="form-control" placeholder="Please Enter Your State" value={this.state.state} onChange={(ev) => this.changeState(ev)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label className="needed">Contact Number</label>
                                <input type="text" name="phoneNo" className="form-control" placeholder="Please Enter Your Contact Number" value={this.state.phoneNo} onChange={(ev) => this.changeState(ev)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <button className="btn regsiter_btn" type="button" onClick={(ev) => {this.addData(ev);}}>Add Collage</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
  }
}
export default withRouter(Addcollage)