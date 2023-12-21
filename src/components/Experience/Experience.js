import Editbutton from "./Editbutton";
import { useFireBase } from "../../firebase/useFireBase";
import image1 from "./Iconimages/icons8-hangouts-96.png"
import image2 from "./Iconimages/icons8-mega-a-cloud-storage-and-file-hosting-service-48.png"
import image3 from "./Iconimages/icon3.jpg"
const Experience = () => {
  const { data } = useFireBase("experience");
  return data.map((experience) => {
    return (
      <div className="card my-4" key={experience.id}>
        <div className="card-body">
          <h5 className="card-title"><b>Experience</b></h5>
          <button className="btn text-primary position-absolute top-0 end-0 mt-2 me-2" style={{ backgroundColor: "#e1f0ff" }}>+</button>

          <div className="row ">
            <div className="col-md-2 col-3 mt-3">
              <img src={image1} alt="Description" className="img-fluid" />
            </div>

            <div className="col-md-10 col-8 mt-3">
              <h6 className="card-subtitle name"><b>{experience.name1}</b></h6>
              <span className="date text-secondary">{experience.date1}<br />Duration {experience.duration1}   <Editbutton /></span>
            </div>

            <div className="col-md-2 col-3 mt-3">
              <img src={image2} alt="Description" className="img-fluid" />
            </div>
            <div className="col-md-10 col-8 mt-4">
              <h6 className="card-subtitle name"><b>{experience.name2}</b></h6>
              <span className="date text-secondary">{experience.date2}<br />Duration {experience.duration2}   <Editbutton /></span>
            </div>

            <div className="col-md-2 col-3 mt-3">
              <img src={image3} alt="Description" className="img-fluid" />
            </div>
            <div className="col-md-10 col-8 mt-4">
              <h6 className="card-subtitle name"><b>{experience.name3}</b></h6>
              <span className="date text-secondary">{experience.date3}<br />Duration {experience.duration3}   <Editbutton /></span>
            </div>
          </div>
        </div>
      </div>
    );
  }



  );
}

export default Experience;
