import { LucideBriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";

const CareerJobs = () => {
     return (
          <div className="container mx-auto">
               <div className="relative flex items-center p-2">
                    <img src="/images/backgrounds/bg.jpg" className="absolute w-full h-full object-cover inset-0 top-0 left-0" alt="" />
                    <div className="absolute w-full h-full top-0 left-0 bg-[#FF1D25] mix-blend-multiply"></div>
                    <div className="absolute w-full h-full top-0 left-0 bg-[#FF1D25] bg-opacity-95"></div>
                    <div className="px-8 py-10 md:py-28 md:px-20 z-50 relative text-white">
                         <h2 className="mb-4 text-2xl md:text-3xl">
                              Iceinvestment Group looks out for <strong> exceptional talent.</strong>
                         </h2>
                         <p className="mb-8 text-sm md:text-base">
                              Please visit our job board to view and <strong> apply for available job openings.</strong>
                         </p>
                         <div>
                              <Link to="/careers" className="inline-block bg-[#FF1D25] text-gray-300 text-sm md:text-base font-medium group hover:bg-[#ca3d41] ">
                                   <span className="flex select-none group-hover transition-all duration-300">
                                        <span className="flex-1 p-5 text-sm">
                                             See available jobs listings
                                        </span>
                                        <span className="border-l-2 border-gray-400 p-5">
                                             <LucideBriefcaseBusiness/>
                                        </span>
                                   </span>
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default CareerJobs;