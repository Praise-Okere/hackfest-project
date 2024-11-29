import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import lucide-react icons
import Button from "./Button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "team", path: "/team" },
    { name: "support", path: "/support" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className='relative overflow-visible'>
      <div
        className='flex justify-between items-center py-4 px-6 md:px-10'
        style={{
          backgroundImage: "url('/navBg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Logo */}
        <div className='text-lg font-bold'>
          <span>New Logo.</span>
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          <button onClick={toggleMobileMenu} className='text-black'>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Links for Desktop */}
        <div className='hidden md:block'>
          <ul className='flex justify-center items-center gap-8 capitalize'>
            {links.map((link, i) => (
              <li
                key={i}
                className='border-b border-transparent hover:border-black transition-all duration-200'
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className='hidden md:flex justify-center items-center gap-4'>
          <Button>Login</Button>
          <Button variant={"primary"}>See a Demo</Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className='absolute top-full left-0 w-full bg-white shadow-md md:hidden'>
          <ul className='flex flex-col gap-4 py-4 px-6 capitalize'>
            {links.map((link, i) => (
              <li
                key={i}
                className='border-b border-gray-300 pb-2 text-black hover:text-blue-600 transition-colors duration-200'
              >
                {link.name}
              </li>
            ))}
          </ul>
          <div className='flex flex-col gap-4 py-4 px-6'>
            <Button>Login</Button>
            <Button variant={"primary"}>See a Demo</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
