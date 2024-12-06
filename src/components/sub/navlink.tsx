import { Link } from "react-router-dom";

type NavLinkProps = {
     name: string;
     link: string;
     isActive?: boolean;
}

const NavLink = ({ name, link, isActive }: NavLinkProps) => {
     return (
          <li>
               <Link className={`px-4 py-2 lg:rounded font-semibold text-nowrap hover:outline lg:inline-block lg:border-none border-gray-500 block border-b rounded-none outline-1 hover:outline-[#ea6768]  hover:text-[#ea6768]
               ${isActive ? 'text-[#ea6768] outline outline-[#ea6768] outline-1' : 'text-white lg:text-black'} `} to={link}>{name}</Link>
          </li>
     );
}

export default NavLink;