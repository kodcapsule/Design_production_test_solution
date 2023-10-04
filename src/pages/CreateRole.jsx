import Asidebar from "../components/Asidebar";
import Card from "../components/Card";
import CopyRight from "../components/CopyRight";
import CreateRoleForm from "../components/CreateRoleForm";
import Details from "../components/Details";
import RolesCard from "../components/RolesCard";

function CreateRole() {
  return (
    <>
      <div className=" grid grid-cols-12  overflow-hidden mt-1 ">
        <div className="aside col-span-4 ">
          <Asidebar
            heading="Create new role"
            description="Enter the details of the role you want to create and click the Create role once completed"
          >
            <input type="text" />
            <CreateRoleForm />
          </Asidebar>
        </div>
        <div className="details col-span-8">
          <Details>
            <div className="details__container mt-10 flex flex-col justify-center items-center gap-6">
              <RolesCard />
              <div className=" text-center flex flex-col gap-2">
                <h1 className=" text-3xl font-bold text-slate-500">Preview</h1>
                <p>
                  Enter user details on the left panel to see a profile version
                  of the user here
                </p>
              </div>
            </div>
            <div className="copyright ml-[8rem] mt-[10rem]">
              <CopyRight />
            </div>
          </Details>
        </div>
      </div>
    </>
  );
}

export default CreateRole;
