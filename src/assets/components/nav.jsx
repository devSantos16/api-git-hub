import React from "react";

const Nav = (props) => {
    return (
        <nav className="navbar">
            <div className="left">
                <a>Api-GitHub</a>
            </div>
            <div className="right">
                <a className="github-button" href="https://github.com/devSantos16" data-color-scheme="no-preference: light; light: light_high_contrast; dark: dark;" data-size="large" aria-label="Follow @devSantos16 on GitHub">Follow @devSantos16</a>
            </div>
        </nav>
    )
}
export default Nav;