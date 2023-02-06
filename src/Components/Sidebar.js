import React from 'react'
import AddPatient from './AddPatient'

export default function Sidebar() {
  return (
    <div className="main-wrapper">
 
  {/* Sidebar */}
  <div className="sidebar" id="sidebar">
    <div className="sidebar-scroll">
      <div id="sidebar-menu" className="sidebar-menu">
        <ul>
          <li className="menu-title"><span>Main</span></li>
          <li>
            <a href="index.html"><i className="feather-grid" /> <span>Dashboard</span></a>
          </li>
          <li>
            <a href="upcoming-appointments.html"><i className="feather-calendar" /> <span>Appointments</span></a>
          </li>
          <li>
            <a href="specialities.html"><i className="feather-package" /> <span>Specialities</span></a>
          </li>
          <li>
            <a href="doctor-list.html"><i className="feather-user-plus" /> <span>Doctors</span></a>
          </li>
          <li className="active">
            <a href="patient-list.html"><i className="feather-users" /> <span>Patients</span></a>
          </li>
          <li>
            <a href="ratings.html"><i className="feather-star" /> <span>Reviews</span></a>
          </li>
          <li>
            <a href="transaction.html"><i className="feather-credit-card" /> <span>Transactions</span></a>
          </li>
          <li>
            <a href="settings.html"><i className="feather-sliders" /> <span> Settings</span></a>
          </li>
          <li className="submenu">
            <a href="#"><i className="feather-file-text" /> <span> Reports</span> <span className="menu-arrow" /></a>
            <ul>
              <li><a href="appointment-report.html">Appointment Report</a></li>
              <li><a href="income-report.html">Income Report</a></li>
              <li><a href="invoice-report.html">Invoice Report</a></li>
              <li><a href="user-reports.html">Users Report</a></li>
            </ul>
          </li>								
          <li className="menu-title"> 
            <span>Pharmacy</span>
          </li>	
          <li className="submenu">
            <a href="#"><i className="feather-file-plus" /> <span> Pharmacies</span> <span className="menu-arrow" /></a>
            <ul>
              <li><a href="pharmacy-list.html">All Pharmacies</a></li>
              <li><a href="pharmacy-category.html">Categories</a></li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#"><i className="feather-shopping-cart" /> <span> Product List</span> <span className="menu-arrow" /></a>
            <ul>
              <li><a href="product-list.html">All Products</a></li>
              <li><a href="product-category.html">Categories</a></li>
            </ul>
          </li>					
                <li className="menu-title"> 
            <span>UI Interface</span>
          </li>
          <li> 
            <a href="components.html"><i className="feather-pocket" /> <span>Components</span></a>
          </li>
          <li className="submenu">
            <a href="#"><i className="feather-file-minus" /> <span> Forms </span> <span className="menu-arrow" /></a>
            <ul>
              <li><a href="form-basic-inputs.html">Basic Inputs </a></li>
              <li><a href="form-input-groups.html">Input Groups </a></li>
              <li><a href="form-horizontal.html">Horizontal Form </a></li>
              <li><a href="form-vertical.html"> Vertical Form </a></li>
              <li><a href="form-mask.html">Form Mask </a></li>
              <li><a href="form-validation.html">Form Validation </a></li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#"><i className="feather-align-justify" /> <span> Tables </span> <span className="menu-arrow" /></a>
            <ul>
              <li><a href="tables-basic.html">Basic Tables </a></li>
              <li><a href="data-tables.html">Data Table </a></li>
            </ul>
          </li>
          <li className="submenu">
            <a href="javascript:void(0);"><i className="feather-life-buoy" /> <span>Multi Level</span> <span className="menu-arrow" /></a>
            <ul style={{display: 'none'}}>
              <li className="submenu">
                <a href="javascript:void(0);"> <span>Level 1</span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a href="javascript:void(0);"><span>Level 2</span></a></li>
                  <li className="submenu">
                    <a href="javascript:void(0);"> <span> Level 2</span> <span className="menu-arrow" /></a>
                    <ul style={{display: 'none'}}>
                      <li><a href="javascript:void(0);">Level 3</a></li>
                      <li><a href="javascript:void(0);">Level 3</a></li>
                    </ul>
                  </li>
                  <li><a href="javascript:void(0);"> <span>Level 2</span></a></li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0);"> <span>Level 1</span></a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/* /Sidebar */}
  

</div>
  
  )
}
