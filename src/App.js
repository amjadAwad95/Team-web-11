import "./App.css";
import Posts from "./components/Posts";
import FriendCardAction from "./components/friendCardAction/FriendCardAction";
import ProfileHeader from "./components/profile-header/profileHeader";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Photos from "./components/photosList/photos";
import { useFireBase } from "./firebase/useFireBase";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row my-3">
        <div className="col text-center">
          <ProfileHeader />
          <Posts />
        </div>
        <div className="col-md-4">
          <About />
          <FriendCardAction />
          <Photos />
        </div>
      </div>
    </div>
  );
}

export default App;
