import React from "react";

function ToggleButton() {
  return (
    <label class="relative inline-flex items-center mb-5 cursor-pointer">
      <input type="checkbox" value="" class="sr-only peer" />
      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-deepBlue"></div>
    </label>
  );
}

export default ToggleButton;
