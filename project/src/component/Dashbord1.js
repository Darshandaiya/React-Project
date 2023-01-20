import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Footer from './Footer';
// import Login from './Login';
// import ReactDOM from "react-dom";
import { FaUser } from 'react-icons/fa';
import logo from '../assets/images/NCSlogo.jpeg'
import withRouter from "./withRouter";



 class Dashbord1 extends Component {
    
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="container">
                        {/* <p className="navbar-brand">Rays Technology</p> */}
                        <div className="logo_img">
                            <img src={logo} alt="img" />
                        </div>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">
                                {!localStorage.token ? <> <li className="nav-item">
                                    <Link className="nav-link" to='/Registration'>Registration</Link>
                                </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/Login'>Login</Link>
                                    </li></> :
                                    <><li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                            Marksheet
                                        </Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <Link className="dropdown-item" to='/addmarksheet'>Add Marksheet</Link>
                                            <Link className="dropdown-item" to='/marksheetlist'>Marksheet List</Link>
                                            <Link className="dropdown-item" to='/datatable'>Data Table</Link>

                                        </div>
                                    </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                User
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <Link className="dropdown-item" to='/adduser'>Add User</Link>
                                                <Link className="dropdown-item" to='/userlist'>User List</Link>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                Collage
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <Link className="dropdown-item" to='/addcollage'>Add Collage</Link>
                                                <Link className="dropdown-item" to='/collagelist'>Collage List</Link>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                Student
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <Link className="dropdown-item" to='/addstudent'>Add Student</Link>
                                                <Link className="dropdown-item" to='/studentlist'>Student List</Link>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                Role
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <Link className="dropdown-item" to='/addroll'>Add Role</Link>
                                                <Link className="dropdown-item" to='/rolelist'>Role List</Link>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                 <FaUser/> :  {"   "}
                                        {/* {this.props.params.name.charAt(0).toUpperCase() +
                                             this.props.params.name.slice(1).toLowerCase()}  */}
                                                DARSHAN
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <Link className="dropdown-item"
                                                    onClick={() => {
                                                        localStorage.clear()
                                                        window.location.href = "/Login"
                                                    }}
                                                >
                                                    Log Out
                                                </Link>
                                            </div>
                                        </li> </>
                                }
                            </ul>
                            <div className="dropdown">



                            </div>


                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}
export default withRouter(Dashbord1)