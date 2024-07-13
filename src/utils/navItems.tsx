import { NavLink } from "react-router-dom";
import Cart from "../components/ui/Cart";


export const navLinks = (
    <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "btn btn-warning" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "btn btn-warning" : ""
                }
            >
                All Products
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/management"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "btn btn-warning" : ""
                }
            >
                Products Management
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "btn btn-warning" : ""
                }
            >
                About
            </NavLink>
        </li>
    </>
);


export const sideLinks = (
    <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "btn btn-warning" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "btn btn-warning" : ""
                }
            >
                All Products
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/management"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "btn btn-warning" : ""
                }
            >
                Products Management
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "btn btn-warning" : ""
                }
            >
                About
            </NavLink>
        </li>
        <li>
            <li>
                <NavLink to={'/cart'}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "btn btn-warning" : ""
                    }
                >
                    <Cart />
                </NavLink>
            </li>
        </li>
    </>
);


export const navIcons = (
    <>
        <li>
            <NavLink to={'/cart'}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "btn btn-warning" : ""
                }
            >
                <Cart />
            </NavLink>
        </li>
    </>
);


