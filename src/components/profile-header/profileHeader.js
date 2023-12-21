import React, { useState, useEffect } from "react";

import profilePhoto from "./images/profilephoto.jpg";
import coverPhoto from "./images/coverphoto.jpg";
import "../profile-header/profileHeader.css"
import { db } from "../../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";


const ProfileHeader = () => {
  const [userData, setUserData] = useState();
  const [Header, setHeader] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'Header'), (snapshot) =>
        setHeader(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),

    []

  );

  const [active, setActive] = useState("Posts")

  return (
    <div className="container mx-4">
      {Header.map((Header) => (
        <div className="row justify-content-start" key={Header.id}>
          <div className="col-md-20">
            <div className="card mx-4">
              <div
                className="background-image"
                style={{ backgroundImage: `url(${Header.coverPhotoUrl})` }}
              ></div>
              <div className="card-body py-0">
                <div className="d-sm-flex align-items-start text-center text-sm-start">
                  <div>
                    <div className="avatar avatar-xxl mt-n5 mb-3" style={{ marginTop: "-60px" }}>
                      <img
                        className="avatar-img rounded-circle border border-white border-3"
                        src={Header.profilePictureUrl}
                        alt=""
                        style={{ width: "150px", height: "150px" }}
                      />
                    </div>
                  </div>
                  <div className="ms-sm-4 mt-sm-3">
                    <h1 className="mb-0 h5">
                      {Header.userName}{" "}
                      {Header.isVerified && (
                        <i className="bi bi-patch-check-fill text-success small" />
                      )}
                    </h1>
                    <p>{Header.connections} connections</p>
                  </div>
                  <div className="d-flex mt-3 justify-content-center ms-sm-auto">
                    <button
                      className="btn btn-danger-soft me-2"
                      type="button"
                      style={{ background: "#fae8eb", color: "#dc3545" }}
                    >
                      <i className="bi bi-pencil-fill pe-1" />  {Header.editButton}
                    </button>
                    <div className="dropdown">
                      <button
                        className="icon-md btn btn-light"
                        type="button"
                        id="profileAction2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots" />
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="profileAction2"
                      >

                        <li><a class="dropdown-item" href="#"> <i class="bi bi-lock fa-fw pe-2"></i>{Header.loackProfile}</a></li>
                        <li> <a class="dropdown-item" href="#"> <i class="bi bi-gear fa-fw pe-2"></i>{Header.settingsButton}</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <ul className="list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0 ">
                  <li className="list-inline-item">
                    <i className="bi bi-briefcase me-1" />{Header.work}
                  </li>
                  <li className="list-inline-item">
                    <i className="bi bi-geo-alt me-1" /> {Header.location}
                  </li>
                  <li className="list-inline-item">
                    <i className="bi bi-calendar2-plus me-1" /> Joined on {Header.joinedDate}
                  </li>
                </ul>
              </div>
              <div className="card-footer mt-3 pt-2 pb-0 mx-3">
                <ul className="nav nav-bottom-line align-items-center justify-content-center justify-content-md-start mb-0 border-0">
                  <li className="nav-item">
                    <a
                      className={`nav-link ${active === "Posts" ? "active" : "non-active"}`}
                      onClick={() => setActive("Posts")}
                    >
                      {Header.postButton}
                    </a>
                  </li>
                  <li><a className={active == "About" ? "active" : "non-active"} onClick={() => { setActive("About") }}> {Header.aboutButton}</a></li>

                  <li><a className={active == "Connections" ? "active" : "non-active"} onClick={() => { setActive("Connections") }}>{Header.connectionButton}
                    <span className="connection-count">{Header.connections}</span></a></li>

                  <li><a className={active == "Media" ? "active" : "non-active"} onClick={() => { setActive("Media") }}>{Header.mediaButton}</a></li>
                  <li><a className={active == "Videos" ? "active" : "non-active"} onClick={() => { setActive("Videos") }}> {Header.videosButton}</a></li>
                  <li><a className={active == "Events" ? "active" : "non-active"} onClick={() => { setActive("Events") }}> {Header.eventButton}</a></li>
                  <li><a className={active == "Activity" ? "active" : "non-active"} onClick={() => { setActive("Activity") }}> {Header.activityButton}</a></li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileHeader;

