import { Typography, Button } from "antd";
const { Title } = Typography;
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

//slider images
const imageOne = "../../../public/assets/img1.png";
const imageTwo = "../../../public/assets/img2.png";

export default function HeroCarosel() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="slide-container container-1 flex flex-row justify-around sm:p-10 md:p-5">
          <img
            src={imageOne}
            alt="slide-1"
            className="slide-1-img hidden md:block"
          />
          <div className="p-5">
            <Title
              className="md:w-[80%] sm:text-center md:text-right slide-1-title-text"
              level={1}
              style={{ color: "white" }}
            >
              Craft Engaging Digital Experiences
            </Title>
            <Title
              className="md:w-[80%] sm:text-center md:text-right "
              level={4}
            >
              Create Designs Without Boundries
            </Title>
            <div className="w-[100%] md:w-[80%] text-center md:text-right">
              <Button type="primary" danger>
                Know More
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-container container-2">
          <img
            src={imageTwo}
            alt="slide-1"
            className="slide-1-img hidden md:block order-2"
          />
          <div className="p-5">
            <Title
              className="md:w-[80%] sm:text-center md:text-left slide-1-title-text"
              level={1}
              style={{ color: "white" }}
            >
              Get Start Your Matrimonial Website Now
            </Title>
            <Title
              className="md:w-[80%] sm:text-center md:text-left "
              level={4}
            >
              Start Your Digital Journey Today
            </Title>
            <div className="w-[100%] md:w-[80%] text-center md:text-left">
              <Button
                type="link"
                style={{ backgroundColor: "orange", color: "white" }}
              >
                Know More
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-container container-3 text-center">
          <div className="p-4 text-center">
            <Title className=" w-[90%] md:w-[100%]" style={{ color: "white" }}>
              No More Running...Now Time To LEAP
            </Title>
            <Title className="" style={{ color: "crimson" }} level={4}>
              Edge Computing Solutions
            </Title>
            <Button
              type="primary"
              style={{ backgroundColor: "purple", color: "white" }}
            >
              Know More
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-container container-4 flex row justify-around">
          <div>
            <ul>
              <li>Matrimonial App</li>
              <li>SWIFT CRM</li>
              <li>Realestate App</li>
              <li>Modular CMS</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Website Design</li>
              <li>Web Apps</li>
              <li>Mobile Apps</li>
              <li>UI/UX for Apps</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Digital Marketing</li>
              <li>Annual Maintinence</li>
              <li>Web Hosting</li>
              <li>Domain Registration</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-container container-5">
          <Title style={{ color: "white" }}>Slide 5</Title>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
