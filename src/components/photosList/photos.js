import React from "react";
import { useFireBase } from "../../firebase/useFireBase";

export default function Photos() {
  const { data } = useFireBase("photos");
  
  const firstFivePhotos = data.slice(0, 5);

  return (
    <div
      style={{
        width: "400px",
        maxWidth: "100%",
      }}
      className="rounded-3 shadow-sm"
    >
      <div className="container text-center p-4">
        <div className="row mb-3">
          <div className="col d-flex justify-content-between align-items-center p-1">
            <h6 className="text-center">Photos</h6>
            <button
              className="btn  text-primary"
              style={{
                backgroundColor: "#e1f0ff",
              }}
            >
              See all photo
            </button>
          </div>
        </div>

        <div className="row">
          {firstFivePhotos.slice(0, 2).map((photo) => (
            <div key={photo.id} className="col mb-0 p-1">
              <img src={photo.url} className="img-fluid rounded" alt="..." />
            </div>
          ))}
        </div>
        <div className="row">
          {firstFivePhotos.slice(2, 5).map((photo) => (
            <div key={photo.id} className="col mb-0 p-1">
              <img src={photo.url} className="img-fluid rounded" alt="..." />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
