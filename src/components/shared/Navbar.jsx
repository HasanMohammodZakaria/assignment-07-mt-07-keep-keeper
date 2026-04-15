
import headerLogo from "../../assets/logo.png";
import { NavLink } from "react-router";
import { RiHome2Line } from "react-icons/ri";
import { GoClock } from "react-icons/go";
import { TfiStatsUp } from "react-icons/tfi";

const navLinkActive = ({ isActive }) =>
  isActive
    ? "flex items-center gap-1 bg-[#244D3F] text-white rounded-lg px-3 py-2"
    : "flex items-center gap-1 text-black";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="flex justify-between items-center container mx-auto px-4 py-4">
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
              className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-1"
            >
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

          <img
            src={headerLogo}
            alt="Header Logo"
            className="w-28 sm:w-32 md:w-36"
          />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">
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
  );
};

export default Navbar;
