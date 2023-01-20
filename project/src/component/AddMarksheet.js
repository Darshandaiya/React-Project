import React from "react";
import axios from "axios";
import BaseCtrl from "../BaseCtrl";
import withRouter from "./withRouter";

 class AddMarksheet extends BaseCtrl {
    constructor(props) {
        super(props);
        if (this.props.params.id) {
          this.get();
        }
      }
    get() {
        let url = "http://api.sunilos.com:9080/ORSP10/Marksheet/get/" + this.props.params.id;
        axios.get(url).then((res) => {
          console.log(res.data.result.data)
          this.setState({
            studentId: res.data.result.data.studentId,
            name: res.data.result.data.name,
            chemistry: res.data.result.data.chemistry,
            physics: res.data.result.data.physics,
            maths: res.data.result.data.maths,
            rollNo: res.data.result.data.rollNo,
          })
        })
      }
      resetForm = () => {
        this.setState({
          
            id: '',
            rollNo: '',
            name: '',
            physics: '',
            chemistry: '',
            maths: '',
            studentId: ''
          
        })
      }

    addData() {
        let url = "http://api.sunilos.com:9080/ORSP10/Marksheet/save";
        axios.post(url, this.state).then((res) => {
          this.setState({ list: res.data.result.data });
          if (res.data.success) {
            this.setState({ message: "Marksheet Added Successfully", txtClr:"success" });
          } else {
            this.setState({ message: "Marksheet didn't Added", txtClr:"danger" });
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
                this.props.params.id ? "Update Marksheet" : "Add Marksheet"
                }
                </h1>
                <h5 className={`text-${this.state.txtClr} text-center`}> {this.state.message}  </h5>


                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label className="needed" htmlFor="user_name">Student Id</label>
                                <input type="number" name="studentId" className="form-control" id="user_name" placeholder="Please Enter Your Student Id" value={this.state.studentId} onChange={(ev) => this.changeState(ev)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label className="needed">Name</label>
                                <input type="text" name="name" className="form-control" placeholder="Please Enter Your Name" value={this.state.name} onChange={(ev) => this.changeState(ev)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label className="needed">Chemistry</label>
                                <input type="number" name="chemistry" className="form-control" placeholder="Please Enter Your Chemistry Number"  value={this.state.chemistry} onChange={(ev) => this.changeState(ev)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label className="needed">Physics</label>
                                <input type="number" name="physics" className="form-control" placeholder="Please Enter Your Physics Number"  value={this.state.physics} onChange={(ev) => this.changeState(ev)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label className="needed">Maths</label>
                                <input type="number" name="maths" className="form-control" placeholder="Please Enter Your Maths Number"  value={this.state.maths} onChange={(ev) => this.changeState(ev)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label className="needed">Roll Number</label>
                                <input type="number" name="rollNo" className="form-control" placeholder="Please Enter Your Roll Number"  value={this.state.rollNo} onChange={(ev) => this.changeState(ev)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <button className="btn regsiter_btn" type="button" onClick={(ev) => {this.addData(ev);}}>
                                {
                                    this.props.params.id ? "Update Marksheet" : "Add Marksheet"
                                }
                            </button>
                        </div>
                        <button className="btn regsiter_btn" type="button" onClick={(ev) => {this.resetForm(ev);}}>
                               Reset
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
  }
}
export default withRouter(AddMarksheet)