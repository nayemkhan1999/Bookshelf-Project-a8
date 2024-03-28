import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="lg:mx-16 md:mx-2 font-work mt-10">
      <div className="hero min-h-screen bg-[#F2F2F2] rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20">
          <img src="/public/img/profile.png" className="max-w-sm " />
          <div className="">
            <h1 className="lg:text-6xl text-3xl font-bold mb-8">
              Books to freshen <br /> up your bookshelf
            </h1>

            <NavLink
              to={"/books"}
              className="btn btn-active text-white font-semibold bg-[#23BE0A]"
            >
              View The List
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
