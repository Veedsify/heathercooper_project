import { useParams } from "react-router-dom";
import NavWithContent from "../components/main/navwithcontent";
import { useEffect, useState } from "react";
import { catalogs } from "../constants/catalogs";

const ProductDetails = () => {
     const [bgImage, setBgImage] = useState("");
     const { product_id } = useParams();
     useEffect(() => {
          function fetchProductDetails() {
               const bg = catalogs.categories.find((category) => category.id === product_id);
               if (bg) {
                    setBgImage(bg.coverImage);
               }
          }
          fetchProductDetails();
     }, [product_id]);
     return (
          <>
               <NavWithContent
                    title={product_id}
                    image={bgImage}
               />
               <section className="pt-10">

               </section>
          </>
     );
}

export default ProductDetails;