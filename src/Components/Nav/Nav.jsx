import React from "react";
import './Nav.css'
import ApnaLink from "./ApnaLink";
import '../../index.css'
import { useState, useEffect } from "react";

function Nav(){
    const [theme, setTheme] = useState('light-mode');

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    },[theme]);

    function toggleTheme(){
        setTheme((prevTheme)=> prevTheme === 'light-mode' ? 'dark-mode' : 'light-mode')
    }

    return(
        <>
        <div className="nav">
            <h2>TextUtils</h2>
           
                <ul>
                    <li><ApnaLink href="/"><span style={{color:"green"}}>Home</span></ApnaLink></li>
                    <li><ApnaLink href="/About"><span style={{color:"green"}}>About</span></ApnaLink></li>
                    <li><ApnaLink href="/Contact"><span style={{color:"green"}}>Contact</span></ApnaLink></li>
                </ul>
            
            <div className="mode">
            <input id="checkboxInput" type="checkbox" onClick={toggleTheme}/>
                 <label class="toggleSwitch" for="checkboxInput">
                  </label>
            <span>Enable {theme === 'light-mode' ? 'Dark' : 'Light'} mode</span>
            </div>
        </div>
        </>
    )
}
export default Nav;