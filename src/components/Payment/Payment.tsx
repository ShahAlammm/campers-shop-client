import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";


const Payment = () => {
    const stripePromise = loadStripe(
        "pk_test_51OEHKpItrEdLuT7QfJHV2vlSDSSTfGMzIXNJB08KN1pKingZdzESWEK2XOcaPf3CZ9NULcS3IiaGMzijEfAVz70o00WYZHsRGz"
      );



    //   let mostRecentData = null;
    //   let mostRecentTime = 0;

    //   order.find((item) => {
    //     if (item.time) {
    //       const currentTime = new Date(item.time).getTime();
    //       if (currentTime > mostRecentTime) {
    //         mostRecentTime = currentTime;
    //         mostRecentData = item;
    //       }
    //     }
    //   });

    return (
        <div className="hero min-h-screen bg-base-200 py-24">
            <div className="hero-content">

                <div className="card shrink-0 w-full shadow-2xl bg-base-100 p-5">
                    <h1 className="text-5xl font-bold text-center pb-4">Pay now!</h1>
                    <div className="drop-shadow-lg hover:drop-shadow-2xl">
                        <img
                            src="https://i.ibb.co/Sx5w4Gn/pngimg-com-credit-card-PNG23.png"
                            alt="Album"
                        />
                    </div>
                    <div className="flex items-center gap-4 p-4 px-5 rounded-t-md shadow-md space-y-3">
                        <div className="space-y-1">
                            <p className="  text-lg font-normal ">
                                {/* {mostRecentData?.name} */}
                            </p>

                            <p className="   text-lg font-normal ">
                                {/* {mostRecentData?.deliveryDate} */}
                            </p>
                            <p className="text-lg font-normal ">
                                {/* {mostRecentData?.area} */}
                            </p>

                            <p className="   text-lg font-normal ">
                                Product Price :{" "}
                                <span className=" text-lg  font-bold ">
                                    {/* {totalCharges} */}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div>

                        <div className=" py-5 rounded-b-md shadow-md">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm

                                ></CheckoutForm>
                            </Elements>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;