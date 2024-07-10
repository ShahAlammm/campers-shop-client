import BestSellingProducts from "@/components/BestSelling/BestSellingProducts";
import Category from "@/components/Categoty/Category";
import FAQSection from "@/components/FAQsection/FAQSection";
import { HeroSection } from "@/components/HeroSection/HeroSection";


const Home = () => {
    return (
        <div className="space-y-4">
            <HeroSection />
            <BestSellingProducts />
            <Category />
            <FAQSection />

        </div>
    );
};

export default Home;