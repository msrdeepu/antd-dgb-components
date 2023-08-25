import Topbar from "./Topbar/Topbar";
import Secondbar from "./SecondBar/Secondbar";
import Megamenu from "./Megamenu/Megamenu";

const Header = () => {
  return (
    <>
      <Topbar />
      <hr />
      <Secondbar />
      <hr />
      <Megamenu />
    </>
  );
};

export default Header;
