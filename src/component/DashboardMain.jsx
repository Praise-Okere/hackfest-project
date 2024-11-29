import DashboardHeader from "./DashboardHeader";
import DashboardTitle from "./DashboardTitle";

const DashboardMain = () => {
  return (
    <div className=''>
      <div className='sticky top-0'>
        <DashboardHeader />
      </div>
      <div className='m-5 mt-20'>
        <DashboardTitle />
      </div>
    </div>
  );
};

export default DashboardMain;
