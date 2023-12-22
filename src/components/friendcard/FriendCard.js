
import React from 'react';
import './FriendCard.css';
import { Row, Col } from 'react-bootstrap';
import { useState } from "react";
import { useFireBase } from '../../firebase/useFireBase';

const FriendCard = () => {
  const { data ,deleteData} = useFireBase("Friends")
  const [visibleFriends, setVisibleFriends] = useState(4);
  const [friends, setFriends] = useState([]);
  const handleRemoveFriend = ( friendId) => 
  {
    // setFriends(friends.filter((data) => data.id !== friendId));
   deleteData(friendId)
  };  
  const seeMoreFriends = () => {
    setVisibleFriends((prevVisibleFriends) => prevVisibleFriends + 2);
  };

   
    
  
  return (
    <div className="card p-3 my-4" style={{ width: "400px", height: "auto" }}>
      <div className="friend-list-header d-flex justify-content-between align-items-center m-1">
        <div className="d-flex align-items-center  mx-1" style={{ fontSize: '14px' }}>
          <h4 style={{ fontSize: '20px' }}>Friends</h4>
          <button className="connections-button">{data.length}</button>
        </div>
        <button className="btn btn-primary see-more-button mx-2  " onClick={seeMoreFriends}>
          See More Friends
        </button>
      </div>
      <Row xs={2} md={2} lg={2}>
        {data.slice(0, visibleFriends).map((info) => (
          <Col key={info.id}>
            <div className="friend-list-item mb-2">
              <div className="card mx-1" >
                <div className="container mx-1">
                  <div className="row">
                    <div className="col-2  m-3">
                      <div className={`friend-card ${info.hasStory ? info.hasStory : !info.hasStory}`}>
                        <div className="profile-picture-container   "  >
                       {!info.hasStory && (
                            <div className="pic-con d-flex align-items-center ">
                              <img
                              src={info.profilePicture}
                              className=" "
                              alt=""
                              style={{ width: '70px', height: '70px', borderRadius: '50%', overflow:  '  hidden',margin:'-35px' }}
                              />
                              </div>
                              )} 
                       {info.hasStory && (
                              <div className="story-frame" style={{ width: '70px', height: '70px', borderRadius: '50%', overflow: 'hidden' }}>
                              <img
                              src={info.profilePicture}
                              className="img-fluid rounded-circle  "
                              alt=""
                              style={{ width: '100%', height: '100%', objectFit: 'cover'  }}
                              />
                              </div>
                              )}
                        
                          </div>
                          
                        <div className="info-container ">
                          <div className="name ">{info.name}</div>
                          <div className="mutual-connections m-2">{info.mutualConnections} mutual connections</div>
                          <div className="buttons mt-1">
                            <button className="btn btn-primary ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-chat-left-text"
                                viewBox="0 0 16 16"
                              >
                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />

                              </svg>
                            </button>
                            <button className="btn button-danger ml-2 " onClick={() => handleRemoveFriend(info.id)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-person-x"
                                viewBox="0 0 16 16"
                              >
                                <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708" />
                              </svg>
                              
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FriendCard;


