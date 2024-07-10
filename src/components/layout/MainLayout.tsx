import NavBar from "@/Shared/NavBar";
import SecondaryNavBar from "@/Shared/SecondaryNavBar";
import { Outlet } from "react-router-dom";
import Container from "../hooks/Container";
import Footer from "@/Shared/Footer";
import { sideLinks } from "@/utils/navItems";
import { NavTitle } from "@/utils/NavTitle";



const MainLayout = () => {
    return (
        <>
            <div className="drawer ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="flex justify-center items-center">
                        <SecondaryNavBar />
                    </div>
                    <NavBar />

                    {/*Main-----LayOut */}
                    <div className="py-16">
                        <Container>
                            <Outlet />
                        </Container>
                    </div>

                    <Container>
                        <Footer />
                    </Container>
                </div>

                <div className="drawer-side ">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu backdrop-blur-2xl bg-white/1 glass min-h-full w-72 p-4 text-black font-semibold">
                        <div className="flex items-center justify-center w-full">
                            <NavTitle />
                        </div>
                        {sideLinks}
                    </ul>
                </div>

            </div>
        </>
    );
};

export default MainLayout;