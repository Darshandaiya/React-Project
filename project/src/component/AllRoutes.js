import React, { Component } from 'react'
import Login from '../component/Login';
import Registration from '../component/Registration';
import UserList from '../component/Userlist';
import Adduser from '../component/Adduser';
import Rolelist from '../component/Rolelist';
import Addroll from '../component/Addroll';
import Marksheetlist from '../component/Marksheetlist';
import AddMarksheet from '../component/AddMarksheet';
import Collagelist from '../component/Collagelist';
import Addcollage from '../component/Addcollage';
import Studentlist from '../component/Studentlist';
import Addstudent from '../component/Addstudent';
import Datatable from '../component/Datatable';
import { Route, Routes, } from 'react-router-dom'
import Home from './Home';

export default class AllRoutes extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Registration" element={<Registration />} />
                    <Route path="/userlist" element={<UserList />} />
                    <Route path="/adduser" element={<Adduser />} />
                    <Route path="/rolelist" element={<Rolelist />} />
                    <Route path="/addroll" element={<Addroll />} />
                    <Route path="/marksheetlist" element={<Marksheetlist />} />
                    <Route path="/addmarksheet" element={<AddMarksheet />} />
                    <Route path="/collagelist" element={<Collagelist />} />
                    <Route path="/addcollage" element={<Addcollage />} />
                    <Route path="/studentlist" element={<Studentlist />} />
                    <Route path="/addstudent" element={<Addstudent />} />
                    <Route path="/datatable" element={<Datatable />} />
                    <Route path="/addroll/:id" element={<Addroll />} />
                    <Route path="/addmarksheet/:id" element={<AddMarksheet />} />
                    <Route path="/adduser/:id" element={<Adduser />} />
                    <Route path="/addcollage/:id" element={<Addcollage />} />
                    <Route path="/addstudent/:id" element={<Addstudent />} />
                </Routes>
            </div>
        )
    }
}
