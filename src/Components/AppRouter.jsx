import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes} from '../router';
import Loader from './UI/loader/Loader';

const AppRouter = () => {
    
    const {isAuth, isLoading} = useContext(AuthContext);
    // console.log(isAuth);

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
        ? 
        <Routes>
            {
                privateRoutes.map(route => 
                    <Route 
                        key={route.path}
                        exact={route.exact} 
                        path={route.path} 
                        element={route.component}
                    />
                    )
            }
            <Route path="*" element={<Navigate to ="/posts" />}/>
        </Routes>
        :
        <Routes>
            {
                publicRoutes.map(route => 
                    <Route 
                        key={route.path}
                        exact={route.exact} 
                        path={route.path} 
                        element={route.component}
                    />
                    )
            }
                    <Route path="*" element={<Navigate to ="/login" />}/>
        </Routes>
  )
}

export default AppRouter
