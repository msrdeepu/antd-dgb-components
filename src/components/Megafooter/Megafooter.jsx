import { Col, Row, Typography, Menu } from "antd";
const { Title, Text } = Typography;
import "./megafooter.css";

//react-icons
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";

import { BiMailSend } from "react-icons/bi";

const linksOne = [
  {
    id: "1",
    title: "Responsive Website Design",
  },
  {
    id: "2",
    title: "Hybrid Mobile App Development",
  },
  {
    id: "3",
    title: "Branding & Identity Design",
  },
  {
    id: "4",
    title: "Newsletters & Email Marketing",
  },
  {
    id: "5",
    title: "Social Media Marketing",
  },
];

const linksTwo = [
  {
    id: "1",
    title: "Custom Webapp Development",
  },
  {
    id: "2",
    title: "UI/UX Design for Apps",
  },
  {
    id: "3",
    title: "Mobile Marketing",
  },
  {
    id: "4",
    title: "Search Engine Optimization",
  },
  {
    id: "5",
    title: "Website Annual Maintinence",
  },
];

const ServicesWeOffer = (props) => {
  return <li className="p-[6px] mt-3">{props.itemObj.title}</li>;
};

const Megafooter = () => {
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <Col offset={2}>
          <Menu
            mode="horizontal"
            className="flex justify-left"
            items={[
              {
                id: "1",
                label: "Home",
              },
              {
                id: "2",
                label: "About",
              },
              {
                id: "3",
                label: "Paid Internships",
              },
              {
                id: "4",
                label: "Projects",
              },
              {
                id: "5",
                label: "Contact",
              },
              {
                id: "6",
                label: "Request a Free Consultation",
                icon: <BiMailSend color="red" />,
              },
            ]}
          ></Menu>
        </Col>
        <Row gutter={[8, 4]}></Row>{" "}
        <Row gutter={[8, 4]}>
          <Col xs={20} md={7} offset={2}>
            <div className="text-left">
              <img
                src="https://dgbits.in/images/logo-dgbits.svg"
                alt="footer-logo"
              />
              <Text>
                At DGBITS Software Private Limited , WE LOVE WHAT WE DO. WE ARE
                VERY PASSIONATE. WE ARE VERY CREATIVE. Our team have a strong
                background as designers and engineers and our industry
                experience brings our work to a different level. We focus on
                developing solutions that leads digital transformation for
                Startups & MSMEs.
              </Text>
            </div>
          </Col>
          <Col xs={24} md={4} offset={3}>
            <div>
              <Title level={4}>Services We Offer</Title>
              <ul style={{ listStyle: "none" }}>
                {linksOne.map((item) => (
                  <ServicesWeOffer itemObj={item} key={item.id} />
                ))}
              </ul>
            </div>
          </Col>
          <Col xs={24} md={4} offset={3}>
            <div>
              <Title level={4} className="hidden md:block">
                Services We Offer
              </Title>
              <ul style={{ listStyle: "none" }}>
                {linksTwo.map((item) => (
                  <ServicesWeOffer itemObj={item} key={item.id} />
                ))}
              </ul>
            </div>
          </Col>
        </Row>
        <div>
          <center>
            <hr className="w-[80%] mt-4" />
          </center>
          <div className="copyright p-5">
            <Title level={5}>
              © All Rights Reserved by DGBITS Software Private Limited.
            </Title>
            <div className="flex justify-between align-middle">
              <BsFacebook style={{ margin: "5px" }} />
              <BsInstagram style={{ margin: "5px" }} />
              <BsTwitter style={{ margin: "5px" }} />
              <BsLinkedin style={{ margin: "5px" }} />
              <BsYoutube style={{ margin: "5px" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Megafooter;
