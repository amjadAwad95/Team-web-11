// src/components/NavBar.js
import React from 'react';
import './NavBar.css'; // Import your custom CSS file

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary text-white">
      <div className="container-fluid">
        <form className="d-flex">
          <input className="form-control me-2" type="text" placeholder="Search" />
          <button className="btn btn-success" type="submit">
            <i className="bi bi-search"></i> Search
          </button>
        </form>
        <div className="navbar-nav ms-auto">
          <button className="btn btn-outline-light me-2">
            <i className="bi bi-play"></i> Demo
          </button>
          <button className="btn btn-outline-light me-2">
            <i className="bi bi-file"></i> Pages
          </button>
          <button className="btn btn-outline-light me-2">
            <i className="bi bi-person"></i> Accounts
          </button>
          <button className="btn btn-outline-light me-2">
            <i className="bi bi-diagram-3"></i> My Network
          </button>
          <button className="btn btn-outline-light me-2">
            <i className="bi bi-chat-dots"></i> Messages
          </button>
          <button className="btn btn-outline-light me-2">
            <i className="bi bi-broadcast"></i> Broadcast
          </button>
          <div className="dropdown">
            <button className="btn btn-outline-light me-2 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-gear"></i> Settings
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><a className="dropdown-item" href="#">Account Settings</a></li>
              <li><a className="dropdown-item" href="#">Privacy</a></li>
            </ul>
          </div>
          <button className="btn btn-outline-light me-2">
            <i className="bi bi-bell"></i> Notifications
          </button>
          <div className="profile-badge">
            <img src="https://via.placeholder.com/30" alt="Profile" className="rounded-circle" />
            <span className="badge bg-success">3</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
