import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';



function Nav() {

    const { profile } = useContext(AuthContext)

    // let navItems = []

    const getNavItems = (profile) => {
        if (!profile.id) {
            return [
                { label: "home", link: "/" },
                { label: "register", link: "/register" },
                { label: "login", link: "/login" },
            ]
        } else {
            if (profile.isStaff) {
                console.log(typeof(profile.isStaff))
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
    }

    // useEffect(()=>{
    //     navItems = getNavItems(profile)
    //     console.log(profile.isStaff)
    //     console.log(navItems)

        
    // },[])
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