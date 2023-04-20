import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
const handleMenu = () => {
  console.log("It is okay");
  // alert("it is working");
};
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpenMenu(false);
  }, [location]);

  return (
    <nav className="h-full w-full bg-[#08415C] px-4">
      <div className="h-[4rem] w-full bg-[#08415C] flex items-center justify-between px-4">
        <div className="text-[#f9f9f9] uppercase text-[19px] font-medium">
          <h1>Fake Store Api</h1>
        </div>
        <div>
          <div className="">
            <input type="text" />
          </div>
        </div>
        <ul className="hidden md:flex">
          <li className="px-2">
            <NavLink to="/" className="text-white hover:font-medium">
              Home
            </NavLink>
          </li>
          <li className="px-2">
            <NavLink
              to="/login"
              className="text-white hover:font-medium capitalize"
            >
              Login
            </NavLink>
          </li>
          <li className="px-2">
            <NavLink to="/register" className="text-white hover:font-medium">
              Register
            </NavLink>
          </li>
        </ul>
        <div
          className="flex flex-col md:hidden"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          <div className="w-[2rem] h-[3px] bg-[#fff] mb-1"></div>
          <div className="w-[2rem] h-[3px] bg-[#fff] mb-1"></div>
          <div className="w-[2rem] h-[3px] bg-[#fff]"></div>
        </div>
      </div>
      {openMenu ? (
        <ul className="md:hidden flex flex-col py-4">
          <li className="px-2">
            <NavLink to="/" className="text-white hover:font-medium">
              Home
            </NavLink>
          </li>
          <li className="px-2">
            <NavLink
              to="/login"
              className="text-white hover:font-medium capitalize"
            >
              Login
            </NavLink>
          </li>
          <li className="px-2">
            <NavLink to="/register" className="text-white hover:font-medium">
              Register
            </NavLink>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default Navbar;
