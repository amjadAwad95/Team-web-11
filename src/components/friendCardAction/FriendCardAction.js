import Posts from '../Posts';
import '../friendCardAction/FriendCardAction.css';
import FriendCard from '../friendcard/FriendCard';
import Post from '../post/Post';

function FriendCardAction() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8  text-white text-center  ">
         <Post/>
        </div>
        <div className="col-md-4 d-flex text-center p-3 ">
          <div className="allCard mx-4 p-2  custom-friend-card-container">
            <FriendCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendCardAction;





/*import '../friendCardAction/FriendCardAction.css'
import FriendCard from '../friendcard/FriendCard';
//import Card from './components/FriendList/Card';
function FriendCardAction() {
  return (
    <div className="container-fluid">
    <div className="row ">
      <div className="col-md-8  text-white text-center ">
       
      </div>
      <div id="container" className="col-md-4 d-flex text-center p-2" style={{borderRadius:"4px",marginTop:"100px"}}>
      <div className="allCard mx-3 p-1 "style={{ borderRadius:"4px",border: "1px solid #dcdcdc" }}>
      <FriendCard/>
      </div>
      </div>
    </div>
  </div>
  );
}

export default FriendCardAction;
*/