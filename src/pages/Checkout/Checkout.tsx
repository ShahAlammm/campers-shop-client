import Payment from "@/components/Payment/Payment";

const Checkout = () => {
    return (
        <div>
            <div className='flex justify-center text-center items-center py-5'>
                <h1 className="text-3xl text-white font-bold my-2 border-l-8 border-l-yellow-400 px-3 py-5">
                    Checkout Page
                </h1>
            </div>
            <div className="divider divider-warning"></div>
            <Payment />
        </div>
    );
};

export default Checkout;