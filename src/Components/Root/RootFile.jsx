import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const RootFile = () => {
  return (
    <div>
      <NavBar />
      <Outlet></Outlet>
    </div>
  );
};

export default RootFile;
