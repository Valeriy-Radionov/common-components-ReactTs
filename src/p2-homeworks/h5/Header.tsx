import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routs";
import s from "./pages/NavBar.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Header() {
    return (
        <div className={s.wrapper}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.linkNavBar}>PreJunior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.linkNavBar}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.linkNavBar}>Junior+ </NavLink>
            <SuperButton className={s.buttonMenu}></SuperButton>
        </div>
    )
}

export default Header
