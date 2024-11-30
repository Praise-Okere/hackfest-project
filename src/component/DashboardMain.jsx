import { useAccountType } from "../hooks/useAccountType";
import { useSidebar } from "../hooks/useSidebar";
import DashboardHeader from "./DashboardHeader";
import DashboardBusiness from "./DashboardBusiness";
import DashboardIndividual from "./DashboardIndividual";

const DashboardMain = () => {
  const { isSidebarOpen } = useSidebar();
  const { accountType } = useAccountType();

  return (
    <div
      className={`flex flex-col  ${isSidebarOpen ? "md:ml-[300px]" : "ml-0"}`}
    >
      <div className='sticky top-0'>
        <DashboardHeader />
      </div>
      <div className='m-5 mt-10'>
        {accountType === "individual" && <DashboardIndividual />}
        {accountType === "business" && <DashboardBusiness />}
      </div>
    </div>
  );
};

export default DashboardMain;
