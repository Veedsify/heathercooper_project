import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  // Background Parallax content
  const [yPos, setYPos] = useState(0);
  // Background Parallax content
  useEffect(() => {
    const handleScroll = () => {
      // Update the position immediately on scroll
      setYPos(window.scrollY * 0.4); // Adjust the division for desired effect
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        transform: `translateY(${yPos}px)`, // Apply the parallax effect
      }}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      onSwiper={(swiper) => console.log(swiper)}
      className="md:h-screen w-auto overflow-hidden bg-white border-b relative z-40"
    >
      <SwiperSlide className="relative flex flex-col justify-center h-full w-full select-none">
        <div className="flex md:flex-row flex-col justify-center items-center md:items-end h-[80vh] w-full bg-opacity-50 container p-2 mx-auto">
          <div className="flex-1 flex items-center h-full md:w-1/2 mt-10 mb-10 md:mt-0 md:mb-0 z-10">
            <div className="text-white">
              <h1 className="text-3xl lg:text-5xl mb-4 font-bold tracking-widest text-wrap max-w-2xl">
                INNOVATIVE PHARMACEUTICALS
              </h1>
              <p className="text-sm lg:text-base max-w-xl leading-loose">
                Nationwide distribution of premium quality pharmaceutical
                products.
              </p>
              <Link
                to="/contact"
                className="md:px-8 md:py-3 px-6 py-2 bg-amber-500 text-white rounded mt-4 inline-block"
              >
                Get Started
              </Link>
            </div>
          </div>
          <img
            src="/images/backgrounds/hero.jpg"
            className="absolute bottom-0 left-0 w-full h-full object-cover flex-1 brightness-50 bg-black"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative flex flex-col justify-center h-full w-full select-none">
        <div className="flex md:flex-row flex-col justify-center items-center md:items-end h-[80vh] w-full bg-opacity-50 container p-2 mx-auto">
          <div className="flex-1 flex items-center h-full md:w-1/2 mt-10 mb-10 md:mt-0 md:mb-0 z-10">
            <div className="text-white">
              <h1 className="text-3xl lg:text-5xl mb-4 font-bold tracking-widest text-wrap max-w-2xl">
                NOURISHING QUALITY
              </h1>
              <p className="text-sm lg:text-base max-w-xl leading-loose">
                Experience top-tier food products, crafted for premium quality
                and freshness
              </p>
              <Link
                to="/contact"
                className="md:px-8 md:py-3 px-6 py-2 bg-amber-500 text-white rounded mt-4 inline-block"
              >
                Get Started
              </Link>
            </div>
          </div>
          <img
            src="/images/product_categories/food.jpg"
            className="absolute bottom-0 left-0 w-full h-full object-cover flex-1 brightness-50 bg-black"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative flex flex-col justify-center h-full w-full select-none">
        <div className="flex md:flex-row flex-col justify-center items-center md:items-end h-[80vh] w-full bg-opacity-50 container p-2 mx-auto">
          <div className="flex-1 flex items-center h-full md:w-1/2 mt-10 mb-10 md:mt-0 md:mb-0 z-10">
            <div className="text-white">
              <h1 className="text-3xl lg:text-5xl mb-4 font-bold tracking-widest text-wrap max-w-2xl">
                REFRESHING EXCELLENT
              </h1>
              <p className="text-sm lg:text-base max-w-xl leading-loose">
                Providing nationwide access to high-quality, flavorful beverage
                selections
              </p>
              <Link
                to="/contact"
                className="md:px-8 md:py-3 px-6 py-2 bg-amber-500 text-white rounded mt-4 inline-block"
              >
                Get Started
              </Link>
            </div>
          </div>
          <img
            src="/images/product_categories/beverages.jpg"
            className="absolute bottom-0 left-0 w-full h-full object-cover flex-1 brightness-50 bg-black"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Hero;
