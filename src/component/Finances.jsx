import { useSidebar } from "../hooks/useSidebar";
import DashboardHeader from "./DashboardHeader";

const Finances = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div
      className={`flex flex-col  ${isSidebarOpen ? "md:ml-[300px]" : "ml-0"}`}
    >
      <div className='sticky top-0'>
        <DashboardHeader />
      </div>
    </div>
  );
};

export default Finances;
