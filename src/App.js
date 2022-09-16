import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from './Components/StartPage';
import RegisterPage from './Components/RegisterPage';
import LoginPage from './Components/LoginPage';
import UserpanelPage from './Components/UserpanelPage';
import UploadPage from './Components/UploadPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/userpanel" element={<UserpanelPage />} />
          <Route exact path="/upload" element={<UploadPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
