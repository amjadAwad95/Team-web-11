import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import FriendCardAction from './components/friendCardAction/FriendCardAction';
import FriendCard from './components/friendcard/FriendCard';
import Post from './components/post/Post';
import ProfileHeader from './components/profile-header/profileHeader';
function App() {
  return(
    <div> 
   <ProfileHeader/>
   <FriendCardAction/>
   <Posts/>
   </div>
  
  );
}

export default App;
