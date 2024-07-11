import { ReactNode } from "react";


const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-full md:w-10/12 mx-auto backdrop-blur-2xl bg-black/30  shadow-2xl shadow-black px-5 py-1 pb-5 rounded-2xl ">
            {children}
        </div>
    );
};

export default Container;