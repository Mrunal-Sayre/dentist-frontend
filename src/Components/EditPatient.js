import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import Header from './Header'
import Sidebar from './Sidebar'
import { useNavigate, Link, useLocation } from "react-router-dom";

export default function EditPatient(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [id, setId] = useState('');
  const [details, setDetails] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [disability, setDisability] = useState('');
  const [gender, setGender] = useState('');
  

  useEffect(() => {
    var data = localStorage.getItem('data');
    var dataa = JSON.parse(data);
    setDetails(JSON.parse(data));
    setId(localStorage.getItem("id"));

    setName(dataa.name);
    setAddress(dataa.address);
    setContact(dataa.contact);
    setAge(dataa.age);
    setEmail(dataa.email);
    setDisability(dataa.disability);
    setGender(dataa.gender);
  }, []);

  const editDetails = (e) => {
    e.preventDefault();
    // console.log(name + contact + address + email + age + disability + gender + id);
    
    Axios.put(`https://dentist-api.onrender.com/${id}`, {
      name: name,
      contact: contact,
      address: address,
       email:email,
      age: age,
      disability: disability,
      gender: gender
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
                        <input type="text" className="form-control" defaultValue={details.name} onChange={(e) => setName(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" defaultValue={details.address} onChange={(e) => setAddress(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label>Age</label>
                        <input type="text" className="form-control" defaultValue={details.age} onChange={(e) => setAge(parseInt(e.target.value))} />
                      </div>
                      <div className="form-group">
                        <label className="d-block">Gender:</label>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" id="gender_male" defaultValue="male" onChange={(e) => setGender(e.target.value)} checked={details.gender == 'male' ? "checked" : null } />
                          <label className="form-check-label" htmlFor="gender_male">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" id="gender_female" defaultValue="female" onChange={(e) => setGender(e.target.value)} checked={details.gender == 'female' ? "checked" : null }/>
                          <label className="form-check-label" htmlFor="gender_female">Female</label>
                        </div>
                      </div>
     
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Contact</label>
                        <input type="text" className="form-control" defaultValue={details.contact} onChange={(e) => setContact(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control"defaultValue={details.email} onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label>Disability</label>
                        <input type="text" className="form-control" defaultValue={details.disability} onChange={(e) => setDisability(e.target.value)} />
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
