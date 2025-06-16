import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
    return ( 
        <>
        <Hero />
        <LeftSection  
        imageURL="images\kite.png" 
        productName="Kite" 
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
        tryDemo="Try demo"
        learnMore="Learn more" 
        googlePlay="" 
        appStore="" />
        <RightSection />
        <LeftSection  
        imageURL="" 
        productName="" 
        productDesription="" 
        tryDemo="" 
        learnMore="" 
        googlePlay="" 
        appStore="" />
        <Universe />
        </>

     );
}

export default ProductsPage;