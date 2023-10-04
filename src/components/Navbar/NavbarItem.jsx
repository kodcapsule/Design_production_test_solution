import { NavLink } from "react-router-dom";

function NavbarItem({ url, icon, urlName }) {
  return (
    <li>
      <NavLink
        className={` flex justify-center items-center uppercase gap-2 text-center cursor-pointer font-semibold`}
        to={`${url}`}
      >
        <span className=" navbarIcon">{icon}</span>
        <span>{urlName}</span>
      </NavLink>
    </li>
  );
}

export default NavbarItem;
