import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.path}>Pre Junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.path}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.path}>Junior +</NavLink>
        </div>
    );
}

export default Header;
