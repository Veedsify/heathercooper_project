import NavWithContent from "../components/main/navwithcontent";
import ProductComponents from "../components/main/product-component";

const Products = () => {
     return (
          <>
               <NavWithContent
                    title="Products"
                    image="/images/backgrounds/buildings.jpg"
               />
               <ProductComponents />
          </>
     );
}

export default Products;