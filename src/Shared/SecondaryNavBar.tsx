import { useState, useEffect } from 'react';
import { navIcons, navLinks } from "@/utils/navItems";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const SecondaryNavBar = () => {
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowNav(true);
            } else {
                setShowNav(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={` z-50 w-10/12  ${showNav ? 'fixed top-0 block' : 'hidden'}`}>
            <div className={`navbar glass hidden lg:flex backdrop-blur-2xl  bg-black/40  shadow-black/50 shadow-lg rounded-b-2xl`}>
                <div className="navbar-start">
                    <Link to={'/'}><img
                        src={logo}
                        className="size-20 object-cover transition-transform duration-500 hover:scale-105"
                        alt="image"
                    /></Link>
                </div>
                <div className="navbar-center">
                    <ul className="menu menu-horizontal px-1 text-white font-semibold">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <ul className="menu menu-horizontal font-semibold uppercase text-white">
                        {navIcons}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SecondaryNavBar;
