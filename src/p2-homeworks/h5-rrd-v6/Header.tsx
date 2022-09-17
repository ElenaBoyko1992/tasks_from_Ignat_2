import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'


function Header() {
    return (
        <div className={s.header}>
            <div className={s.navLinks}>
                {/*add NavLinks*/}
                <NavLink className={({isActive}) => isActive ? s.activeLink : s.link}
                         to={'/pre-junior'}>pre-junior </NavLink>

                <NavLink className={({isActive}) => isActive ? s.activeLink : s.link} to={'/junior'}>junior </NavLink>

                <NavLink className={({isActive}) => isActive ? s.activeLink : s.link}
                         to={'/juniorPlus'}>junior-plus </NavLink>
                <div className={s.square}></div>
            </div>


        </div>
    )
}

export default Header
