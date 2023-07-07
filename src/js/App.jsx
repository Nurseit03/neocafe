import '../css/App.css';
import '../css/cssreset.css';
import AuthWelcome from '../js/pages/Auth/AuthWelcome';
import Login from '../js/pages/Auth/Login/Login';
import Signup from '../js/pages/Auth/Signup/Signup';
import { Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthWelcome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
