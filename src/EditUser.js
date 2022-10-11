import React from 'react'

function EditUser() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6'>
                <div className='form-group'>
                    <label>UserName</label>
                    <input type={"text"} className='form-control'></input>
                </div>
            </div>
            <div className='col-lg-6'>
            <div className='form-group'>
                    <label>Email</label>
                    <input type={"email"} className='form-control'></input>
                </div>
            </div>
              <div className='col-lg-4'>
              <div className='form-group'>
                    <label>Country</label>
                    <select className='form-control'>
                        <option>India</option>
                        <option>China</option>
                        <option>Sri Lanka</option>
                    </select>
                </div>
              </div>
              <div className='col-lg-4'>
              <div className='form-group'>
                    <label>State</label>
                    <select className='form-control'>
                        <option>TamilNadu</option>
                        <option>Kerala</option>
                        <option>Karnataka</option>
                    </select>
                </div>
              </div>
              <div className='col-lg-4'>
              <div className='form-group'>
                    <label>Area</label>
                    <select className='form-control'>
                        <option>Chennai</option>
                        <option>Cochin</option>
                        <option>Bangalore</option>
                    </select>
                </div>
              </div>
              <div className='col-lg-4'>
              <div className='form-group'>
                    <label>DOB</label>
                    <input type={"date"} className='form-control'>
                        
                    </input>
                </div>
              </div>
              <div className='col-lg-4'>
              <div className='form-group'>
                    <label>Phone</label>
                    <input type={"text"} className="form-control"></input>
                </div>
              </div>
              <div className='col-lg-4'>
              <div className='form-group'>
                    <label>Gender</label>
                    <select className='form-control'>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
              </div>
              <div className='col-lg-4'>
              <div className='form-group'>
                    <button className='btn btn-primary'>Submit</button>
                </div>
              </div>
        </div>
    </div>
  )
}

export default EditUser