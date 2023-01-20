import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBDataTableV5 } from 'mdbreact';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const url = "http://api.sunilos.com:9080/ORSP10/College/search";

class Datatable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: true,
      tableRows: [],
    };
  }

  delete(key) {
    console.log(this.state.message)

    let urls = "http://api.sunilos.com:9080/ORSP10/College/delete/" + key;
    axios.get(urls).then((res) => {
      // self.list = res.data.result.data;
      console.log(res.data.result);
      // this.getInputError("message", "Data Deleted Successfully");
      // this.getInputError("error", "false");
      this.componentWillMount();
    });
  }
  componentWillMount = async () => {
    await axios.post(url, this.state)
      .then(response => response.data)
      .then(data => {
        // console.log(data);
        // if (err) throw err;
        this.setState({ posts: data.result.data })
        // console.log( data.result.data)
      })
      .then(async () => {
        this.setState({ tableRows: this.assemblePosts(), isLoading: true })
        // console.log(this.state.tableRows);
      });

  }

  assemblePosts = () => {
    let list = this.state.posts.map((post) => {
      return (
        {
          number: post.id,
          name: post.name,
          address: post.address,
          city: post.city,
          state: post.state,
          phoneNo:post.phoneNo,
          delete: <Button type='button' className='btn btn-danger table-button' onClick={() => this.delete(post.id)} > <i class="fas fa-trash"></i>
        </Button>,
        edit: <Link className="btn btn-primary" to={"/addcollage/" + post.id} ><i class="fa fa-edit"></i>
        </Link>
        
          
        }
      )
    });
    return list;
  }
  render() {
    const data = {
      columns: [
        // {
        //   label:'#',
        //   field:'key={index}',

        // },
        {
          label: 'id',
          field: 'number',
        },
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Address',
          field: 'address',
        },
        {
          label: 'City',
          field: 'city',
        },
        {
          label: 'State',
          field: 'state',
        },
        {
          label: 'Contact No',
          field: 'phoneNo',
        },
        {
          label: 'Edit',
          field: 'edit',
        },
        {
          label: "Delete",
          field: "delete",
          
        },
        
      ],
      rows: this.state.tableRows,
    }

    return (
      <MDBContainer className='mt-3'>
        <MDBRow className='py-3'>
          <MDBCol md='12'>
          <h1 className="mb-5 mt-0 pt-2 text-center">Collage List</h1>
            <MDBCard>
              <MDBCardBody id='test'>
                <MDBDataTableV5
                 hover
                 entriesOptions={[10,25,50,100]}
                 entries={10}
                 pagesAmount={4}
                 data={data}
                 searchTop
                 searchBottom={false}
                />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>)
  }
}

export default Datatable;