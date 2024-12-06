import { Link } from "react-router-dom";
import { csrCards } from "../../constants/csrcard";

const CsrComponent = () => {
     return (
          <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 py-20">
               {csrCards.map((csrCard, index) => (
                    <CsrCard
                         key={index}
                         image={csrCard.image}
                         title={csrCard.title}
                         content={csrCard.content}
                         link={csrCard.link}
                    />
               ))}
          </div>
     );
}

type CsrCardProps = {
     image: string;
     title: string;
     content: string;
     link?: string;
}

function CsrCard({ image, title, content, link }: CsrCardProps) {
     return (
          <div className="p-2">
               <h3 className="md:text-2xl text-lg mb-3">
                    {link ? (<Link to={link} className="hover:underline">{title}</Link>) : title}
               </h3>
               {link ? (
                    <Link to={link}>
                         <img src={image} alt="" className="mb-6 block object-cover aspect-video" />
                    </Link>
               ) : (
                    <img src={image} alt="" className="mb-6 block object-cover aspect-video" />
               )}
               <p className="text-sm leading-loose block">
                    {content}
               </p>
          </div>
     );
}


export default CsrComponent;