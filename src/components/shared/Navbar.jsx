import headerLogo from "../../assets/logo.png";
import { NavLink } from "react-router";
import { RiHome2Line } from "react-icons/ri";
import { GoClock } from "react-icons/go";
import { TfiStatsUp } from "react-icons/tfi";
import { FiSearch } from "react-icons/fi";

const navLinkActive = ({ isActive }) =>
  isActive
    ? "flex items-center gap-1 bg-[#244D3F] text-white text-[15px] font-medium rounded-lg px-3 py-2"
    : "flex items-center gap-1 text-[#64748B] text-[15px] font-medium hover:text-[#244D3F]";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      
      
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 py-3">

        
        <div className="flex items-center">
          <img
            src={headerLogo}
            alt="logo"
            className="w-24 sm:w-28 md:w-32"
          />
        </div>

        <div className="flex items-center gap-2">

          
          <ul className="hidden lg:flex items-center gap-2">
            <li>
              <NavLink to="/" className={navLinkActive}>
                <RiHome2Line /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/timeline" className={navLinkActive}>
                <GoClock /> TimeLine
              </NavLink>
            </li>
            <li>
              <NavLink to="/stats" className={navLinkActive}>
                <TfiStatsUp /> Stats
              </NavLink>
            </li>
          </ul>

          
          <div className="lg:hidden dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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

            <ul className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-50">
              <li>
                <NavLink to="/" className={navLinkActive}>
                  <RiHome2Line /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline" className={navLinkActive}>
                  <GoClock /> TimeLine
                </NavLink>
              </li>
              <li>
                <NavLink to="/stats" className={navLinkActive}>
                  <TfiStatsUp /> Stats
                </NavLink>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
