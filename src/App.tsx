import defaultUserPhoto from './assets/photo-default.svg';
import './App.css';
import userProfile from './components/UserProfile';
import Contact from './components/Contact';
import Interests from './components/Interests';
import Location from './components/Location';
import Photo from './components/Photo';


function App() {
  

  return (
    <>
      <div className="main">
        <Photo />
          <Contact />
          <Location />
          <Interests />
      </div>
    </>
  );
}

export default App;
