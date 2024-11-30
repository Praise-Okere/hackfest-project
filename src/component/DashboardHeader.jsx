import { BellDotIcon, LayoutDashboard, SearchIcon } from "lucide-react";
import Button from "./Button";
import { useSidebar } from "../hooks/useSidebar";
import { ConnectButton } from "@suiet/wallet-kit";

const DashboardHeader = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className='flex justify-between items-center py-3 px-2 bg-white'>
      <div className='hidden max-md:flex'>
        <LayoutDashboard onClick={toggleSidebar} />
      </div>
      <div className='flex justify-between items-center w-full gap-8 mr-10'>
        <div className='bg-white border-[0.7px] w-[300px] max-md:hidden border-black flex justify-between items-center rounded-full '>
          <input
            type='search'
            name=''
            id=''
            className='flex-1 px-6 py-2 outline-none bg-transparent'
          />
          <SearchIcon className='mr-3' />
        </div>
        <div className='flex justify-end w-full items-center gap-3'>
          <div>
            <Button variant={"light"}>
              <BellDotIcon />
            </Button>
          </div>
          <div>
            <ConnectButton variant={"light"}>User</ConnectButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
