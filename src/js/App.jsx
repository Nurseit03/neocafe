import '../css/App.css';
import '../css/cssreset.css';
import AuthWelcome from '../js/pages/Auth/AuthWelcome';
import Login from '../js/pages/Auth/Login/Login';
import Signup from '../js/pages/Auth/Signup/Signup';
import SignupPhoneNumber from '../js/pages/Auth/Signup/SignupPhoneNumber';
import SignupVerificationCode from '../js/pages/Auth/Signup/SignupVerificationCode';
import LoginVerificationCode from '../js/pages/Auth/Login/LoginVerificationCode';
import Main from '../js/pages/Main/Main';
import { Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthWelcome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/LoginVerificationCode" element={<LoginVerificationCode />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/SignupPhoneNumber" element={<SignupPhoneNumber />} />
        <Route path="/SignupVerificationCode" element={<SignupVerificationCode />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
