import React from "react";
import axios from "axios";
import BaseCtrl from "../BaseCtrl";
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from "react-router-dom";



 class Collagelist extends BaseCtrl {
  constructor() {
    super();
    this.search();
  }
  search() {
    let url = "http://api.sunilos.com:9080/ORSP10/College/search";
    axios.post(url, this.state).then((res) => {
      console.log(res);
      this.setState({ list: res.data.result.data });
    });
  }
  delete(id) {
    console.log(this.state.message)
    let _self = this;
    let url = "http://api.sunilos.com:9080/ORSP10/College/delete/" + id;
    axios.get(url).then((res) => {
      _self.list = res.data.result.data;
      console.log(res.data.result);
      this.getInputError("message", "Data Deleted Successfully");
      this.getInputError("error", "false");
      this.search();
    });
  }
  render() {
    return (
      <div className="container mt-3" >
      <Container id='main-container' className="d-grid h-50">
        <h1 className="mb-5 mt-5 pt-2 text-center">Collage List</h1>
        <Form id="sign-in-form" className="text-left mb-3 w-50">

        </Form>
      </Container>
      
        <table className='table' >
          <thead>
            <tr>
              <th>Index</th>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Contact Number</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((ele, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.address}</td>
                <td>{ele.city}</td>
                <td>{ele.state}</td>
                <td>{ele.phoneNo}</td>
                <td> <Link className="btn btn-primary" to={"/addcollage/" +ele.id} >Edit</Link> </td>
                <td> <Button type='button' onClick={(ev) => this.delete(ele.id)} >Delete</Button> </td>
              </tr>
            ))}
          </tbody>

        </table>
      
      </div>

    );
  }
}
export default Collagelist