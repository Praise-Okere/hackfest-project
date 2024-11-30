import { useWallet } from "@suiet/wallet-kit";
import {
  ChartColumnIcon,
  LayoutDashboardIcon,
  LogOut,
  Presentation,
  Settings,
  Users,
  Wallet,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useSidebar } from "../hooks/useSidebar";
import { useEffect } from "react";
import { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const SideNav = () => {
  const { connected, disconnect } = useWallet(); // destructuring the connect and disconnect function fron useWallet
  const navigate = useNavigate();

  const links = [
    {
      name: "Dashboard",
      path: "/dashboard/home",
      icon: LayoutDashboardIcon,
    },
    {
      name: "Finances",
      path: "/dashboard/finances",
      icon: Wallet,
    },
    {
      name: "Analytics",
      path: "/dashboard/analytics",
      icon: ChartColumnIcon,
    },
    {
      name: "Customers",
      path: "/dashboard/customers",
      icon: Users,
    },
    {
      name: "Guides and Demos",
      path: "/dashboard/guides-demos",
      icon: Presentation,
    },
  ];

  const { toggleSidebar } = useSidebar();

  const handleToggle = () => {
    // Automatically handle sidebar state based on screen size
    useEffect(() => {
      const handleResize = () => {
        // Close the sidebar if the screen width is less than 768px
        if (window.innerWidth < 768) {
          toggleSidebar();
        }
      };

      // Add resize event listener
      window.addEventListener("resize", handleResize);

      // Initial check when the component mounts
      handleResize();

      // Cleanup the event listener when the component unmounts
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  };

  return (
    <aside className='bg-background border-r z-50 border-gray-800 h-screen p-4'>
      <div>
        <div className='flex justify-between items-center mb-8'>
          <Link to={"/"}>
            <img src='/logo.png' alt='' />
          </Link>
        </div>
        <div className='flex flex-col gap-4'>
          {links.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              onClick={() => handleToggle()}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-md w-[80%] ml-1 hover:text-white ${
                  isActive ? "bg-accent text-white" : "hover:bg-accentHover "
                }`
              }
            >
              <link.icon className='min-w-5 min-h-5' />
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>
        <div className='mt-80 ml-1'>
          <NavLink
            to='/'
            onClick={() => handleToggle()}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-md w-[80%] hover:text-white ${
                isActive ? "bg-accent text-white" : "hover:bg-accentHover "
              }`
            }
          >
            <Settings className='w-5 h-5' />
            <span>Logout</span>
          </NavLink>
        </div>
      </div>
      <div className='mt-80 ml-1' onClick={handleDisconnect}>
        <div
          className={({ isActive }) =>
            `flex items-center gap-3 p-2 rounded-md w-[80%] hover:text-white ${
              isActive ? "bg-accent text-white" : "hover:bg-accentHover "
            }`
          }
        >
          <LogOut className='w-5 h-5' />
          <span>LogOut</span>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
