import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from "react";
const Hero = () => {
     // Background Parallax content 
     const [yPos, setYPos] = useState(0);
     // Background Parallax content 
     useEffect(() => {
          const handleScroll = () => {
               // Update the position immediately on scroll
               setYPos(window.scrollY * 0.4); // Adjust the division for desired effect
          };
          window.addEventListener('scroll', handleScroll);
          // Cleanup function to remove event listener
          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, []);
     return (
          <Swiper
               spaceBetween={50}
               slidesPerView={1}
               navigation
               loop
               autoplay={{ delay: 5000 }}
               style={{
                    transform: `translateY(${yPos}px)` // Apply the parallax effect
               }}
               pagination={{ clickable: true }}
               modules={[Navigation, Pagination]}
               onSwiper={(swiper) => console.log(swiper)}
               className="md:h-screen w-auto overflow-hidden bg-white border-b relative z-40"
          >
               <SwiperSlide className="relative flex flex-col justify-center h-full w-full">
                    <div className="flex md:flex-row flex-col justify-center items-center md:items-end h-full w-full bg-opacity-50 container p-2 mx-auto">
                         <div className="flex-1 flex items-center h-full md:w-1/2 mt-10 mb-10 md:mt-0 md:mb-0">
                              <div className="text-black">
                                   <h1 className="text-3xl lg:text-4xl mb-4 font-bold">
                                        INNOVATIVE PHARMACEUTICALS
                                   </h1>
                                   <p className="text-sm lg:text-base max-w-xl leading-loose">
                                        Nationwide distribution of premium quality pharmaceutical products.
                                   </p>
                                   <button className="md:px-8 md:py-3 px-6 py-2 bg-amber-500 text-white rounded mt-4">
                                        Get Started
                                   </button>
                              </div>
                         </div>
                         <img src="/hero.png" className="bottom-0 left-0 md:w-1/2 h-full object-contain flex-1 md:-translate-x-16" />
                    </div>
               </SwiperSlide>
               <SwiperSlide className="relative h-full">
                    <div className="flex md:flex-row flex-col justify-center items-center md:items-end h-full w-full bg-opacity-50 container p-2 mx-auto">
                         <img src="/hero2.png" className="bottom-0 left-0 md:w-1/2 h-full object-contain flex-1 md:-translate-x-16" />
                         <div className="flex-1 flex items-center h-full md:w-1/2 mt-10 mb-10 md:mt-0 md:mb-0">
                              <div className="text-black">
                                   <h1 className="text-3xl lg:text-4xl mb-4 font-bold">
                                        AN ABIDING LEGACY
                                   </h1>
                                   <p className="text-sm lg:text-base max-w-xl leading-loose">
                                        Over 3 decades of dominance in distributive trade in Nigeria.
                                   </p>
                                   <button className="md:px-8 md:py-3 px-6 py-2 bg-amber-500 text-white rounded mt-4">
                                        Get Started
                                   </button>
                              </div>
                         </div>
                    </div>
               </SwiperSlide>
          </Swiper>
     );
}
export default Hero;
