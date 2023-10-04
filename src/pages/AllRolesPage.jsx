import { useQuery } from "react-query";
import Asidebar from "../components/Asidebar";

import Details from "../components/Details";
import Table from "../components/Table";
import { fetchUsersRoles } from "../../api/endPoints";

function AllRolesPage() {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["roles"],
    queryFn: fetchUsersRoles,
  });
  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>{error.message}</span>;
  console.log(data[0]);
  return (
    <>
      <div className=" grid grid-cols-12  overflow-hidden mt-1 ">
        <div className="aside col-span-4 ">
          <Asidebar heading="All roles">
            <Table column1="Name" column2="Access level" tableData={data} />
          </Asidebar>
        </div>
        <div className="details col-span-8">
          <Details />
        </div>
      </div>
    </>
  );
}

export default AllRolesPage;
