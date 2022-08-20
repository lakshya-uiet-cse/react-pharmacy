import devvid from '../src/Video/devvid.mp4';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';

import Blogs from './components/Blogs';
import DevTeam from './components/DevTeam';
import ReactPlayer from "react-player";
import Car from './components/Car';
// import Chatbot from 'react-simple-chatbot';
// import login from './components/login';
import Homepage from './Homepage';
// import login from './components/login';
import Login from './components/login';
import Register from './components/register';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
// import { useState } from 'react';
import ChatBot from './components/ChatBot'
import SimpleForm from './components/ChatBot';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
<BrowserRouter>
<SimpleForm/>

</BrowserRouter>

    </div>
  );
}

export default App;