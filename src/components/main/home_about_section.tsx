import { Link } from "react-router-dom";

type HomeAboutSectionProps = {
     flipped?: boolean;
     title?: string;
     description?: string;
     button?: string;
     buttonLink?: string;
     image?: string;
     withBg?: boolean;
     bgColor?: string;
     fullWidth?: boolean;
};

const HomeAboutSection = ({
     flipped = false,
     title = "About Us",
     description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim. Nam ac metus nec, euismod turpis. Nullam nec scelerisque neque.`,
     button = "Learn More",
     buttonLink = "#",
     image = "https://images.pexels.com/photos/257433/pexels-photo-257433.jpeg?auto=compress&cs=tinysrgb&w=600",
     withBg = false,
     bgColor = "bg-[#444]",
     fullWidth = false,
}: HomeAboutSectionProps) => {
     return (
          <section className={`${withBg ? bgColor : 'bg-white'} z-40 relative`}>
               <div className={`container mx-auto`}>
                    <div className={`flex flex-col md:flex-row items-center`}>
                         <div className={`flex-1 text-center md:text-left`}>
                              <div className="p-10">
                                   <h2 className={`text-3xl font-bold ${withBg ? "text-white" : "text-gray-800"} ${fullWidth && "mt-16"}`}>
                                        {title}
                                   </h2>
                                   <p className={`text-gray-600 mt-4 leading-relaxed ${withBg ? "text-white" : "text-gray-600"}`}>
                                        {description}
                                   </p>
                                   <Link
                                        to={buttonLink}
                                        className="mt-6 bg-amber-500 text-white px-8 py-3 rounded inline-block hover:bg-amber-600 transition duration-200"
                                   >
                                        {button}
                                   </Link>
                              </div>
                         </div>
                         <div className={`flex-1 ${flipped ? "md:order-first" : ""} mt-6 md:mt-0`}>
                              <img
                                   src={image}
                                   alt="About Us"
                                   className={`w-full aspect-auto object-cover`}
                              />
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default HomeAboutSection;
