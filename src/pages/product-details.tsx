import { Link, useParams } from "react-router-dom";
import NavWithContent from "../components/main/navwithcontent";
import { useEffect, useState } from "react";
import { catalogs } from "../constants/catalogs";
import { Helmet } from "react-helmet";

const ProductDetails = () => {
     const [bgImage, setBgImage] = useState("");
     const [title, setTitle] = useState("");
     const { product_id } = useParams();
     useEffect(() => {
          function fetchProductDetails() {
               const product = catalogs.categories.find((category) => category.id === product_id);
               if (product) {
                    setBgImage(product.coverImage);
                    setTitle(product.name);
               }
          }
          fetchProductDetails();
     }, [product_id]);
     const products = catalogs.categories?.find((category) => category.id === product_id!)?.products;

     return (
          <>
               <Helmet>
                    <meta charSet="utf-8" />
                    <title>
                         {title}  | Products | Ice Investment Nig Ltd
                    </title>
               </Helmet>
               <NavWithContent
                    title={product_id}
                    image={bgImage}
               />
               <section className="pt-10 mb-32">
                    <div className="max-w-screen-lg lg:max-w-screen-xl mx-auto">
                         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 gap-y-16">
                              {products?.map((product) => (
                                   <div key={product.id} className="border rounded-lg group">
                                        <img
                                             className="h-auto w-full rounded-lg aspect-[3.3/4] object-cover object-top mb-3 border-b"
                                             src={product.image}
                                             alt={product.name}
                                        />
                                        <div className="p-4">
                                             <span className="font-medium text-lg text-center block group-hover:text-amber-500">
                                                  <Link to={`/product/${product.id}`}>
                                                       {product.name}
                                                  </Link>
                                             </span>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>
          </>
     );
}

export default ProductDetails;