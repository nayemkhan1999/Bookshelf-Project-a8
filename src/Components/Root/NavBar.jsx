import { NavLink } from "react-router-dom";

const NavBar = () => {
  const Links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/books"}>Listed Books</NavLink>
      </li>
      <li>
        <NavLink to={"/read"}>Pages to Read</NavLink>
      </li>
    </>
  );
  return (
    <div className="lg:mx-16 md:mx-2 font-work">
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              {Links}
            </ul>
          </div>
          <h1 className="lg:text-3xl  font-bold">Book Club</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 text-lg font-medium  ">
            {Links}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <a className="lg:flex hidden btn bg-[#23BE0A] text-white font-semibold text-lg">
            Sign In
          </a>
          <a className="btn bg-[#59C6D2] text-white font-semibold text-lg">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
