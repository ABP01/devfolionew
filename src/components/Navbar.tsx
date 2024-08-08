"use client"
import { title } from "process";
import React, { useState } from "react"

const navLinks = [
    { title: 'About', path: "#about" },
    { title: 'Portfolio', path: "#portfolio" },
];

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }
    return(
        <div className="text-white/70 pt-6">
            <div className="hidden md:flex px-4 py-2 items-center mx-auto max-w-[400px]"> 
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <link href={link.path}>
                            <p>{link.title}</p>
                        </link>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default Navbar