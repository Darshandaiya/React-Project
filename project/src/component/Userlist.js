import React from "react";
import axios from "axios";
import BaseCtrl from "../BaseCtrl";
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from "react-router-dom";


export default class UserList extends BaseCtrl {
  constructor() {
    super();
    this.search();
  }
  search() {
    let url = "http://api.sunilos.com:9080/ORSP10/User/search";
    axios.post(url, this.state).then((res) => {
      console.log(res);
      this.setState({ list: res.data.result.data });
    });
  }
  delete(id) {
    console.log(this.state.message)
    let _self = this;
    let url = "http://api.sunilos.com:9080/ORSP10/Auth/delete/" + id;
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
      <div className="container mt-3" >
        <Container id='main-container' className="d-grid h-50">
          <h1 className="mb-5 mt-5 pt-2 text-center">User List</h1>
          <Form id="sign-in-form" className="text-left mb-3 w-50">

          </Form>
        </Container>
        <table className='table' >
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Login Id</th>
              <th>Role Id</th>
              <th>Edit</th>
              <th>Delete</th>

            </tr>
          </thead>
          <tbody>
            {this.state.list.map((ele, i) => (
              <tr key={i}>
                <td>{ele.id}</td>
                <td>{ele.firstName}</td>
                <td>{ele.lastName}</td>
                <td>{ele.loginId}</td>
                <td>{ele.roleId}</td>
                <td> <Link className="btn btn-primary" to={"/adduser/" +ele.id} >Edit</Link> </td>
                <td> <Button type='button' onClick={(ev) => this.delete(ele.id)} >Delete</Button> </td>
                <td>

                </td>
              </tr>
            ))

            }
          </tbody>

        </table>
      </div>
    );
  }
}
