import React from "react";
//css
import "./topbar.css";

//icons
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";

const Topbar = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-around shadow-sm topbar-container">
        <div>
          <h2 className="hidden md:block">
            Leading Digital Transformation - DGBITS
          </h2>
          <h2 className="sm:block md:hidden">DGBITS</h2>
        </div>
        <div>
          <h2>Tirupati, AP, INDIA</h2>
        </div>
        <div className="flex flex-row justify-center align-middle ">
          <BsFacebook color="dodgerblue" style={{ margin: "5px" }} />
          <BsYoutube color="red" style={{ margin: "5px" }} />
          <BsTwitter color="skyblue" style={{ margin: "5px" }} />
          <BsLinkedin color="orange" style={{ margin: "5px" }} />
        </div>
      </div>
    </>
  );
};

export default Topbar;
