import React, { useState } from 'react'
import Axios from 'axios';
import Header from './Header'
import Sidebar from './Sidebar'
import { useNavigate, Link } from "react-router-dom";


export default function AddPatient() {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  const addDetails = (e) => {
    e.preventDefault();
    Axios.post('https://dentist-api.onrender.com/create', {
      name: name,
      contact: contact,
      address: address
    }).then((res) => {
      console.log(res);
      navigate("/")

    })
  }

  return (

    <div className="page-wrapper">
      <Header />
      <div className="content container-fluid content-wrap">
        {/* Profile Information */}
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Patient Registration</h4>
              </div>
              <div className="card-body">
                <form action="#">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Patient Name</label>
                        <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" onChange={(e) => setAddress(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label className="d-block">Gender:</label>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" id="gender_male" defaultValue="option1" />
                          <label className="form-check-label" htmlFor="gender_male">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" id="gender_female" defaultValue="option2" />
                          <label className="form-check-label" htmlFor="gender_female">Female</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Contact</label>
                        <input type="text" className="form-control" onChange={(e) => setContact(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label>Blood Group</label>
                        <select className="form-select">
                          <option>Select</option>
                          <option value={1}>A+</option>
                          <option value={2}>O+</option>
                          <option value={3}>B+</option>
                          <option value={4}>AB+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                    <div className="submit-sec">
                      <button type="submit" className="btn btn-primary" onClick={addDetails}>Submit</button>
                      <Link to='/'>
                        <button type="submit" className="btn btn-secondary" style={{ marginLeft: '20px' }}>
                          Cancel
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Profile Information */}
      </div>
      <Sidebar />
    </div>


  )
}
