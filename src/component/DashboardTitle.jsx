import { Download } from "lucide-react";
import Button from "./Button";

const DashboardTitle = () => {
  return (
    <div className='flex justify-between items-end'>
      <div className='flex flex-1 flex-col justify-center items-start gap-4'>
        <div className='flex flex-col gap-4'>
          <h3 className='text-xl font-medium'>Welcome back, NxtGen</h3>
          <p className='font-light'>
            You’ve made a profit of <span className='text-[#319F43]'>12%</span>{" "}
            in the last month.
          </p>
        </div>
        <div></div>
      </div>
      <div className='flex justify-center items-center gap-6'>
        <Button variant={"dashboard"}>Test</Button>
        <Button variant={"dashboardGray"} icon={<Download />}>
          {" "}
          Test
        </Button>
      </div>
    </div>
  );
};

export default DashboardTitle;
