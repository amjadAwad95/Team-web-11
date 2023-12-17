import { useFireBase } from "./firebase/useFireBase";
const About = () => {
  const { data } = useFireBase("About");

  return data.map((about) => {
    return(
    <div className="container">
      <div className="row justify-content-md-end p-3 ">
        <div className="col-md-4 ">
          <div className="p-2 border border-secondary-emphasis rounded-top rounded-bottom ">
            <h5 className=" text-start ">
              <b className="p-2">About</b>
            </h5>
            <p className="text-secondary small text-start" key={about.id}>
              {about.desc}
            </p>
            <ul className="list-unstyled text-start text-secondary ">
              <li className="bi bi-calendar-date p-1" ke> Born: <b>{about.born}</b></li>
              <li className="bi bi-heart p-1"> Status: <b>{about.status}</b></li>
              <li className="bi bi-envelope p-1"> Email: <b>{about.email}</b></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
  });
};

export default About;
