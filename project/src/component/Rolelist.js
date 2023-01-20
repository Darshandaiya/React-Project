import React from "react";
import axios from "axios";
import BaseCtrl from "../BaseCtrl";
import {  Button, Container, Form } from 'react-bootstrap'
import { Link } from "react-router-dom";


export default class RoleList extends BaseCtrl {
  constructor() {
    super();
    this.search();
  }
  search() {
    let url = "http://api.sunilos.com:9080/ORSP10/Role/search";
    axios.post(url, this.state).then((res) => {
      console.log(res);
      this.setState({ list: res.data.result.data });
    });
  }

  delete(id) {
    console.log(this.state.message)
    let _self = this;
    let url = "http://api.sunilos.com:9080/ORSP10/Role/delete/" + id;
    axios.get(url).then((res) => {
      _self.list = res.data.result.data;
      this.search();
      console.log(res.data.result);
      this.getInputError("message", "Data Deleted Successfully");
      this.getInputError("error", "false");
      this.search();
    });
  }

  render() {
    return (
      <>
        <div className="container mt-3" >
          <Container id='main-container' className="d-grid h-50">
            <h1 className="mb-5 mt-5 pt-2 text-center">Role List</h1>
            <Form id="sign-in-form" className="text-left mb-3 w-50">

            </Form>
          </Container>

          <table className='table' >
            <thead>
              <tr>
                <th>Index</th>
                <th>Id</th>
                <th>Name</th>
                <th>Created By</th>
                <th>Creation Date</th>
                <th>Modified By</th>
                <th>Modification Date</th>
                <th>Description</th>
                <th>Status</th>
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
                  <td>{ele.createdBy}</td>
                  <td>{new Date(ele.createdDatetime).toDateString()}</td>
                  <td>{ele.modifiedBy}</td>
                  <td>{new Date(ele.modifiedDatetime).toDateString()}</td>
                  <td>{ele.discription}</td>
                  <td>{ele.status}</td>
                  <td> <Link className="btn btn-primary" to={"/addroll/" +ele.id} >Edit</Link> </td>
                  <td> <Button type='button' onClick={(ev) => this.delete(ele.id)} >Delete</Button> </td>


                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </>
    );
  }
}
