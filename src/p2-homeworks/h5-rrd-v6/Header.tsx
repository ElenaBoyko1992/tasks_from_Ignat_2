import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'


function Header() {
    return (
        <div className={s.header}>
            <div className={s.navLinks}>
                {/*add NavLinks*/}
                <NavLink className={s.link} to={'/pre-junior'}>pre-junior </NavLink>

                <NavLink className={s.link} to={'/junior'}>junior </NavLink>

                <NavLink className={s.link} to={'/junior-plus'}>juniorPlus </NavLink>

            </div>

        </div>
    )
}

export default Header
