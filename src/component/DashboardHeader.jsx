import { BellDotIcon, LayoutDashboard, SearchIcon } from "lucide-react";
import Button from "./Button";

const DashboardHeader = () => {
  return (
    <div className='flex justify-between items-center py-3 px-2 bg-white'>
      <div>
        <LayoutDashboard />
      </div>
      <div className='flex justify-center items-center gap-8 mr-10'>
        <div className='bg-white border-[0.7px] w-[400px] border-black flex justify-between items-center rounded-full '>
          <input
            type='search'
            name=''
            id=''
            className='flex-1 px-6 py-2 outline-none bg-transparent'
          />
          <SearchIcon className='mr-3' />
        </div>
        <div>
          <Button variant={"light"}>
            <BellDotIcon />
          </Button>
        </div>
        <div>
          <Button variant={"light"}>User</Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
