// https://www.youtube.com/watch?v=GNrdg3PzpJQ
// 02:22:00 ➝ Динамическая навигация. useHistory, useParams
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/UI/navbar/Navbar';
import AppRouter from './Components/AppRouter';
import "./styles/App.css";

function App() {
  
  return (
    <BrowserRouter >
        <Navbar/>
        <AppRouter/>
              
               
    </BrowserRouter>
  );
}

export default App;
