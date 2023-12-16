import '../friendCardAction/FriendCardAction.css'
import FriendCard from '../friendcard/FriendCard';
//import Card from './components/FriendList/Card';
import Posts from '../Posts';
function FriendCardAction() {
  return (


    <div className=" container text-center ">
      <div className="item bordercard mx-1" >
        <FriendCard />
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

  <div id="container" className="col-md-3 d-flex text-center p-2" style={{borderRadius:"4px",marginTop:"40px",maxHeight:"auto"}}>
      <div className="allCard mx-2 p-2 "style={{ borderRadius:"4px",border: "1px solid #dcdcdc" }}>
      <FriendCard/>
      </div>
      </div>
export default FriendCardAction;
*/
