
import React from 'react';
import './FriendCard.css';
import { Container, Row, Col } from 'react-bootstrap';
import myImage from '../pic/image12.jpg';

const FriendCard = ({ removeFriend, profilePicture, name, mutualConnections, hasStory }) => {
  const initialFriends = [
    { id: 1, name: 'Friend 1', mutualConnections: 5, hasStory: true },
    { id: 2, name: 'Friend 2', profilePicture: 'url_to_image_2', mutualConnections: 10, hasStory: false },
    { id: 3, name: 'Friend 3', profilePicture: 'url_to_image_3', mutualConnections: 8, hasStory: true },
    { id: 4, name: 'Friend 4', profilePicture: 'url_to_image_4', mutualConnections: 12, hasStory: false },
    { id: 5, name: 'Friend 5', profilePicture: 'url_to_image_3', mutualConnections: 8, hasStory: true },
    { id: 6, name: 'Friend 6', profilePicture: 'url_to_image_4', mutualConnections: 12, hasStory: false },
  ];

  const [friends, setFriends] = React.useState(initialFriends);
  const [visibleFriends, setVisibleFriends] = React.useState(4);

  const handleRemoveFriend = (friendId) => {
    setFriends(friends.filter((friend) => friend.id !== friendId));
  };

  const seeMoreFriends = () => {
    setVisibleFriends((prevVisibleFriends) => prevVisibleFriends + 2);
  };

  return (

    <div className="card  " style={{ width: "350px", height: "auto" }}>
      <div className="friend-list-header d-flex justify-content-between align-items-center m-1 mx-1">
        <div className="d-flex align-items-center  mx-2" style={{ fontSize: '14px' }}>
          <h4 style={{ fontSize: '20px' }}>Friends</h4>
          <button className="connections-button">{friends.length}</button>
        </div>
        <button className="btn btn-primary see-more-button mx-2  " onClick={seeMoreFriends}>
          See More Friends
        </button>
      </div>

      <Row xs={2} md={2} lg={2} className=" g-3  ">
        {friends.slice(0, visibleFriends).map((friend) => (
          <Col key={friend.id}>
            <div className="friend-list-item m-1 ">
              <div className="card mx-1" style={{ width: "auto", height: "auto" }}>
                <div className="container mx-1 ">
                  <div className="row">
                    <div className="col-2  m-2">
                      <div className={`friend-card ${hasStory ? 'has-story' : ''}`}>
                        <div className="profile-picture-container align-items-center">
                          <img
                            src={myImage}
                            className="pic-friend rounded-circle me-3"
                            alt="pic "
                            style={{ width: '40px', height: '40px' }}
                          />
                          {friend.hasStory && <div className="story-frame"></div>}
                        </div>
                        <div className="info-container">
                          <div className="name m-1">{friend.name}</div>
                          <div className="mutual-connections m-2">{friend.mutualConnections} mutual connections</div>
                          <div className="buttons mt-1">
                            <button className="btn btn-primary ml-2">
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
                            <button className="btn button-danger ml-2 " onClick={() => handleRemoveFriend(friend.id)}>
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
                              {removeFriend}
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



/*import React from 'react'
//import { useFireBase } from "../firebase/useFireBase"
import './FriendCard.css';
import FriendCardAction from '../friendCardAction/FriendCardAction';
import { useState } from 'react';
import myImage from '../pic/image12.jpg';
import { Container, Row, Col, Image } from 'react-bootstrap';


 const FriendCard = ( {  removeFriend,profilePicture, name, mutualConnections, hasStory }) => {
  const initialFriends = [
    { id: 1, name: 'Friend 1' , mutualConnections: 5, hasStory: true },
    { id: 2, name: 'Friend 2', profilePicture: 'url_to_image_2', mutualConnections: 10, hasStory: false },
    { id: 3, name: 'Friend 3', profilePicture: 'url_to_image_3', mutualConnections: 8, hasStory: true },
    { id: 4, name: 'Friend 4', profilePicture: 'url_to_image_4', mutualConnections: 12, hasStory: false },
    { id: 5, name: 'Friend 5', profilePicture: 'url_to_image_3', mutualConnections: 8, hasStory: true },
    { id: 6, name: 'Friend 6', profilePicture: 'url_to_image_4', mutualConnections: 12, hasStory: false },
  
];
const [friends, setFriends] = useState(initialFriends);
const [visibleFriends, setVisibleFriends] = useState(4);

 removeFriend = (friendId) => {
setFriends(friends.filter((friend) => friend.id !== friendId));
};
const seeMoreFriends = () => {
setVisibleFriends((prevVisibleFriends) => prevVisibleFriends + 2);
};

  return (
    <Container>
 <div className="friendc m-3" >
    <div className="friend-list-header d-flex justify-content-between align-items-center">
        <div className=" d-flex align-items-center mx-2" style={{fontSize:"14px"}}>
          <h4 style={{fontSize:"20px"}}>Friends</h4>
          <button className="connections-button">
            {friends.length} 
          </button>
        </div>
        <button className="btn btn-primary see-more-button mx-3"  onClick={seeMoreFriends} > 
          See More Friends
        </button>
      </div>
      <div className="friend-list  row row-cols-2 row-cols-md-2   ">
        {friends.slice(0, visibleFriends).map((friend) => (
          <div key={friend.id} className="friend-list-item col-md-6 my-1"> 
  <div className="card my-3" >
    <div className='container '> 
    <div className='row '>
      <div className='col-2'>
        <div className={`friend-card ${hasStory ? 'has-story' : ''}`}>
       
          <div className='profile-picture-container align-items-center  '>
          <img src={myImage} className='pic-friend rounded-circle me-3' alt='pic '   style={{width:"40px" , height:"40px" }}  />
            {friend.hasStory && <div className='story-frame '></div>}
          </div>
        <div className="info-container ">
          <div className="name">{friend.name}</div>
          <div className="mutual-connections">{friend.mutualConnections} mutual connections</div>
          <div className="buttons mt-2">
            <button className="btn btn-primary ml-2  ">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-text" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
              </svg>
            </button>
            <button className="btn button-danger ml-2" onClick={() => removeFriend(friend.id)}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-x" viewBox="0 0 16 16">
                <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708" />
              </svg>{removeFriend}
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div> 
    </div>
     ))}
    
  '
  '
   </div>
   </div>
   
</Container>
  <div className="card  d-flex p-2 m-2">
      <div className="col-md-3  "  >
     
  );
};

export default FriendCard*/
