import Topbar from "./Topbar/Topbar";
import Secondbar from "./SecondBar/Secondbar";
import Navbar from "./Navbar/Nav";

import { Divider } from "antd";

const Header = () => {
  return (
    <>
      <Topbar />
      <hr />
      <Secondbar />
      <hr />
      <Navbar />
    </>
  );
};

export default Header;
