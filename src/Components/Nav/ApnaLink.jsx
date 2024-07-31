import React from "react";
import './ApnaLink.css'
import { NavLink } from "react-router-dom";

function ApnaLink(props){
    return(
        <>
        <NavLink className={({isActive})=>{
            return isActive ? "isActive" : null;
        }} to={props.href} style={{textDecoration:"none"}}>{props.children}</NavLink>
        </>
    )
}
export default ApnaLink;