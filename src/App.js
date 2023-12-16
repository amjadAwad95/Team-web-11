import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import FriendCardAction from './components/friendCardAction/FriendCardAction';
import ProfileHeader from './components/profile-header/profileHeader';
function App() {
  return (
    <div className='container-fluid'>
      <div className='row my-3'>
        <div className='col text-center'>
          <ProfileHeader />
          <Posts />
        </div>
        <div className='col-md-4'>
          <FriendCardAction />
        </div>
      </div>
    </div>
  );
}

export default App;
