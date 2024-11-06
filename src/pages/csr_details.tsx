import { Helmet } from "react-helmet";
import NavWithContent from "../components/main/navwithcontent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { csrCards } from "../constants/csrcard";

type SetCSRProps = {
     title: string;
     content: string;
     image: string;
     content_images: string[];
}

const CSRDetails = () => {
     const { csr_id } = useParams();
     const [csr, setCsr] = useState<SetCSRProps>({
          title: "",
          content: "",
          image: "",
          content_images: []
     });

     useEffect(() => {
          const csrData = csrCards.find((csrCard) => csrCard.csr_id === csr_id);
          if (csrData) {
               setCsr({
                    title: csrData.title,
                    content: csrData.content,
                    image: csrData.image,
                    content_images: csrData.content_images ? csrData.content_images : []
               });
          }
     }, [csr_id]);

     return (
          <>
               <Helmet>
                    <meta charSet="utf-8" />
                    <title>
                         {(csr.title).toUpperCase()} | Ice Investment Nig Ltd
                    </title>
               </Helmet>
               <NavWithContent
                    title={(csr.title).toUpperCase()}
                    image={csr.image}
               />
               <section className="pt-10">
                    <div className="container mx-auto">
                         <p className="text-lg leading-loose">
                              {csr.content}
                         </p>
                    </div>
               </section>
               <section className="container grid grid-cols-1 md:grid-cols-2 gap-4 py-20">
                    {csr.content_images.map((content_image, index) => (
                         <div key={index} className="p-2">
                              <img src={content_image} className="mb-6 block object-cover aspect-video" />
                         </div>
                    ))}
               </section>
          </>
     );
}

export default CSRDetails;