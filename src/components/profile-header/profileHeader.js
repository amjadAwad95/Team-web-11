import React, { useState } from "react";

import profilePhoto from "./images/profilephoto.jpg";
import coverPhoto from "./images/coverphoto.jpg";
import "../profile-header/profileHeader.css"




const ProfileHeader = () => {
  const [userData, setUserData] = useState({
    username: "Sam Lanson",
    work: "Lead Developer",
    location: "New Hamphire",
    joinedDate: " Nov 26, 2019",
    connections: 250,
    isVerified: true,
    profilePictureUrl: profilePhoto,
    coverPhotoUrl: coverPhoto,
  });
  const [active, setActive] = useState("Posts")

  return (
    <div className="container mx-5">
      <div className="row justify-content-start">
        <div className="call-md-8">
          <section className="mx-auto">
            <div className="card">
              <div className="card-head d-flex">
                <div className="background-image" style={{ backgroundImage: `url(${userData.coverPhotoUrl})` }}></div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <div>
                    <img src={userData.profilePictureUrl} alt="Profile" className="user-image mx-4" style={{ width: "150px", height: "150px" }} />
                  </div>
                  <div style={{ lineHeight: "25px" }}>
                    <p className="user-name"> {userData.username}</p>
                    <span>{userData.connections} connections</span>
                  </div>
                  {userData.isVerified && (
                    <i style={{ color: "green" }} className="bi bi-patch-check-fill mx-1"></i>
                  )}

                </div>
                <div>

                  <button className="btn ml-auto" style={{ background: "#fae8eb", color: "#dc3545" }} >
                    <i className="bi bi-pencil-fill mx-2" style={{ color: "#dc3545" }}></i>
                    Edit Profile
                  </button>
                  <button className="btn mx-2" style={{ background: "#eef0f2" }}>
                    <i className="bi bi-three-dots" variant="light" >
                    </i>
                  </button>
                </div>
              </div>
              < div className="card-body me-auto">

                <i className="bi bi-briefcase mx-3"></i>
                {userData.work}



                <i className="bi bi-geo-alt-fill mx-3" ></i>
                {userData.location}


                <i className="bi bi-calendar2-plus mx-3"></i>
                Joined on {userData.joinedDate}


              </div>
              <div>
              </div>

              <div className="card-footer mx-3 ">
                <ul className="nav " >
                  <li><a className={active == "Posts" ? "active" : "non-active"} onClick={() => { setActive("Posts") }}>Posts</a></li>
                  <li><a className={active == "About" ? "active" : "non-active"} onClick={() => { setActive("About") }}>About</a></li>

                  <li><a className={active == "Connections" ? "active" : "non-active"} onClick={() => { setActive("Connections") }}>Connections
                    <span className="connection-count">230</span></a></li>

                  <li><a className={active == "Media" ? "active" : "non-active"} onClick={() => { setActive("Media") }}>Media</a></li>
                  <li><a className={active == "Videos" ? "active" : "non-active"} onClick={() => { setActive("Videos") }}>Videos</a></li>
                  <li><a className={active == "Events" ? "active" : "non-active"} onClick={() => { setActive("Events") }}>Events</a></li>
                  <li><a className={active == "Activity" ? "active" : "non-active"} onClick={() => { setActive("Activity") }}>Activity</a></li>

                </ul>
              </div>


            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;

