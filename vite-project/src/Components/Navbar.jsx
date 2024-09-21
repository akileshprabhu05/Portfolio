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
                <div className="h-[85px] w-full flex flex-row justify-center shadow-md border-b-2 ">
                    <div className="w-1/2 font-extrabold font-sans p-8 px-16 tracking-widest text-xl">
                        AKIL
                    </div>
                    <div className="w-1/2 font-extrabold font-sans p-8 px-16 tracking-wide flex justify-end">
                        <ul className="flex flex-row gap-7 px-12 justify-center text-lg">
                            {
                                NavLinks.map((navdata, index) => (
                                    <NavLink key={index} to={navdata.path}>
                                        <li className="capitalize inline-block relative cursor-pointer transition-all duration-50:0 before:content-[''] before:absolute
                                                before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-violet-800
                                                hover:before:w-full hover:before:opacity-100">{navdata.title}</li>
                                    </NavLink>
                                ))
                            }
                        </ul>
                    </div>
                </div>
        </>
    )
}


export default Navbar