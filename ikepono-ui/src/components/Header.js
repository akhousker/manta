import React, { useState } from "react";
import logoLight from '../img/ray-light.svg';
import logoDark from '../img/ray-dark.svg';

function Header({isDarkMode, setIsDarkMode}) {

    return (
        <header className="App-header">
            <img src={logoDark} className="logo" alt="logo" />
            <div>
                Ikepono manta ray identification
            </div>
            {/* <div>
                Toggle
            </div> */}
        </header>
    );
}

export default Header;
