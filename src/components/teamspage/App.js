import './App.css';
import UserProfileCard from './components/UserProfileCard/UserProfileCard';
import UserProfileCard1 from './components/UserProfileCard/UserProfileCard1';
import UserProfileCard2 from './components/UserProfileCard/UserProfileCard2';
import CanvasDesign from './CanvasDesign';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
   
   
    <div className="App">
    <h2>Meet Our Secretaries!</h2>
   <div className="App">
    
    <UserProfileCard/><UserProfileCard1/><UserProfileCard2/>


      <div className="App">
      <h2>Officers and Admins</h2>
      <CanvasDesign />
      </div>
    </div>
    </div>
  );
}

export default App;
