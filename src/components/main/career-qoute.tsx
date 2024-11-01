const CareerQoute = () => {
     return (
          <div className="p-2 container mx-auto min-h-[30vh] flex flex-col justify-center">
               <div className="flex justify-center gap-8">
                    <div className="relative">
                         <img src="/icon/quote.svg" alt="" className="w-16 absolute md:-top-6 -top-16  md:-left-24" />
                         <h4 className="text-center  max-w-2xl flex-1 self-center">
                              <span className="font-bold md:text-2xl text-lg">
                              Whenever you see a successful business, someone once made a courageous decision
                              </span>
                              &nbsp;
                              ~ &nbsp; <span className="italic font-extralight md:text-lg text-xs">Peter F. Drucker</span>
                         </h4>
                         <img src="/icon/quote.svg" alt="" className="w-16 rotate-180 absolute right-0" />
                    </div>
               </div>
          </div >
     );
}
export default CareerQoute;