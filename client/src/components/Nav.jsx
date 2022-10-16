import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () =>{
    return(
        <div>
            <NavLink to="/" className="m-3" end>Home</NavLink>
            <NavLink to="/pets/new" end>Add a Pet</NavLink>
        </div>
    )
}

export default Nav