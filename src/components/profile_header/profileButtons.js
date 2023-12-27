

import React from "react";
import "../profile_header/profileHeader.css";
import "./profileHeader";
import { useFireBase } from "../../firebase/useFireBase";


const ProfileNavLinks = ({ active, setActive, headerData }) => {
    const { data } = useFireBase("Header")
    return data.map((headerData) => {
        return (

            <ul className="nav nav-bottom-line align-items-center justify-content-center justify-content-md-start mb-0 border-0" key={headerData.id}>
                <li className="nav-item">
                    <a
                        className={`nav-link ${active === "Posts" ? "active" : "non-active"}`}
                        onClick={() => setActive("Posts")}
                    >
                        {headerData.postButton}
                    </a>
                </li>
                <li>
                    <a
                        className={`nav-link ${active === "About" ? "active" : "non-active"}`}
                        onClick={() => setActive("About")}
                    >
                        {headerData.aboutButton}
                    </a>
                </li>
                <li>
                    <a
                        className={`nav-link ${active === "Connections" ? "active" : "non-active"}`}
                        onClick={() => setActive("Connections")}
                    >
                        {headerData.connectionButton}
                        <span className="connection-count">{headerData.connections}</span>
                    </a>
                </li>
                <li>
                    <a
                        className={`nav-link ${active === "Media" ? "active" : "non-active"}`}
                        onClick={() => setActive("Media")}
                    >
                        {headerData.mediaButton}
                    </a>
                </li>
                <li>
                    <a
                        className={`nav-link ${active === "Videos" ? "active" : "non-active"}`}
                        onClick={() => setActive("Videos")}
                    >
                        {headerData.videosButton}
                    </a>
                </li>
                <li>
                    <a
                        className={`nav-link ${active === "Events" ? "active" : "non-active"}`}
                        onClick={() => setActive("Events")}
                    >
                        {headerData.eventButton}
                    </a>
                </li>
                <li>
                    <a
                        className={`nav-link ${active === "Activity" ? "active" : "non-active"}`}
                        onClick={() => setActive("Activity")}
                    >
                        {headerData.activitesButton}
                    </a>
                </li>

            </ul>

        )
    });
};

export default ProfileNavLinks;
