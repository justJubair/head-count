import { Link, NavLink } from "react-router-dom";
// import logo
import logo from "../../assets/images/logo-transparent.png";

const Navbar = () => {
    const navLinks = <>
    <li className="duration-300 ease-in-out hover:border-b-2 border-yellow-400">
    <NavLink  to="/"
  className={({ isActive }) =>
    isActive ? "text-yellow-400" : ""
  }>
            Home
        </NavLink>
    </li>
       
    <li className="duration-300 ease-in-out hover:border-b-2 border-yellow-400">
    <NavLink to="/users"
  className={({ isActive }) =>
    isActive ? "text-yellow-400" : ""
  }>
            User Base
        </NavLink>
    </li>
       
    <li className="duration-300 ease-in-out hover:border-b-2 border-yellow-400">
    <NavLink to="/about"
  className={({ isActive }) =>
    isActive ? "text-yellow-400" : ""
  }>
            About Us
        </NavLink>
    </li>
       
       
    </>
  return (
    <>
      <div className="absolute z-50 navbar text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="space-y-2 dropdown-content mt-3 z-[1] p-4 shadow bg-black rounded-box w-52"
            >
             {/* navlinks */}
             {navLinks}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost">
            <img src={logo} className="w-32" alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-7 font-bold">
           {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
        </div>
      </div>
    </>
  );
};
export default Navbar;
