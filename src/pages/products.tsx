import { Helmet } from "react-helmet";
import NavWithContent from "../components/main/navwithcontent";
import ProductComponents from "../components/main/product-component";

const Products = () => {
     return (
          <>
               <Helmet>
                    <meta charSet="utf-8" />
                    <title>
                         Products | Ice Investment Nig Ltd
                    </title>
               </Helmet>
               <NavWithContent
                    title="Products"
                    image="/images/backgrounds/buildings.jpg"
               />
               <ProductComponents />
          </>
     );
}

export default Products;