import BestSellingProducts from "@/components/BestSelling/BestSellingProducts";
import Category from "@/components/Categoty/Category";
import FAQSection from "@/components/FAQsection/FAQSection";
import FeaturedProduct from "@/components/FeaturedProduct/FeaturedProduct";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";

const Home = () => {
    return (
        <div >
            <HeroSection />
            <BestSellingProducts />
            <Category />
            <FeaturedProduct />
            <VideoPlayer />
            <FAQSection />
        </div>
    );
};

export default Home;