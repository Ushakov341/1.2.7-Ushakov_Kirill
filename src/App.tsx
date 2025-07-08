import defaultUserPhoto from './assets/photo-default.svg';
import './App.css';
import userProfile from './components/UserProfile';
import Contact from './components/Contact';
import Interests from './components/Interests';

function App() {
  

  return (
    <>
      <div className="main">
          <Contact />
          <Location />
          <Interests />
      </div>
    </>
  );
}

export default App;
