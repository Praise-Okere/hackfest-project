import { useSidebar } from "../hooks/useSidebar";
import DashboardHeader from "./DashboardHeader";
import DashboardTitle from "./DashboardTitle";

const DashboardMain = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div
      className={`flex flex-col  ${isSidebarOpen ? "md:ml-[300px]" : "ml-0"}`}
    >
      <div className='sticky top-0'>
        <DashboardHeader />
      </div>
      <div className='m-5 mt-10'>
        <DashboardTitle />
      </div>
    </div>
  );
};

export default DashboardMain;
