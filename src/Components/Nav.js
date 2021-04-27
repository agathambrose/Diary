import React from 'react'
import style from '../styles/Nav.module.css'
import {Link} from 'react-router-dom'
import Userfront from '@userfront/react'


function Nav() {
    const authStateCahnge = Userfront.accessToken();

    const notVisible ={
        display:'none',
        textDecoration:'none',
        color:'black'

    }

    const visible ={
        display:'block',
        textDecoration:'none',
        color:'black'
    }

    const logInWidth ={
        width:'30%'
    }

    const logOutWidth = {
        width:'10%'
    }

    return (
        <div>
            <nav>
                <h1>Dreams</h1>
                <ul style={authStateCahnge ? logInWidth :logOutWidth}>
                    <Link style={{textDecoration:'none',color:'black'}} to='/'><li>Home</li></Link>
                    <Link style={authStateCahnge ? visible : notVisible} to='/dashboard'><li>Dashboard</li></Link>
                    <li style = {authStateCahnge ? visible : notVisible} onClick={Userfront.logout}>Sign out</li>
                    
                    <li>About</li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
