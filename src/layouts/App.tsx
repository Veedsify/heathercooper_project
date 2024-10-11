import { Outlet } from "react-router-dom";
import Footer from "../components/main/footer";

const AppLayout = () => {
     return (
          <>
               <div className="fixed left-0 top-0 w-full border-t border-2 bg-amber-500" />
               <main>
                    <Outlet />
               </main>
               <Footer />
          </>
     );
}

export default AppLayout;