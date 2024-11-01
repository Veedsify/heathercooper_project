import { Link, useLocation } from "react-router-dom";
import { socialmedia } from "../../constants/socialmedia";
import NavLink from "../sub/navlink";
import { navlinks } from "../../constants/navlinks";
import { useEffect, useRef, useState } from "react";
import { SETTINGS } from "../../constants/setting";
import { LucideMenu, X } from "lucide-react";
type NavbarProps = {
     title?: string;
     image: string;
     type: 'full' | 'mid' | 'small';
}
const Navbar = ({ }: NavbarProps) => {
     const pathname = useLocation().pathname;
     const [isFloating, setIsFloating] = useState(false);
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const ref = useRef<HTMLUListElement>(null);
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
     useEffect(() => {
          const handleClick = (e: MouseEvent) => {
               const toggleBtn = document.getElementById('toggleBtn') as HTMLButtonElement;
               // Check if e.target is a valid Node
               if (e.target instanceof Node) {
                    if (
                         ((ref.current && !ref.current.contains(e.target)) ||
                              (toggleBtn && !toggleBtn.contains(e.target))) && isMenuOpen
                    ) {
                         // setIsMenuOpen(false);
                    }
               }
          };
          window.addEventListener('click', handleClick);
          return () => {
               window.removeEventListener('click', handleClick);
          };
     }, [ref.current]);
     const handleMenuToggle = () => {
          setIsMenuOpen(!isMenuOpen);
     }
     return (
          <nav
               className={`w-full duration-200 ease-in-out px-2 ${isFloating
                    ? 'lg:fixed top-0 z-50 py-4 bg-cyan-950 lg:bg-white lg:shadow lg:py-6'
                    : 'py-4 lg:py-6 bg-cyan-950 lg:bg-white lg:bg-opacity-5 lg:backdrop-blur-[2px]'
                    }`}
          >
               <div className="container mx-auto">
                    <div className="flex justify-between lg:items-center border-gray-50">
                         <div>
                              <Link to="/" className="flex items-center gap-2">
                                   <img src="/logo.png" alt="Logo" width={70} />
                                   <span className="font-bold tracking-tighter text-white text-xl hidden xl:block lg:text-black">
                                        Ice Investment
                                   </span>
                              </Link>
                         </div>
                         <div
                              className={`${isMenuOpen ? 'absolute lg:static w-full left-0 h-full -bottom-full lg:mt-0 mt-8 flex-1' : 'hidden lg:block'} duration-300 ease-in-out`}
                         >
                              <ul
                                   ref={ref}
                                   className={`flex flex-1 flex-col lg:flex-row w-full bg-cyan-950 lg:bg-transparent text-white left-0 lg:shadow-none shadow px-4 py-10 lg:py-0 lg:relative gap-8 duration-300 ease-in-out`}>
                                   {navlinks.map((item, index) => (
                                        <NavLink name={item.name} link={item.link} key={index} isActive={pathname === item.pageId} />
                                   ))}
                              </ul>
                         </div>
                         <div className="mt-3">
                              <button
                                   id="toggleBtn"
                                   className="lg:hidden block cursor-pointer"
                                   onClick={handleMenuToggle}
                              >
                                   {!isMenuOpen ?
                                        <LucideMenu size={34} stroke="#fff" />
                                        :
                                        <X size={34} stroke="#fff" />
                                   }
                              </button>
                         </div>
                         <div className="space-x-2 hidden lg:block">
                              {
                                   socialmedia.map((item, index) => (
                                        <Link target="_blank" to={item.link} className="rounded-full border border-amber-500 inline-block aspect-square p-2" key={index}>
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