import React, { useContext } from 'react'
import MyButton from '../Components/UI/button/MyButton'
import MyInput from '../Components/UI/input/MyInput'
import { AuthContext } from '../context'

const Login = () => {
    
    const {setIsAuth} = useContext(AuthContext);

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')

    }
    
    return (
        <div>
            <h1>Сторінка для логіну</h1>
                <form onSubmit={login}>
                    <MyInput type="text" placeholder="Введіть login"/>
                    <MyInput type="password" placeholder="Введіть password"/>
                    <MyButton>Увійти</MyButton>
                </form>
        </div>
    )
}

export default Login
