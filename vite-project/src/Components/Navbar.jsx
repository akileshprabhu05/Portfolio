import React from 'react'
import Profile from '../Pages/Profile'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const NavLinks = [{
        title: "Profile",
        path: "/"
    },
    {
        title: "Project",
        path: "/Project"
    },
    {
        title: "Contact",
        path: "/Contact"
    }]
    return (
        <>
            <div className="h-auto w-screen justify-start items-center bg-gradient-to-l">
                <div className="h-20 w-screen flex flex-row justify-center shadow-lg border-b-2">
                    <div className="w-1/2 font-extrabold font-sans p-8 px-16 tracking-widest text-lg">
                        AKIL
                    </div>
                    <div className="w-1/2 font-extrabold font-sans p-8 px-16 tracking-wide flex justify-end">
                        <ul className="flex flex-row gap-7 px-12">
                            {
                                NavLinks.map((navdata, index) => (
                                    <NavLink key={index} to={navdata.path}>
                                        <li className='hover:cursor-pointer hover:text-gray-400 '>{navdata.title}</li>
                                    </NavLink>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Navbar