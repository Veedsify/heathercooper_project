import CsrComponent from "../components/main/csr-component";
import NavWithContent from "../components/main/navwithcontent";

const CSR = () => {
     return (
          <>
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