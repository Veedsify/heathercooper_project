import { useParams } from "react-router-dom";
import NavWithContent from "../components/main/navwithcontent";

const ProductDetails = () => {
     const { product_id } = useParams();

     return (
          <>
               <NavWithContent
                    title={product_id}
                    image="/images/backgrounds/buildings.jpg"
               />
               <section className="pt-10">
                    
               </section>
          </>
     );
}

export default ProductDetails;