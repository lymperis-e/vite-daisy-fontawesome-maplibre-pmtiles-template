import React from 'react'
import { NavLink } from "react-router-dom";

function Logo(props) {
    const { children, ...attrs } = props;
    const { link, text, ...restAttrs } = attrs;

    return (
        <>
            <NavLink to={link} className="app-logo" {...restAttrs} >
                <h1 className='text-xl' >
                    {children}
                </h1>
            </NavLink>
        </>
    )
}

export default Logo