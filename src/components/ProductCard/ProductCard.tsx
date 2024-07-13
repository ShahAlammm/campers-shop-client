// ProductCard.tsx
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { setCart, TProduct } from "@/redux/feature/productSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useRef } from "react";

const ProductCard = ({ item }: { item: TProduct }) => {
  const dispatch = useAppDispatch();
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

  const handleAddToCart = () => {
    dispatch(setCart(item)); // Dispatch action to add item to cart
  };

  return (
    <>
      <Card className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div onClick={handleOpenModal} className="cursor-pointer">
          <CardHeader className="p-2">
            <img
              src={item?.image}
              className="h-[300px] w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
              alt={item?.name}
            />
          </CardHeader>
          <CardContent className="grid p-4">
            <CardTitle className="mt-2 text-3xl font-extrabold">{item?.name}</CardTitle>
            <p className="text-lg mt-3 font-semibold">Brand: {item?.brand}</p>
            <p className="text-lg font-semibold">Price: {item?.price} <span className="text-sm">tk</span></p>
          </CardContent>
        </div>
        <CardFooter className="p-4 border-t border-gray-700">
          <div className="indicator">
            {item?.topSelling === true ? (<span className="indicator-item badge badge-primary">Top Sells</span>) : ""}
            <button className="btn bg-yellow-400" onClick={handleOpenModal}>
              Details
            </button>
          </div>
        </CardFooter>
      </Card>

      {/* Modal */}
      <dialog id="my_modal_5" ref={modalRef} className="modal backdrop-blur-lg bg-black/10 modal-bottom sm:modal-middle">
        <div className="modal-box backdrop-blur-2xl bg-white/80">
          <div>
            <img
              src={item?.image}
              className="h-[400px] w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
              alt={item?.name}
            />
          </div>
          <div className="py-4">
            <h3 className="font-bold text-3xl">{item?.name}</h3>
            <div className="space-y-2 mt-4">
              <p><span className="font-semibold text-lg">Description:</span> {item?.description}</p>
              <p><span className="font-semibold text-lg">Brand:</span> {item?.brand}</p>
              <p><span className="font-semibold text-lg">Quantity:</span> {item?.quantity}</p>
              <p><span className="font-semibold text-lg">Price:</span> {item?.price} tk</p>
            </div>
          </div>
          <div className="justify-between">
            <form method="dialog">
              {/* Buttons */}
              <div className="flex justify-between">
                <button className="btn bg-yellow-400" onClick={handleAddToCart}>
                  Add to cart
                </button>
                <button className="btn bg-yellow-400" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ProductCard;
