import { Col, Row } from "antd";
import { Typography } from "antd";

const { Title, Link } = Typography;
import { AiOutlineArrowRight } from "react-icons/ai";

const Section = () => {
  return (
    <div className="p-8">
      <Row gutter={[8, 4]} className="p-4">
        <Col
          xs={24}
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="p-3 md:p-5"
        >
          <div>
            <Title level={2}>We Bring Life To Your Brand</Title>
            <Title level={4} type="success">
              Graphic Design - Branding - Logo Design
            </Title>
            <Title level={5}>
              Design is at the peak of everything we do at DGBITS. We're
              creative, thoughtful and strategic. As you begin to share your
              concept, we start to imagine the pieces come together as a
              picture. It's how we think. We bring your concept to real life.
              Whether it's a ADcampaign or a logo for a start-up website, DGBITS
              knows how to tell your story with compelling and engaging digital
              experinces with the matching creative content.
            </Title>
            <Title level={5}>
              DGBITS Services are more than simple graphic designers. We are
              visual communicators for your brand.
            </Title>
            <Link href="#" target="_blank">
              Learn More About Branding & Identity Services{" "}
              {<AiOutlineArrowRight />}
            </Link>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <img
            style={{ height: "55vh" }}
            className="order-1"
            src="https://dgbits.in/images/branding.png"
            alt="branding"
          />
        </Col>
      </Row>
      <Row gutter={[8, 4]} className="p-4">
        <Col xs={24} md={12}>
          <img
            style={{ height: "55vh" }}
            className="order-1"
            src="https://dgbits.in/images/websites.png"
            alt="branding"
          />
        </Col>
        <Col
          xs={24}
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="p-3 md:p-5"
        >
          <div className="text-left md:ml-8">
            <Title level={2}>WEB DESIGN & APP DEVELOPMENT</Title>
            <Title level={4} type="success">
              Dynamic Websites - Business Apps - Hybrid Mobile Apps
            </Title>
            <Title level={5} className="w-100">
              Your website is a great platform to expand the reach of your
              business, establish credibility, engage your customer base, sell
              services, solutions, products and ideas or concepts, and create
              influence for a cause or event. This is a necessary part of your
              brand promotion. But you already know that's why you're here. Be
              it a small product / service portfolio website or dynamic CMS
              based website to a multi-tiered high-end business application, we
              creaft each with the same heart and focus. We listen to your
              desired outcome. we also monitor campaigns with the right mix of
              print, video and digital content-driven engagement.
            </Title>

            <Link href="#" target="_blank">
              Learn More About Branding & Identity Services{" "}
              {<AiOutlineArrowRight />}
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Section;
