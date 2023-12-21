import React, { useState } from "react";

import "../profile-header/profileHeader.css"
import { useFireBase } from "../../firebase/useFireBase";

const ProfileHeader = () => {
  const { data } = useFireBase("Header")
  const [active, setActive] = useState("Posts")

  return data.map((headerData) => {
    return (
      <div className="card" key={headerData.id}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${headerData.coverPhotoUrl})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
        ></div>
        <div className="card-body py-0">
          <div className="d-sm-flex align-items-start text-center text-sm-start">
            <div>
              <div className="avatar avatar-xxl mt-n5 mb-3" style={{ marginTop: "-60px" }}>
                <img
                  className="avatar-img rounded-circle border border-white border-3"
                  src={headerData.profilePictureUrl}
                  alt=""
                  style={{ width: "150px", height: "150px" }}
                />
              </div>
            </div>
            <div className="ms-sm-4 mt-sm-3">
              <h1 className="mb-0 h5">
                {headerData.userName}{" "}
                {headerData.isVerified && (
                  <i className="bi bi-patch-check-fill text-success small" />
                )}
              </h1>
              <p>{headerData.connections} connections</p>
            </div>
            <div className="d-flex mt-3 justify-content-center ms-sm-auto">
              <button
                className="btn btn-danger-soft me-2"
                type="button"
                style={{ background: "#fae8eb", color: "#dc3545" }}
              >
                <i className="bi bi-pencil-fill pe-1" /> {headerData.editButton}
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

                  <li><a className="dropdown-item" href="#"> <i className="bi bi-lock fa-fw pe-2"></i>{headerData.loackProfile}</a></li>
                  <li> <a className="dropdown-item" href="#"> <i className="bi bi-gear fa-fw pe-2"></i>{headerData.settingsButton}</a></li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0 ">
            <li className="list-inline-item">
              <i className="bi bi-briefcase me-1" /> {headerData.work}
            </li>
            <li className="list-inline-item">
              <i className="bi bi-geo-alt me-1" /> {headerData.location}
            </li>
            <li className="list-inline-item">
              <i className="bi bi-calendar2-plus me-1" /> Joined on {headerData.joinedDate}
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
                {headerData.postButton}
              </a>
            </li>
            <li><a className={active == "About" ? "active" : "non-active"} onClick={() => { setActive("About") }}>{headerData.aboutButton}</a></li>

            <li><a className={active == "Connections" ? "active" : "non-active"} onClick={() => { setActive("Connections") }}>{headerData.connectionButton}
              <span className="connection-count">{headerData.connections}</span></a></li>
            <li><a className={active == "Media" ? "active" : "non-active"} onClick={() => { setActive("Media") }}>{headerData.mediaButton}</a></li>
            <li><a className={active == "Videos" ? "active" : "non-active"} onClick={() => { setActive("Videos") }}>{headerData.videosButton}</a></li>
            <li><a className={active == "Events" ? "active" : "non-active"} onClick={() => { setActive("Events") }}>{headerData.eventButton}</a></li>
            <li><a className={active == "Activity" ? "active" : "non-active"} onClick={() => { setActive("Activity") }}>{headerData.activitesButton}</a></li>
          </ul>
        </div>
      </div>
    )
  });
};
export default ProfileHeader;

