import React from 'react'

export default function Header() {
  return (
<div className="header">
  {/* Logo */}
  <div className="header-left">
    <a href="index.html" className="logo">
      <img src="assets/img/logo.png" alt="Logo" />
    </a>
    <a href="index.html" className="logo logo-small">
      <img src="assets/img/logo-small.png" alt="Logo" width={30} height={30} />
    </a>
    <a href="javascript:void(0);" id="toggle_btn">
      <i className="feather-chevrons-left" />
    </a>
  </div>
  {/* /Logo */}
  {/* Search */}
  <div className="top-nav-search">
    <div className="main">
      <form className="search" method="post" action="index.html">
        <div className="s-icon"><i className="fas fa-search" /></div>
        <input type="text" className="form-control" placeholder="Start typing your Search..." />
        <ul className="results">
          <li>
            <h6><i className="feather-calendar me-1" /> Appointments</h6>
            <p>No matched Appointment found. <a href="upcoming-appointments.html"><span>View all</span></a></p>
          </li>
          <li>
            <h6><i className="feather-calendar me-1" /> Specialities</h6>
            <p>No matched Appointment found. <a href="specialities.html"><span>View all</span></a></p>
          </li>
          <li>
            <h6><i className="feather-user me-1" /> Doctors</h6>
            <p>No matched Appointment found. <a href="doctor-list.html"><span>View all</span></a></p>
          </li>
          <li>
            <h6><i className="feather-users me-1" /> Patients</h6>
            <p>No matched Appointment found. <a href="patient-list.html"><span>View all</span></a></p>
          </li>
        </ul>
      </form>
    </div>
  </div>
  {/* /Search */}
  {/* Mobile Menu Toggle */}
  <a className="mobile_btn" id="mobile_btn">
    <i className="fas fa-bars" />
  </a>
  {/* /Mobile Menu Toggle */}
  {/* Header Menu */}
  <ul className="nav nav-tabs user-menu">
    {/* Flag */}
    <li className="nav-item">
      <a href="#" id="dark-mode-toggle" className="dark-mode-toggle">
        <i className="feather-sun light-mode" /><i className="feather-moon dark-mode" />
      </a>
    </li>
    {/* /Flag */}
    {/* Notifications */}
    <li className="nav-item dropdown noti-nav">
      <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
        <i className="feather-bell" /> <span className="badge" />
      </a>
      <div className="dropdown-menu notifications">
        <div className="topnav-dropdown-header">
          <span className="notification-title">Notifications</span>
          <a href="javascript:void(0)" className="clear-noti"><i className="feather-more-vertical" /></a>
        </div>
        <div className="noti-content">
          <ul className="notification-list">
            <li className="notification-message">
              <a href="#">
                <div className="media d-flex">
                  <span className="avatar">
                    <img className="avatar-img" alt src="assets/img/profiles/avatar-02.jpg" />
                  </span>
                  <div className="media-body">
                    <h6>Travis Tremble <span className="notification-time">18.30 PM</span></h6>
                    <p className="noti-details">Sent a amount of $210 for his Appointment  <span className="noti-title">Dr.Ruby perin </span></p>
                  </div>
                </div>
              </a>
            </li>
            <li className="notification-message">
              <a href="#">
                <div className="media d-flex">
                  <span className="avatar">
                    <img className="avatar-img" alt src="assets/img/profiles/avatar-05.jpg" />
                  </span>
                  <div className="media-body">
                    <h6>Travis Tremble <span className="notification-time">12 Min Ago</span></h6>
                    <p className="noti-details"> has booked her appointment to  <span className="noti-title">Dr. Hendry Watt</span></p>
                  </div>
                </div>
              </a>
            </li>
            <li className="notification-message">
              <a href="#">
                <div className="media d-flex">
                  <div className="avatar">
                    <img className="avatar-img" alt src="assets/img/profiles/avatar-03.jpg" />
                  </div>
                  <div className="media-body">
                    <h6>Travis Tremble <span className="notification-time">6 Min Ago</span></h6>
                    <p className="noti-details"> Sent a amount  $210 for his Appointment   <span className="noti-title">Dr.Maria Dyen</span></p>
                  </div>
                </div>
              </a>
            </li>
            <li className="notification-message">
              <a href="#">
                <div className="media d-flex">
                  <div className="avatar avatar-sm">
                    <img className="avatar-img" alt src="assets/img/profiles/avatar-06.jpg" />
                  </div>
                  <div className="media-body">
                    <h6>Travis Tremble <span className="notification-time">8.30 AM</span></h6>
                    <p className="noti-details"> Send a message to his doctor</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
    {/* /Notifications */}
    {/* User Menu */}
    <li className="nav-item dropdown main-drop">
      <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
        <span className="user-img">
          <img src="assets/img/profiles/avatar-01.jpg" alt />
          <span className="status online" />
        </span>
      </a>
      <div className="dropdown-menu">
        <div className="user-header">
          <div className="avatar avatar-sm">
            <img src="assets/img/profiles/avatar-01.jpg" alt="User Image" className="avatar-img rounded-circle" />
          </div>
          <div className="user-text">
            <h6>Robert Haddin</h6>
            <p className="text-muted mb-0">Administrator</p>
          </div>
        </div>
        <a className="dropdown-item" href="profile.html"><i className="feather-user me-1" /> My Profile</a>
        <a className="dropdown-item" href="profile.html"><i className="feather-edit me-1" /> Edit Profile</a>
        <a className="dropdown-item" href="account-settings.html"><i className="feather-sliders me-1" /> Account Settings</a>
        <hr className="my-0 ms-2 me-2" />
        <a className="dropdown-item" href="login.html"><i className="feather-log-out me-1" /> Logout</a>
      </div>
    </li>
    {/* /User Menu */}
  </ul>
  {/* /Header Menu */}
</div>

  )
}
