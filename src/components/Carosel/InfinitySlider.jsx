import "./infyslider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Typography } from "antd";
const { Title, Text } = Typography;
import { Card } from "antd";
const { Meta } = Card;

const CaroselData = [
  {
    id: "1",
    src: "https://dgbits.in/images/sln-thumb.png",
    title: "SLN Developers",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: "2",
    src: "https://dgbits.in/images/satyabhama-thumb.png",
    title: "Satyabhama Decors & Interiors",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: "3",
    src: "https://dgbits.in/images/nbt-thumb.png",
    title: "Nextbell Technologies",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: "4",
    src: "https://dgbits.in/images/hsortho-thumb.png",
    title: "HSDentals",
    tech: "HTML5, CSS3, Bootstrap 4, Laravel8",
  },
  {
    id: "5",
    src: "https://dgbits.in/images/ioto-thumb.png",
    title: "IOTO Matics",
    tech: "HTML5, CSS3, Bootstrap 4, Laravel8",
  },
  {
    id: "6",
    src: "https://dgbits.in/images/suraksha-thumb.png",
    title: "Suraksha Developers",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: "7",
    src: "https://dgbits.in/images/devglobal-thumb.png",
    title: "Dev Global Services",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: "8",
    src: "https://dgbits.in/images/devglobal-thumb.png",
    title: "MahaRaju Health Care",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: "9",
    src: "https://dgbits.in/images/mhct-thumb.png",
    title: "Global Star Edu",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: "10",
    src: "https://dgbits.in/images/globalstaredu-thumb.png",
    title: "OM Guest House",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: "11",
    src: "https://dgbits.in/images/devglobal-thumb.png",
    title: "Ruby Infra AP",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: "12",
    src: "https://dgbits.in/images/mhct-thumb.png",
    title: "SAI Sakthi Video Presentation",
    tech: "Premier, After Effects, Photoshop",
  },
  {
    id: "13",
    src: "https://dgbits.in/images/globalstaredu-thumb.png",
    title: "Sunrise Matrimony",
    tech: "Laravel, Mysql, Material-UI, PHP",
  },
  {
    id: "14",
    src: "https://dgbits.in/images/globalstaredu-thumb.png",
    title: "Loyal Links Matrimony",
    tech: "Laravel, Mysql, Material-UI, PHP",
  },
  {
    id: "15",
    src: "https://dgbits.in/images/ruby-thumb.png",
    title: "Ruby Infra AP",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
];

function CardItem(card) {
  return (
    <div>
      <Card
        className="text-center card-item-container"
        style={{
          width: 280,
        }}
        cover={<img alt={card.title} src={card.src} />}
      >
        <Meta title={card.title} description={card.tech} />
      </Card>
    </div>
  );
}
const InfinitySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div style={{ overflow: "hidden", padding: "5px" }}>
        <Title className="text-center" level={2}>
          Our Latest Projects
        </Title>
        <Slider className="p-2" {...settings}>
          {CaroselData.map(CardItem)}
        </Slider>
      </div>
    </>
  );
};
export default InfinitySlider;
