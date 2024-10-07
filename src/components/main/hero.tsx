import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Hero = () => {
     return (
          <Swiper
               spaceBetween={50}
               slidesPerView={1}
               navigation
               pagination={{ clickable: true }}
               scrollbar={{ draggable: true }}
               modules={[Navigation, Pagination]}
               onSwiper={(swiper) => console.log(swiper)}
               className="h-screen w-full "
          >
               <SwiperSlide className="relative flex flex-col justify-center h-full w-full">
                    <div className="flex justify-center items-end h-full w-full bg-opacity-50 max-w-screen-2xl mx-auto">
                         <div className="flex-1 flex items-center h-full">
                              <div className="text-black">
                                   <h1 className="text-6xl mb-4 font-bold">
                                        Body Care
                                   </h1>
                                   <p className="text-lg max-w-lg leading-loose">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut saepe nesciunt necessitatibus quis officiis consequatur  maxime rerum distinctio amet fugit ab quibusdam, vero dolorem?
                                   </p>
                                   <button className="px-8 py-3 bg-amber-500 text-white rounded mt-4">
                                        Get Started
                                   </button>
                              </div>
                         </div>
                         <img src="/hero.png" className="bottom-0 left-0 w-full h-full object-contain flex-1" />
                    </div>
               </SwiperSlide>
               <SwiperSlide className="relative h-full">

               </SwiperSlide>
               <SwiperSlide className="relative h-full">

               </SwiperSlide>
               <SwiperSlide className="relative h-full">

               </SwiperSlide>
          </Swiper>
     );
}

export default Hero;