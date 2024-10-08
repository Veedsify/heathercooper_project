import { Link } from "react-router-dom";

type NavLinkProps = {
     name: string;
     link: string;
     isActive?: boolean;
}

const NavLink = ({ name, link, isActive }: NavLinkProps) => {
     return (
          <li>
               <Link className={`px-4 py-2 rounded font-semibold hover:outline  outline-1 hover:outline-amber-400  hover:text-amber-400
               ${isActive ? 'text-amber-400 outline outline-amber-400 outline-1' : 'text-black'} `} to={link}>{name}</Link>
          </li>
     );
}

export default NavLink;