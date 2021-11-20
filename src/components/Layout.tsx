import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Layout: React.FC = () => {

    const getLinkStyle: React.CSSProperties | ((props: { isActive: boolean }) => React.CSSProperties) = ({isActive}) => (
        !isActive ? {} : {
            color: "darkgreen",
            border: "2px dashed black"
        }
    )

    return (
        <>
            <header>
                <h1>Routing app</h1>
                <NavLink to={'/'} style={getLinkStyle}>Home</NavLink> &nbsp;
                <NavLink to={'/cars'} style={getLinkStyle}>Cars</NavLink> &nbsp;
                <NavLink to={'/about'} style={getLinkStyle}>About</NavLink>
            </header>
            <Outlet/>
        </>
    );
}

export default Layout;
