import React, { useState } from "react";
import "../profile_header/profileHeader.css"
import { useFireBase } from "../../firebase/useFireBase";
import ProfileNavLinks from "./profileButtons.js";


const ProfileHeader = () => {
  const { data } = useFireBase("Header")
  const [active, setActive] = useState("Posts")

  return data.map((headerData) => {
    return (
      <div className="card" key={headerData.id}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${headerData.coverPhotoUrl})` }}
        ></div>
        <div className="card-body py-0">
          <div className="d-sm-flex align-items-start text-center text-sm-start">
            <div>
              <div className="avatar avatar-xxl mt-n5 mb-3" >
                <img
                  className="avatar-img rounded-circle border border-white border-3"
                  src={headerData.profilePictureUrl}
                  alt=""
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
          <ProfileNavLinks
            active={active}
            setActive={setActive}
            headerData={headerData}
          />
        </div>
      </div>
    )
  });
};
export default ProfileHeader;

