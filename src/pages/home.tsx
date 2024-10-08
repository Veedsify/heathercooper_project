import Hero from "../components/main/hero";
import HomeAboutSection from "../components/main/home_about_section";
import Navbar from "../components/main/nav";

const Home = () => {
     return (
          <>
               <header className="relative select-none">
                    <Navbar
                         image="https://via.placeholder.com/150"
                         type="full"
                    />
               </header>
               <Hero />
               <HomeAboutSection fullWidth/>
               <HomeAboutSection flipped withBg fullWidth/>
               <HomeAboutSection fullWidth/>
          </>
     );
}

export default Home;