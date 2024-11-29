import { Outlet } from "react-router-dom";
import SideNav from "../component/SideNav";

const Dashboard = () => {
  return (
    <div className='flex h-screen'>
      <SideNav />
      <div className='flex-1'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
