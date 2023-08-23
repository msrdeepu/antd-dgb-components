import { Col, Row, Typography, Button } from "antd";
const { Title } = Typography;

import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

let styleItem = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Secondbar = () => {
  return (
    <Row height={2}>
      <Col xs={12} md={10} offset={2}>
        <img
          style={{ height: "80px" }}
          src="https://dgbits.in/images/logo-dgbits.svg"
          alt=""
        />
      </Col>
      <Col xs={6} md={6} style={styleItem}>
        <Button type="text" icon={<BsFillTelephoneOutboundFill />}>
          +91 8919818886
        </Button>
      </Col>
      <Col xs={6} md={6} style={styleItem}>
        <Button type="text" icon={<BiLogoGmail />}>
          support@dgbits.in
        </Button>
      </Col>
    </Row>
  );
};

export default Secondbar;
