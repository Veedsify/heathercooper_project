import Hero from "../components/main/hero";
import HomeAboutSection from "../components/main/home_about_section";
import Navbar from "../components/main/nav";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ice Investment Nig Ltd | Trade Company in Nigeria</title>
        <meta
          name="description"
          content="Ice Investment Nig Ltd started as a trading Company in Lagos on 30th August 1985, it is widely known for the Importation, manufacturing and distribution of fast consumer products nationwide, with presence in major cities across Nigeria and over 20 full time employees, the Company continues to grow and diversify its portfolio across various industries. At Ice Investment we are committed to offering our consumers high-quality household food products, Beverages, Wines, Skin Care and Pharmaceuticals, which are nourishing, healthy, and tasty. We take extra care to use only high-quality ingredients sourced from all around the World which are a delight to our consumers."
        />
        <link rel="canonical" href="https://iceinvestmentnig.com" />
      </Helmet>
      <header className="relative z-50 select-none min-h-max transition-all duration-300">
        <Navbar image="https://via.placeholder.com/150" type="full" />
      </header>
      <Hero />
      <HomeAboutSection
        title="Ice Investment Nig Ltd"
        description="Ice Investment Nig Ltd started as a trading Company in Lagos on 30th August 1985, it is widely known for the Importation, manufacturing and one of the leading distributors of fast consumer products and Super Markets items nationwide, with presence in major cities across Nigeria and West Africa, with over 20 full time employees. &nbsp; <br> <br>
    The Company continues to grow and diversify its portfolio across various industries. At Ice Investment we are committed to offering our consumers high-quality household food products, Beverages, Wines, Skin Care and Pharmaceuticals, which are nourishing, healthy, and tasty. We take extra care to use only high-quality ingredients sourced from all around the World which are a delight to our consumers."
        buttonLink="/about"
        button="Abous Us"
        showButton
        image="/images/product_categories/food.jpg"
        fullWidth
      />
      <HomeAboutSection
        title="International Quality Standards"
        description="Founded as a trading company in Lagos on August 30, 1985, Ice Investment Nig Ltd. is well-known for importing, manufacturing, and being one of the top distributors of fast-food items and supermarket items in the country. It has more than 20 full-time employees and is present in major cities in Nigeria and West Africa.

The business keeps expanding and diversifying its holdings in a number of different sectors. At Ice Investment, we are dedicated to providing our customers with wholesome, healthful, and delicious household food products, beverages and wines. To the satisfaction of our customers, we go to great lengths to use only the best ingredients from around the globe."
        image="/images/about/laboratory.jpg"
        flipped
        withBg
        fullWidth
      />
      <HomeAboutSection
        title="Global Distribution Network"
        description="Over the years we have developed and grown a considerably enormous global distribution network as well as an army of strategic partners across West Africa."
        image="/images/about/products.jpg"
        fullWidth
      />
    </>
  );
};

export default Home;
