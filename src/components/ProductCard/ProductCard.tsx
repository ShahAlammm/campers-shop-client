import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { TProduct } from "@/redux/feature/productSlice";
import { useRef } from "react";


const ProductCard = ({ item }: { item: TProduct }) => {

  // Details Modal
  const modalRef = useRef<HTMLDialogElement>(null);
  const handleOpenModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const handleCloseModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <>
      <Card className="bg-white text-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <Link to={`/`}>
          <CardHeader className="p-2">
            <img
              src={item?.image}
              className="h-[400px] w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
              alt={item?.name}
            />
          </CardHeader>
          <CardContent className="grid p-4">
            <div className="flex items-center gap-2">
              {/* <Star color="orange" fill="orange" /> */}
              <p className="text-2xl font-bold">{"movie?.totalRating"}</p>
            </div>
            <CardTitle className="mt-2 text-3xl font-extrabold">{item?.name}</CardTitle>
            <p className="text-lg mt-4 text-gray-400">{item?.price}</p>
          </CardContent>
        </Link>
        <CardFooter className="p-4 border-t border-gray-700">
          <button className="btn bg-yellow-400" onClick={handleOpenModal}>
            Details
          </button>
        </CardFooter>
      </Card>

      {/* ------------------------- Modal ------------------------------ */}
      <dialog id="my_modal_5" ref={modalRef} className="modal backdrop-blur-lg bg-black/10 modal-bottom sm:modal-middle">
        <div className="modal-box glass bg-black/20 text-white">
          <div>
            <img
              src={item?.image}
              className="h-[400px] w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
              alt={item?.name}
            />
          </div>
          <h3 className="font-bold text-lg text-white pt-2">{item?.name}</h3>
          <p className="py-4">Description: {item?.description}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* Button to close the modal */}
              <button className="btn bg-yellow-400" onClick={handleCloseModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ProductCard;