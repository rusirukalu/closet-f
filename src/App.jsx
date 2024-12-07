import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login'; 
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import Chatbot from './components/Chatbot';
import ImageUpload from './components/ImageUpload';

function App() {
  console.log("App rendered");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/userdashboard' element={<UserDashboard />} />
        <Route path='/chatbot' element={<Chatbot />} />
        <Route path='/imageupload' element={<ImageUpload />} />
      </Routes>
    </Router>
  );
}

export default App;