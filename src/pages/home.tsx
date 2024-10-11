import Hero from "../components/main/hero";
import HomeAboutSection from "../components/main/home_about_section";
import Navbar from "../components/main/nav";

const Home = () => {
     return (
          <>
               <header className="relative select-none min-h-[118px] transition-all duration-300">
                    <Navbar
                         image="https://via.placeholder.com/150"
                         type="full"
                    />
               </header>
               <Hero />
               <HomeAboutSection
                    title="Ice Investment Nig Ltd"
                    description="Ice Investment Nig Ltd started as a trading Company in Lagos on 10th March 2015, it is widely known in the Importation, manufacturing and distribution of fast consumer products nationwide, with presence in major cities across Nigeria and over 20 full time employees, the Company continues to grow and diversify its portfolio across various industries."
                    buttonLink="/about"
                    button="Abous Us"
                    showButton
                    image="https://images.pexels.com/photos/3063470/pexels-photo-3063470.jpeg?auto=compress&w=1000"
                    fullWidth />
               <HomeAboutSection
                    title="International Quality Standards"
                    description="Our group strives to maintain a culture of total quality management- ensuring quality in every stage of what we do. From the products imported to the goods we manufacture in Nigeria. Our factory complies with international quality standards, ISO 9001-2015 to ensure that we give our customers the best. "
                    image="https://images.pexels.com/photos/70418/pexels-photo-70418.jpeg?auto=compress&w=1000"
                    flipped
                    withBg
                    fullWidth
               />
               <HomeAboutSection
                    title="Global Distribution Network"
                    description="Over the years we’ve developed and grown a considerably enormous global distribution network as well as an army of strategic partners on every continent."
                    image="https://images.pexels.com/photos/70418/pexels-photo-70418.jpeg?auto=compress&w=1000"
                    fullWidth
               />
          </>
     );
}

export default Home;