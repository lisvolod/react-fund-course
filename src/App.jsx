// https://www.youtube.com/watch?v=GNrdg3PzpJQ
// 02:33:10 ➝ Улучшаем навигацию. Приватные и публичные маршруты
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
