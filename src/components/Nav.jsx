import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';



function Nav() {

    const { profile } = useContext(AuthContext)

    const getNavItems = (isStaff) => {
        if (isStaff) {
            return [
                { label: "home", link: "/" },
                { label: "my files", link: "/files" },
                { label: "users", link: "/users" },
                { label: "profile", link: "/profile" },
            ];
        }
        return [
            { label: "home", link: "/" },
            { label: "my files", link: "/files" },
            { label: "profile", link: "/profile" },
        ];
    }
    const navItems = getNavItems(profile.isStaff)


    return (
        <nav className="nav">
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