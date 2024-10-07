import Hero from "../components/main/hero";
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
          </>
     );
}

export default Home;