// https://www.youtube.com/watch?v=GNrdg3PzpJQ
// 02:47:10 ➝ Бесконечная лента. Динамическая пагинация. useObserver
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/UI/navbar/Navbar';
import AppRouter from './Components/AppRouter';
import "./styles/App.css";
import { AuthContext } from './context/index.js';

function App() {
  
    const [isAuth, setIsAuth] = useState(false); 
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(()=> {
       if (localStorage.getItem('auth')) {
            setIsAuth(true)
       }
       setIsLoading(false) 
    }, [])

    return (
        <AuthContext.Provider value= {{
                                        isAuth,
                                        setIsAuth,
                                        isLoading
                                    }}>
            <BrowserRouter >
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
        
    );
}

export default App;
