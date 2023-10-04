import React from "react";
import Circles from "./Circles";

function RolesCard() {
  return (
    <article className=" mt-8 w-2/5  rounded-lg  border-solid border-2  border-slate-300  flex flex-col gap-20 p-3 ">
      <div className="top_items flex w-full justify-between">
        <span className=" w-28  px-2 py-2 bg-gradient-to-r from-gray-300 to-gray-100 rounded-sm shadow-sm"></span>
        <Circles />
      </div>

      <div className="bottom_items flex flex-col gap-4">
        <span className=" w-3/6 px-10 py-2 bg-gradient-to-r from-gray-300 to-gray-100 rounded-sm shadow-sm"></span>
        <span className="w-2/6 px-10 py-2 bg-gradient-to-r from-gray-300 to-gray-100 rounded-sm shadow-sm"></span>
      </div>
    </article>
  );
}

export default RolesCard;
