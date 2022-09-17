import React from 'react'
import s from './Error404.module.css'
import {useNavigate} from "react-router-dom";


function Error404() {
    const navigate = useNavigate()
    return (
        <div className={s.error}>
            <div>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            <button className={s.button} onClick={() => {
                navigate(-1)
            }}>x
            </button>
        </div>
    )
}

export default Error404
