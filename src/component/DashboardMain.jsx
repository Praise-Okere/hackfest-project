import DashboardHeader from "./DashboardHeader";
import DashboardTitle from "./DashboardTitle";

const DashboardMain = () => {
  return (
    <div className='w-full'>
      <DashboardHeader />
      <div className='m-5 mt-10'>
        <DashboardTitle />
      </div>
    </div>
  );
};

export default DashboardMain;
