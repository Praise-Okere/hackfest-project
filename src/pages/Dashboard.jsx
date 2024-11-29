import { Outlet } from "react-router-dom";
import SideNav from "../component/SideNav";
import { useSidebar } from "../hooks/useSidebar";

const Dashboard = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div className='flex '>
      <div
        className={`fixed top-0 left-0 h-screen  transition-transform duration-300 ${
          isSidebarOpen
            ? "-translate-x-0 w-[300px]"
            : "-translate-x-[300px] w-0"
        } `}
      >
        <SideNav />
      </div>
      <div className='flex-1 transition-all duration-300'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
