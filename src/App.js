import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import FriendCardAction from './components/friendCardAction/FriendCardAction';
import FriendCard from './components/friendcard/FriendCard';
import Post from './components/post/Post';
function App() {
  return(
   <div>
    
      <FriendCardAction/>
      <Posts/>
     

      
    </div>
  
  );
}

export default App;
