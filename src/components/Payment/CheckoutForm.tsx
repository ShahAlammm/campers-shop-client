import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const CheckoutForm = () => {

    const stripe = useStripe();
  const elements = useElements();


  const handleSubmit=()=>{
    elements
  }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",


                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button
                    className="btn my-5 btn-outline w-full btn-success"
                    type="submit"
                    disabled={!stripe } // || !clientSecret
                >
                    Pay
                </button>
            </form>
            <p className="text-red-700 mt-4">{"error"}</p>
            <p className="text-center">
                {/* {transactionId && (
                    <p className="text-green-400 mt-4">{transactionId}</p>
                )} */}
            </p>
        </div>
    );
};

export default CheckoutForm;