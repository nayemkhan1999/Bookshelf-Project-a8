import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center mt-28  w-[96vh]  mx-auto bg-base-200 rounded-2xl p-5">
      <h1 className="text-2xl font-medium">
        Opps..!! Sorry This page is not found
      </h1>
      <NavLink to={"/"}>
        <button className="btn-active p-5 rounded-xl bg-error text-white font-medium text-xl mt-8">
          Go Back to Home
        </button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
