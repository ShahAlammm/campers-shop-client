import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
export const NavTitle = () => {
    return (
        <div className="mx-16 flex-1 justify-center items-center px-2 text-xl font-bold text-black">


                <Link to={'/'}>
                <img
                    src={logo}
                    className="size-20 object-cover transition-transform duration-500 hover:scale-105"
                    alt="image"
                /></Link>

        </div>
    )
};