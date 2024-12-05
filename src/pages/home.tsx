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
          content="Nationwide distribution of premium supermarket products."
        />
        <link rel="canonical" href="https://iceinvestmentnig.com" />
      </Helmet>
      <header className="relative z-50 select-none min-h-max transition-all duration-300">
        <Navbar image="https://via.placeholder.com/150" type="full" />
      </header>
      <Hero />
      <HomeAboutSection
        title="Ice Investment Nig Ltd (West Africa)"
        description="Nationwide distribution of premium supermarket products. <br/> Founded as a trading company in Lagos on August 30, 1985, Ice Investment Nig Ltd. is well-known for importing, manufacturing, and being one of the top distributors of fast-food items and supermarket items in the country. It has more than 20 full-time employees and is present in major cities in Nigeria and West Africa. The business keeps expanding and diversifying its holdings in a number of different sectors. At Ice Investment, we are dedicated to providing our customers with wholesome, healthful, and delicious household food products, beverages and wines. To the satisfaction of our customers, we go to great lengths to use only the best ingredients from around the globe."
        buttonLink="/about"
        button="Abous Us"
        showButton
        image="/images/product_categories/food.jpg"
        fullWidth
      />
      <HomeAboutSection
        title="International Quality Standards"
        description="Our team works to uphold a culture of total quality management, guaranteeing excellence at every turn, from the items that are imported to the ones that we produce in Nigeria. To provide the finest for our clients, our factory conforms to ISO 9001-2015, an international quality standard."
        image="/images/about/products2.jpg"
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
