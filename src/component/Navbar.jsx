import Button from "./Button";

const Navbar = () => {
  const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "services",
      path: "/services",
    },
    {
      name: "team",
      path: "/team",
    },
    {
      name: "support",
      path: "/support",
    },
  ];

  return (
    <div className='relative overflow-visible'>
      <div
        className='flex justify-between items-center py-4 px-10 '
        style={{
          backgroundImage: "url('/navBg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div>
          <span>New Logo.</span>
        </div>
        <div>
          <ul className='flex justify-center items-center gap-14 capitalize'>
            {links.map((link, i) => (
              <li key={i} className='border-b border-black'>
                {link.name}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex justify-center items-center gap-10'>
          <Button>Login</Button>
          <Button variant={"primary"}>See a Demo</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
