import React from "react";
import CheckBox from "./CheckBox";

function Table({ column1, column2, tableData }) {
  if (!tableData) return <h1 className=" text-xl">No Table data</h1>;

  return (
    <div class="relative overflow-x-auto  sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3 flex gap-4">
              <CheckBox />
              {column1}
            </th>
            <th scope="col" class="px-6 py-3">
              {column2}
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr
              class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 cursor-pointer"
              key={data.id}
            >
              <td class="px-6 flex gap-4 py-4">
                <CheckBox />{" "}
                <span>
                  {column2 === "Role" ? data["name"] : data["roleName"]}
                </span>
              </td>
              <td class="px-6 py-4">
                {column2 === "Role" ? data["role"] : data["accessLevel"]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
