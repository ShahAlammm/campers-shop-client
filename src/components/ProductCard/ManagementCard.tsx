/* eslint-disable @typescript-eslint/no-explicit-any */

import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";


const ManagementCard = (item:any) => {

    return (
        <div className="card lg:card-side bg-white/40 glass shadow-xl">
            <figure>
                <img
                    className="h-48 object-cover rounded-l-lg transition-transform duration-300 hover:scale-105"
                    src={item?.item.image}
                    alt={item?.item.name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item?.item.name}</h2>
                <p>{item?.item.name}</p>
                <div className="card-actions justify-end">

                    <button className="btn text-xl text-blue-600"><FaEdit /></button>
                    <button className="btn text-red-600 text-xl"><RiDeleteBin6Line /></button>
                </div>
            </div>
        </div>
    );
};

export default ManagementCard;