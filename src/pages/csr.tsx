import { Helmet } from "react-helmet";
import CsrComponent from "../components/main/csr-component";
import NavWithContent from "../components/main/navwithcontent";

const CSR = () => {
     return (
          <>
               <Helmet>
                    <meta charSet="utf-8" />
                    <title>
                         CSR | Ice Investment Nig Ltd
                    </title>
               </Helmet>
               <NavWithContent
                    title="Corporate Social Responsibility"
                    image="/images/backgrounds/buildings.jpg"
               />
               <section className="pt-10">
                    <CsrComponent />
               </section>
          </>
     );
}

export default CSR;