import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";


const ProductCard = () => {
    return (
        <Card className="bg-gray-800 text-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <Link to={`/`}>
          <CardHeader className="p-2">
            <img
              src={"movie?.image"}
              className="h-[400px] w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
              alt={"movie?.title"}
            />
          </CardHeader>
          <CardContent className="grid p-4">
            <div className="flex items-center gap-2">
              {/* <Star color="orange" fill="orange" /> */}
              <p className="text-2xl font-bold">{"movie?.totalRating"}</p>
            </div>
            <CardTitle className="mt-2 text-3xl font-extrabold">{"movie?.title"}</CardTitle>
            <p className="text-lg mt-4 text-gray-400">{"movie?.genre"}</p>
          </CardContent>
        </Link>
        <CardFooter className="p-4 border-t border-gray-700">
          {/* <RatingModal name={"movie?.title"} /> */}
        </CardFooter>
      </Card>
    );
};

export default ProductCard;