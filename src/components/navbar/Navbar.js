import React from "react";
import "./Navbar.css";

const links = [
  {
    type: "dropdown",
    title: "Demo",
    items: [
      {
        title: "Action",
        link: "/",
      },
      {
        title: "Another action",
        link: "/",
      },
      {
        title: "Something else here",
        link: "/",
      },
    ],
  },

  {
    type: "dropdown",
    title: "Pages",
    items: [
      {
        title: "Action",
        link: "/",
      },
      {
        title: "Another action",
        link: "/",
      },
      {
        title: "Something else here",
        link: "/",
      },
    ],
  },

  {
    type: "dropdown",
    title: "Account",
    items: [
      {
        title: "Action",
        link: "/",
      },
      {
        title: "Another action",
        link: "/",
      },
      {
        title: "Something else here",
        link: "/",
      },
    ],
  },

  {
    type: "link",
    title: "My Network",
    link: "/",
  },

  {
    type: "button",
    title: "Messages",
    link: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#65686f"
        className="bi bi-chat-left-text-fill"
        viewBox="0 0 16 16"
      >
        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
      </svg>
    ),
  },

  {
    type: "button",
    title: "Settings",
    link: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#65686f"
        className="bi bi-gear-fill"
        viewBox="0 0 16 16"
      >
        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
      </svg>
    ),
  },

  {
    type: "button",
    title: "Notifications",
    link: "/",
    icon: (
      <>
        <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
          <span className="visually-hidden">New alerts</span>
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#65686f"
          className="bi bi-bell-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
        </svg>
      </>
    ),
  },
];

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white  shadow-sm">
      <div className="container-fluid">
        <a
          className="navbar-brand d-flex justify-content-center align-items-center p-2 bg-primary rounded-3"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="bi bi-megaphone-fill"
            viewBox="0 0 16 16"
          >
            <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z" />
          </svg>
        </a>

        <form className="d-flex" role="search">
          <div
            className="input-group d-flex justify-content-center align-items-center ps-3 rounded-2"
            style={{
              backgroundColor: "#edeef0",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>

            <input
              className="form-control  border-0"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              style={{
                backgroundColor: "#edeef0",
              }}
            />
          </div>
        </form>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            {links
              .filter((link) => link.type === "dropdown")
              .map((link) => (
                <li className="nav-item dropdown" key={link.title}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {link.title}
                  </a>
                  <ul className="dropdown-menu">
                    {link.items.map((item) => (
                      <li key={item.title}>
                        <a className="dropdown-item" href={item.link}>
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}

            {links
              .filter((link) => link.type === "link")
              .map((link) => (
                <li className="nav-item" key={link.title}>
                  <a className="nav-link" href={link.link}>
                    {link.title}
                  </a>
                </li>
              ))}

            {links
              .filter((link) => link.type === "button")
              .map((link) => (
                <li className="nav-item ms-1" key={link.title}>
                  <button
                    type="button"
                    className="btn btn-secondary h-100 border-0 position-relative"
                    style={{
                      backgroundColor: "#edeef0",
                    }}
                  >
                    {link.icon}
                  </button>
                </li>
              ))}

            <li className="nav-item ms-2" id="avatar">
              <button
                type="button"
                className="btn btn-secondary d-flex align-items-center justify-content-center  overflow-hidden border-0"
                style={{
                  width: "40px",
                  height: "40px",
                }}
              >
                <img
                  style={{
                    width: "40px",
                    height: "40px",
                  }}
                  src="https://scontent.xx.fbcdn.net/v/t1.15752-9/393113137_1508104089938894_4270763439881804321_n.png?stp=dst-png_s206x206&_nc_cat=103&ccb=1-7&_nc_sid=510075&_nc_ohc=bhXraFJRJ8MAX9ELzPk&_nc_oc=AQmKX9ISuI05larIs1JwVZoMtnf4HwrYZuAUZWrENeRFrzFF3KLAPtZBiod9K3X9xC5PGj_chOSCEm4Auru-aNIX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTnlCxIwX04T7r-M_kOlZLj0O4d7oxGPK6cRDXe-rV1wg&oe=65ABB306"
                  alt="avatar"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
