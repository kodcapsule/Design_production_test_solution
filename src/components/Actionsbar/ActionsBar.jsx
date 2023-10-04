import { NavLink } from "react-router-dom";
import { FaPlus, FaBars } from "react-icons/fa";

function Actionsbar() {
  return (
    <div className="px-3 py-4 bg-white text-gray-600 shadow-sm ">
      <ul className=" flex gap-14 text-sm ">
        <li>
          <NavLink
            className={` flex justify-center items-center uppercase gap-1 text-center cursor-pointer font-semibold`}
            to="create_user"
          >
            <span className=" text-[10px]">
              <FaPlus />
            </span>
            <span>Create User</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={` flex justify-center items-center uppercase gap-1 text-center cursor-pointer font-semibold`}
            to="create_role"
          >
            <span className=" text-[10px]">
              <FaPlus />
            </span>
            <span>Create Role</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={` flex justify-center items-center uppercase gap-1 text-center cursor-pointer font-semibold`}
            to="users"
          >
            <span className=" text-[12px]">
              <FaBars />
            </span>
            <span>All Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={` flex justify-center items-center uppercase gap-1 text-center cursor-pointer font-semibold`}
            to="roles"
          >
            <span className=" text-[12px]">
              <FaBars />
            </span>
            <span>All Roles</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Actionsbar;
