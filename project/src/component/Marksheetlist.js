import React from "react";
import axios from "axios";
import BaseCtrl from "../BaseCtrl";
import { Button, Container, Form } from 'react-bootstrap'
import { Link} from "react-router-dom";


export default class Marksheetlist extends BaseCtrl {
  constructor() {
    super();
    this.search();
  }
  search() {
    let url = "http://api.sunilos.com:9080/ORSP10/Marksheet/search";
    axios.post(url, this.state).then((res) => {
      console.log(res);
      this.setState({ list: res.data.result.data });
    });
  }
  delete(id) {
    console.log(this.state.message)
    let _self = this;
    let url = "http://api.sunilos.com:9080/ORSP10/Marksheet/delete/" + id;
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
            <h1 className="mb-5 mt-5 pt-2 text-center">Marksheet List</h1>
            <Form id="sign-in-form" className="text-left mb-3 w-50">
              {/* <div> <FormMessage  error={this.getInputError("error")} message={this.getInputError("message")} /> </div> */}
              {/* 
            <input type="text" name="loginId" value={this.state.loginId}
        onChange={(event) => this.changeState(event)} placeholder="search by loginId"/>
        &nbsp;  &nbsp; */}

              {/* <input type="text" name="roleId" value={this.state.roleId}
        onChange={(event) => this.changeState(event)} placeholder="search by roleId"/>
        &nbsp;  &nbsp;
        <Button type='button' onClick={(event) => this.search(event)} >Search </Button>*/}
            </Form>
          </Container>

          <table className='table' >
            <thead>
              <tr>
                <th>Index</th>
                <th>Id</th>
                <th>Roll No.</th>
                <th>Name</th>
                <th>Physics</th>
                <th>Chemistry</th>
                <th>Maths</th>
                <th>Total Marks</th>
                <th>Percentage</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.list.map((ele, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{ele.id}</td>
                  <td>{ele.rollNo}</td>
                  <td>{ele.name}</td>
                  <td>{ele.physics}</td>
                  <td>{ele.chemistry}</td>
                  <td>{ele.maths}</td>
                  <td>{ele.physics + ele.chemistry + ele.maths}</td>
                  <td>
                    {((ele.physics + ele.chemistry + ele.maths) / 3).toFixed(2)}%
                  </td>
                  <td> <Link className="btn btn-primary" to={"/addmarksheet/" +ele.id} >Edit</Link> </td>
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
