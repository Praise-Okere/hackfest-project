import { Outlet } from "react-router-dom";
import SideNav from "../component/SideNav";

const Dashboard = () => {
  return (
    <div className='flex '>
      <div className='sticky top-0 left-0 w-[250px] h-screen'>
        <SideNav />
      </div>
      <div className='flex-1'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
