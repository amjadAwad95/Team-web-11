import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import ProfileHeader from './components/profile-header/profileHeader';


function App() {
  return (
    <div className="App">
      <ProfileHeader/>
      <Posts />
      
    </div>
  );
}

export default App;
