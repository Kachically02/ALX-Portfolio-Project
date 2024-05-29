import {  Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/Landingpage';
import Loginpage from './components/Loginpage';
import Registrationpage from './components/Registrationpage';
import Welcomepage from './components/Welcomepage';
import Success from './components/Success';

function App() {
  return (
    <Routes>
        <Route exact path="/" element ={<LandingPage/>} />
        <Route path="/login" element={<Loginpage/>} />
        <Route path="/register"  element={<Registrationpage/>} />
        <Route path="/welcome"  element={<Welcomepage/>} />
        <Route path="/success"  element={<Success/>} />
  </Routes>
  );
}

export default App;
