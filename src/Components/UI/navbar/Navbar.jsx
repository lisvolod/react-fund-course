import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';
import classes from './Navbar.module.css'

const Navbar = () => {
  
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className={classes.navbar}>
            {isAuth
            ?
            <>
                <MyButton onClick={logout}>
                    Вийти
                </MyButton>

                <div className={classes.navbar__links}>
                    <Link to="/about" className={classes.link}>About</Link>
                    <Link to="/posts" className={classes.link}>Posts</Link>
                </div>
            </>
            
            : <></>}
            
            
        </div>
  )
}

export default Navbar
