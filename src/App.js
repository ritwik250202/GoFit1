import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages';
import LoginPage from './components/pages/login';
import ContactPage from './components/pages/contact';
import PageNotFoundPage from './components/pages/pagenotfound';
import ReqApi from './components/Login/API/ReqApi';
import PostApi from './components/Login/API/PostApi'
import Notepad from './components/Notepad'
import Bmi from './components/pages/bmi';
import Calorie from './components/pages/calorie'
import Categories from './components/pages/categories';
import Fit from './components/pages/exercisesformen';
import Ref from './components/pages/toloosefat';
import Fitness from './components/pages/workout';
import Equip from './components/pages/equipments';
function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/*" element={<PageNotFoundPage/>} />
         <Route path='/register' element={<ReqApi />}/>
          <Route path= '/post'  element={<PostApi />}/>
          <Route path="/categories" element={<Categories />} />
          <Route path="/excercisesformen" element={<Fit />} />
          <Route path="/toloosefat" element={<Ref />} />
          <Route path="/workout" element={<Fitness />} /> 
          <Route path="/notepad" element={<Notepad />} />  
          <Route path="/bmi" element={<Bmi/>} />
          <Route path="/calorie" element={<Calorie/>} />
          <Route path="/equipments" element={<Equip/>} />
        
        </Routes>
    </Router>
  );
}

export default App;