import { useQuery } from "react-query";
import Asidebar from "../components/Asidebar";
import Details from "../components/Details";
import Table from "../components/Table";

import { fetchUsers } from "../../api/endPoints";

function Users() {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>{error.message}</span>;
  console.log(data);

  return (
    <>
      <div className=" grid grid-cols-12  overflow-hidden mt-1 ">
        <div className="aside col-span-4 ">
          <Asidebar heading="All users">
            <Table column1="Name" column2="Role" tableData={data} />
          </Asidebar>
        </div>
        <div className="details col-span-8">
          <Details />
        </div>
      </div>
    </>
  );
}

export default Users;
