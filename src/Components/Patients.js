import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Header from './Header'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom';

export default function Patients() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      Axios.get('https://dentist-api.onrender.com/listing').then((res) => {
        // console.log(res.data)
        setData(res.data)
      });
    }

    getData();
  }, []);

  const deleteDetails = (id) => {
    Axios.delete(`https://dentist-api.onrender.com/delete/${id}`)
      .then(res => {
        const arr = data.filter(item => item.id !== id);
        setData(arr);
      })
  }

  const setToLocalStorage = (val) => {
    console.log(val)
    localStorage.setItem("id", val.id);
    localStorage.setItem("data", JSON.stringify(val));
  }

  return (

    <div className="page-wrapper">
      <Header />
      {/* Patients List */}
      <div class="content container-fluid">
        <div className="row"> ,
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h5 className="card-title">Patients</h5>
                  </div>
                  <div className="col-auto custom-list d-flex">
                    <div className="multipleSelection">

                      <Link to='/add'>
                        <button type="submit" className="btn btn-primary">
                          Add Patient
                        </button>
                      </Link>

                    </div>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <table className="datatable table table-borderless hover-table" id="data-table">
                    <thead className="thead-light">
                      <tr>
                        <th>ID</th>
                        <th>Patient Name</th>
                        <th>Address</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    {
                      data.map((val, key) => {
                        return (
                          <tbody>

                            <tr>
                              <td>{val.id}</td>
                              <td>{val.name}</td>
                              <td>{val.address}</td>
                              <td>{val.age}</td>
                              <td>{val.gender}</td>

                              <td>
                                <div style={{ width: "35px", display: "inline", marginRight: "10px" }}>
                                  <Link
                                    to='/edit'
                                  // state={{data:data, id: val.id}}
                                  >
                                    <img src="https://cdn-icons-png.flaticon.com/512/3597/3597075.png" onClick={() => setToLocalStorage(val)} style={{ height: "20px", width: "20px" }} />
                                  </Link>
                                </div>
                                <div style={{ width: "35px", display: "inline" }}>
                                  <img src="https://cdn-icons-png.flaticon.com/512/6096/6096937.png" style={{ height: "20px", width: "20x" }} onClick={() => deleteDetails(val.id)} />
                                </div>
                              </td>
                            </tr>

                          </tbody>
                        )
                      })}

                  </table>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* /Patient List */}
      <Sidebar />
    </div>



  )
}
