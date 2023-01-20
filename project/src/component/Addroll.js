import React from "react";
import axios from "axios";
import BaseCtrl from "../BaseCtrl";
import withRouter from "./withRouter";

 class AddRole extends BaseCtrl {
  constructor(props){
    super(props);
    if(this.props.params.id){
      this.get();
    }
  }
  get(){
    let url = "http://api.sunilos.com:9080/ORSP10/Role/get/" +this.props.params.id;
    axios.get(url).then((res) => {
      console.log(res.data.result.data)
      this.setState({
        discription : res.data.result.data.discription,
        name : res.data.result.data.name 
      })

    })

  }
 
  addData() {
    let url = "http://api.sunilos.com:9080/ORSP10/Role/save";
    axios.post(url, this.state).then((res) => {
        this.setState({ list: res.data.result.data });
        if (res.data.success) {
            this.setState({ message: "Role added Successfully", txtClr: "success" });
        } else {
            this.setState({ message: "Role didn't Added", txtClr: "danger" });
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
                    this.props.params.id ? "Update Role" : "Add Role"
                  }
                </h1>
                <h5 className={`text-${this.state.txtClr} text-center`}> {this.state.message}  </h5>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label className="needed" htmlFor="user_name">Discription</label>
                                <input type="text" name="discription" className="form-control" id="user_name" placeholder="Please Enter Your Discription" value={this.state.discription} onChange={(ev) => this.changeState(ev)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label className="needed">Name</label>
                                <input type="text" name="name" className="form-control" placeholder="Please Enter Your Name"  value={this.state.name} onChange={(ev) => this.changeState(ev)} />
                            </div>
                        </div>
                    </div>
                   
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <button className="btn regsiter_btn" type="button" onClick={(ev) => {this.addData(ev);}}>
                            {
                                this.props.params.id ? "Update Role " : "Add Role"
                            }
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
  }
}
export default withRouter(AddRole)