import { Col, Row, Typography } from "antd";
const { Title } = Typography;

import { FaMapMarkerAlt } from "react-icons/fa";

import {
  BsFacebook,
  // BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";

let styleItem = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

let styleSocialIcon = {
  margin: "3px",
  padding: "1px",
};

const Topbar = () => {
  return (
    <Row gutter={[8, 4]} className="p-2" height={2}>
      <Col xs={12} md={16} offset={2}>
        <Title level={4}>Leading Digital Transformation - DGBITS</Title>
      </Col>
      <Col xs={12} md={3}>
        <div style={styleItem}>
          <FaMapMarkerAlt />
          <h2> Tirupati, AP, INDIA</h2>
        </div>
      </Col>
      <Col xs={12} md={3}>
        <div style={styleItem}>
          <BsFacebook color="dodgerblue" style={styleSocialIcon} />
          {/* <BsInstagram color="pink" style={styleSocialIcon} /> */}
          <BsTwitter color="skyblue" style={styleSocialIcon} />
          <BsLinkedin color="gray" style={styleSocialIcon} />
          <BsYoutube color="red" style={styleSocialIcon} />
        </div>
      </Col>
    </Row>
  );
};

export default Topbar;
