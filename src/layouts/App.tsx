import { Outlet } from "react-router-dom";
import Footer from "../components/main/footer";
import {useLocation} from "react-router-dom";
import { useEffect } from "react";

const AppLayout = () => {
     const location = useLocation();
     useEffect(() => {
          window.scrollTo(0, 0);
     }, [location]);
     return (
          <>

               <main>
                    <Outlet />
               </main>
               <Footer />
          </>
     );
}

export default AppLayout;