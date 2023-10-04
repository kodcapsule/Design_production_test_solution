import React from "react";
import ToggleButton from "./ToggleButton";

function ConfigureItem({ accessName }) {
  return (
    <div className="flex  bg-white px-2 py-1  justify-between items-center w-full hover:bg-gray-100 rounded-sm cursor-pointer">
      <span className="text-left">{accessName}</span>
      <div className="left flex gap-4 px-2">
        <span className=" uppercase  border-2  border-slate-300 border-solid px-4 h-6 ml-6  rounded-md">
          Access
        </span>
        <ToggleButton />
      </div>
    </div>
  );
}

export default ConfigureItem;
