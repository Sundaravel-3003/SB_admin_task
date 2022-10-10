import React, { useState,useEffect } from 'react'
import {Link} from "react-router-dom";

function User() {
  const [users,setUsers]=useState([]);
  useEffect(() => {
    setUsers([
      {
        id:1,
        UserName:"Person1",
        Email:"person1@gmail.com",
        Country:"India",
        State:"TamilNadu",
        Area:"Chennai",
        DOB:"30/03/1999",
        Phone:"9047477342",
        Gender:"Male"
      },
      {
        id:2,
        UserName:"Person2",
        Email:"person2@gmail.com",
        Country:"India",
        State:"Kerala",
        Area:"Cochin",
        DOB:"02/03/1992",
        Phone:"9047474542",
        Gender:"Female"
      }
    ])
  }, [])
  
  return (
    <div>
      <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">Table</h1>
          <Link to={"/create_user"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            class="fas fa-download fa-sm text-white-50"></i> Create User</Link>
        </div>
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
          </div>
          <div class="card-body">
          <div class="table-responsive">
          <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
          <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>USerName</th>
                                            <th>Email</th>
                                            <th>Country</th>
                                            <th>State </th>
                                            <th>Area</th>
                                            <th>DoB</th>
                                            <th>Phone</th>
                                            <th>Gender</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                        <th>ID</th>
                                            <th>USerName</th>
                                            <th>Email</th>
                                            <th>Country</th>
                                            <th>State </th>
                                            <th>Area</th>
                                            <th>DoB</th>
                                            <th>Phone</th>
                                            <th>Gender</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                       {
                                        users.map((user)=>{
                                          return  <tr>
                                          <td>{user.id}</td>
                                          <td>{user.UserName}</td>
                                          <td>{user.Email}</td>
                                          <td>{user.Country}</td>
                                          <td>{user.State}</td>
                                          <td>{user.Area}</td>
                                          <td>{user.DOB}</td>
                                          <td>{user.Phone}</td>
                                          <td>{user.Gender}</td>
                                          <td><button className='btn btn-warning'>View</button></td>
                                      </tr>
                                        })
                                       }
                                       
                                        </tbody>
          </table>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User