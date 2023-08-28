import "./more.css";
import TypedEffect from "./TypedEffect";
import { Button } from "antd";
import { Typography } from "antd";
const { Title } = Typography;

const Moreabout = () => {
  return (
    <div className="main-section p-5 sm:h-[80vh] md:h-[50vh]">
      <TypedEffect />
      <Title
        className="sm:w-[80%] md:w-[50%] text-center more-about-sub-text"
        level={4}
        style={{ color: "white" }}
      >
        WEBSITES & MOBILE APPLICATIONS FOR YOUR BUSINESS, ORGANISATIONS AND
        INDIVIDUALS.
      </Title>
      <Button size="large" type="primary" danger className="more-about-sub-btn">
        MORE ABOUT DGBITS
      </Button>
    </div>
  );
};

export default Moreabout;
