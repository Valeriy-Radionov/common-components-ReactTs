import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routs";
import s from "./pages/NavBar.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Header() {
    const [hiddenNavBar, setHiddenNavBar] = useState<string>(`${s.navBarCollapsed}`)

    const onClickHandler = () => {
        if (hiddenNavBar === `${s.navBarCollapsed}`) {
            setHiddenNavBar(`${s.navBarDefault} ${s.navLink}`)
        } else {
            setHiddenNavBar(`${s.navBarCollapsed}`)
        }
    }

    let stateNavLink = (params: { isActive: boolean }) => {
        let active = params.isActive
        return {color: active ? "lightskyblue" : "blueviolet", textDecoration: 'none', marginRight: "10px"}
    }
    return (
        <div className={s.wrapper}>
            <div className={hiddenNavBar}>
                <NavLink to={PATH.PRE_JUNIOR}
                         style={stateNavLink}
                >PreJunior
                </NavLink>
                <NavLink to={PATH.JUNIOR} style={stateNavLink}>Junior
                </NavLink>
                <NavLink to={PATH.JUNIOR_PLUS}
                         style={stateNavLink}>Junior+ </NavLink>
            </div>
            <SuperButton onClick={onClickHandler}>Menu</SuperButton>
        </div>
    )
}

export default Header
