import NavbarItem from "./NavbarItem";
import { RiSettings5Fill } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { BsTranslate } from "react-icons/bs";
import { GiStack } from "react-icons/gi";

// Navbar component
function Navbar() {
  return (
    <div className="navbarcontainer">
      <nav className=" bg-gradient-to-r from-deepBlue to-purple-900 flex justify-between px-6 py-2 text-white">
        {/* Company Logo */}
        <div className="logo flex gap-5 uppercase justify-center items-center">
          <span className=" px-2 py-2 text-2xl rounded-md bg-fuchsia-700">
            <GiStack />
          </span>

          <p className="flex px-2 py-1 gap-2 bg-indigo-600  rounded-md justify-center items-center cursor-pointer">
            <span>user & Role Management</span>
            <span className=" text-2xl">
              <MdOutlineKeyboardArrowDown />
            </span>
          </p>
        </div>

        {/*Left Navbar items   */}
        <ul className=" flex gap-6 ">
          <NavbarItem url="" icon={<BsTranslate />} urlName="English" />
          <NavbarItem
            url="settings"
            icon={<RiSettings5Fill />}
            urlName="settings"
          />
          <NavbarItem
            url="login"
            icon={<RiLogoutBoxRFill />}
            urlName="logout"
          />
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
