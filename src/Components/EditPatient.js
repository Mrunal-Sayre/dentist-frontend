import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import Header from './Header'
import Sidebar from './Sidebar'
import { useNavigate, Link, useLocation } from "react-router-dom";

export default function EditPatient(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAddress(localStorage.getItem("address"));
    setContact(localStorage.getItem("contact"));
  }, []);

  const editDetails = (e) => {
    e.preventDefault();

    Axios.put(`https://dentist-api.onrender.com/update/${id}`, {
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
                        <input type="text" className="form-control" defaultValue={name} onChange={(e) => setName(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" defaultValue={address} onChange={(e) => setAddress(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Contact</label>
                        <input type="text" className="form-control" defaultValue={contact} onChange={(e) => setContact(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                    <div className="submit-sec">
                      <button type="submit" className="btn btn-primary" onClick={editDetails}>Submit</button>
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
