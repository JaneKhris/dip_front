import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';



function Nav() {

    const { profile } = useContext(AuthContext)

    const getNavItems = (profile) => {
        if (!profile.id) {
            return [
                { label: "register", link: "/register" },
                { label: "login", link: "/login" },
            ]
        } else {
            if (profile.isStaff) {
                console.log(typeof(profile.isStaff))
                return [
                    { label: "add file", link: "/add-file" },
                    { label: "my files", link: "/files" },
                    { label: "users", link: "/users" },
                    { label: "profile", link: "/profile" },
                ];
            }
            return [
                { label: "add file", link: "/add-file" },
                { label: "my files", link: "/files" },
                { label: "profile", link: "/profile" },
            ];
        }
    }

    const navItems = getNavItems(profile)


    return (
        <nav className="nav">{profile.isStaff}
            <ul className="nav__items">
                {navItems.map(({ label, link }) => (

                    <li className="nav__item" key={label} >

                        <NavLink to={link}>{label.toUpperCase()}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>

    )
}

export default Nav