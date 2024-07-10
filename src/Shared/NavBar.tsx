import { navIcons, navLinks } from "@/utils/navItems";
import { NavTitle } from "@/utils/NavTitle";

const NavBar = () => {


    return (
        <div className={`navbar w-full backdrop-blur-2xl bg-white/40 glass shadow-2xl`}>
            <div className="container m-auto">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square text-black btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-6 w-6 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>
                <NavTitle />
                <div className="hidden flex-auto justify-center items-center lg:block">
                    <ul className="menu menu-horizontal font-semibold text-black ">
                        {navLinks}
                    </ul>
                </div>

                <div className="hidden justify-center  items-center lg:block ">
                    <ul className="menu menu-horizontal font-semibold  text-black uppercase">
                        {navIcons}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default NavBar;
