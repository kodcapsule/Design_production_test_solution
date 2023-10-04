import Button from "./Button";

import { FaPlus } from "react-icons/fa";
import ToggleButton from "./ToggleButton";
import ConfigureItem from "./ConfigureItem";

function handleFormSubmission(e) {
  e.preventDefault();
  console.log("you submitted the  user role form");
}

function CreateRoleForm() {
  return (
    <form className=" flex flex-col gap-6" onSubmit={handleFormSubmission}>
      <div className="input-group ">
        <label htmlFor="">Name</label>
        <input
          className=" text__input"
          type="text"
          placeholder="Enter name of role here"
          required
        />
      </div>

      <div className="">
        <label htmlFor="">Configure seats</label>
        <div className="row flex flex-col  rounded-lg   border-2   border-slate-300 border-dashed shadow-md ">
          <span className="">
            <ConfigureItem accessName="card Module" />
          </span>
          <span className=" ">
            <ConfigureItem accessName="Client 360" />
          </span>
          <ConfigureItem accessName="Swift and RTGS" />
          <ConfigureItem accessName="cash allocations" />
        </div>
      </div>

      <Button handleClick={handleFormSubmission}>
        <div className=" flex justify-center items-center gap-2">
          <span className=" text-[10px]">
            <FaPlus />
          </span>
          <span>create role</span>
        </div>
      </Button>
    </form>
  );
}

export default CreateRoleForm;
