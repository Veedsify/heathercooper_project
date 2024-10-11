import { Link, useLocation } from "react-router-dom";
import { socialmedia } from "../../constants/socialmedia";
import NavLink from "../sub/navlink";
import { navlinks } from "../../constants/navlinks";
import { useEffect, useState } from "react";
import { SETTINGS } from "../../constants/setting";
type NavbarProps = {
     title?: string;
     image: string;
     type: 'full' | 'mid' | 'small';
}
const Navbar = ({ }: NavbarProps) => {
     const pathname = useLocation().pathname;
     const [isFloating, setIsFloating] = useState(false);
     useEffect(() => {
          const handleScroll = () => {
               const scrollHeight = window.scrollY;
               setIsFloating(scrollHeight > SETTINGS.NUMBERS.FLOATING_HEIGHT);
          };
          window.addEventListener('scroll', handleScroll);
          // Clean up the event listener on component unmount
          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, []);
     return (
          <nav
               className={`w-full duration-200 ease-in-out px-2 ${isFloating
                    ? 'md:fixed top-0 z-50 py-4 bg-cyan-950 md:bg-white md:py-6'
                    : 'py-4 md:py-6 bg-cyan-950 md:bg-white md:bg-opacity-0'
                    }`}
          >
               <div className="container mx-auto">
                    <div className="flex justify-between items-center border-gray-50">
                         <div>
                              <a href="/" className="flex items-center gap-2">
                                   <img src="/logo.svg" alt="Logo" width={70} />
                                   <span className="font-bold text-white md:text-black">
                                        Ice Investmnet
                                   </span>
                              </a>
                         </div>
                         <div>
                              <ul className="md:flex space-x-3 hidden">
                                   {navlinks.map((item, index) => (
                                        <NavLink name={item.name} link={item.link} key={index} isActive={pathname === item.pageId} />
                                   ))}
                              </ul>
                         </div>
                         <div className="space-x-2">
                              {
                                   socialmedia.map((item, index) => (
                                        <Link to={item.link} className="rounded-full border border-amber-500 inline-block aspect-square p-2" key={index}>
                                             {item.icon}
                                        </Link>
                                   ))
                              }
                         </div>
                    </div>
               </div>
          </nav>
     );
}
export default Navbar;