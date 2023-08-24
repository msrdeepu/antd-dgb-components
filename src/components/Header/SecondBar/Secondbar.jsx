import React from "react";
//css
import "./secondbar.css";

import { Dropdown, Space, Button } from "antd";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

//icons
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";

const Secondbar = () => {
  const items = [
    {
      key: "1",
      label: <a rel="noopener noreferrer">+91 8919818886</a>,
    },
    {
      key: "2",
      label: <a rel="noopener noreferrer">support@dgbits.in</a>,
    },
  ];
  return (
    <>
      <div className="flex flex-row flex-wrap justify-around shadow-sm topbar-container">
        <div>
          <img
            src="https://dgbits.in/images/logo-dgbits.svg"
            className="logo-item"
            alt="logo"
          />
        </div>
        <div className="contact">
          <BiPhoneCall className=" hidden md:block" />
          <h3 className=" hidden md:block">+91 8919818886</h3>
        </div>
        <div className="contact">
          <AiOutlineMail className=" hidden md:block" />
          <h3 className=" hidden md:block">support@dgbits.in</h3>
        </div>
        <div className="contact">
          <Dropdown
            className="sm:block md:hidden"
            menu={{
              items,
            }}
            placement="bottomRight"
            arrow
          >
            <Button>Contact</Button>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Secondbar;
