import React from "react";
//import { useFireBase } from "../../firebase/useFireBase";

export default function Photos() {
  //const { data } = useFireBase("photos");

  // i suppose we have in database at least 5 photos, with 500x500 size in photos collection
  // photo collection should have id, url
  // example:
  // [
  //   {
  //     id: 1,
  //     url: "https://picsum.photos/500/500",
  //   },
  // ]

  // if you don't have photos collection in database, you can use this data
  // mock data
  const data = [
    {
      id: 1,
      url: "https://fastly.picsum.photos/id/634/500/500.jpg?hmac=kGNo0Zf7xbVmQ8QK-fHxTf_3fCyAhTMac3tyWPQ83mw",
    },
    {
      id: 2,
      url: "https://fastly.picsum.photos/id/983/500/500.jpg?hmac=D4Ep4iuDFjJZjADuVKB1rkgS4Ww0QZB-77NvQIjdEZI",
    },
    {
      id: 3,
      url: "https://fastly.picsum.photos/id/743/500/500.jpg?hmac=v8e0bI40tbGciqslhqQbmwhEgdOZz66EwQ89PuiLyp0",
    },
    {
      id: 4,
      url: "https://fastly.picsum.photos/id/276/500/500.jpg?hmac=GPbefXd4zHbb0Fo-vdC5bBfO9NEVe4aswCwfAWdZkS8",
    },
    {
      id: 5,
      url: "https://fastly.picsum.photos/id/1027/500/500.jpg?hmac=tPEylHqcbPQbHwiryAHSrV1GruWBPnj2PWwrITymdkQ",
    },
    {
      id: 6,
      url: "https://fastly.picsum.photos/id/106/500/500.jpg?hmac=gJXKJglipb1aD_WnrD1O_wu2AQFYs8s7Izy6Yww8fp4",
    },
  ];

  const firstFivePhotos = data.slice(0, 5);

  return (
    <div
      style={{
        width: "400px",
      }}
      className="card m-1 mt-4"
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
