import { Component } from "react";

export default class BaseCtrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNo: "",
      address: "",
      // loginId: "",
      password: "",
      city: "",
      state: "",
      studentId: "",
      chemistry: "",
      maths: "",
      physics: "",
      discription: "",
      lastName: "",
      firstName: "",
      collegeId: "",
      mobileNo: "",
      email: "",
      collegeName: "",
      rollNo: "",
     
    
      txtClr:"",
     
      list: [],
    };
  }

  changeState(ev) {
    let name = ev.target.name;
    let value = ev.target.value;
    this.setState({ [name]: value });
  }
};