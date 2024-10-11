import Navbar from "./nav";

type NavWithContentProps = {
     title?: string;
     image?: string;
}

const NavWithContent = ({
     title,
     image
}: NavWithContentProps) => {
     return (
          <div className="relative flex flex-col">
               {/* Background image */}
               <div className="absolute inset-0">
                    <img
                         src={image}
                         style={{ backgroundAttachment: 'fixed' }}
                         className="w-full h-full object-cover saturate-0"
                         alt="background"
                    />
                    <div
                         style={{
                              background: '#ffffffbb'
                         }}
                         className="absolute inset-0 bg-opacity-80">
                    </div>
               </div>
               {/* Overlay content */}
               <div className="relative z-10 flex flex-col w-full">
                    {/* Navbar */}
                    <header className="relative select-none min-h-[118px] transition-all duration-300">
                         <Navbar image="https://via.placeholder.com/150" type="full" />
                    </header>
                    {/* Centered content */}
                    <div className="flex-grow flex flex-col items-center justify-center py-20">
                         <h1 className="text-black font-bold text-4xl capitalize">
                              {title}
                         </h1>
                    </div>
               </div>
          </div>
     );
}
export default NavWithContent;