import { Outlet } from "react-router-dom";
import Footer from "../components/main/footer";

const AppLayout = () => {
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