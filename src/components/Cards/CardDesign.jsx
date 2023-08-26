import "./card.css";
import { Button, Typography } from "antd";
import { Card } from "antd";
const { Title } = Typography;
const { Meta } = Card;

const CardData = [
  {
    id: "1",
    title: "MEAN / MERN",
    description:
      "As a react native developer intern, you will be building mobile apps on both the iOS and Android platforms. You will be responsible for architecting and building these applications, as well as coordinating with the team members.",
    src: "https://deorwine1.b-cdn.net/images/technology/mern-stack-banner.png",
    alt: "MEAN/MERN",
    btnText: "Know More",
    designation: "FULLSTACK DEVELOPER",
    internship: "Paid Internship",
  },
  {
    id: "2",
    title: "LARAVEL & PHP",
    description:
      "Candidates must have good experience in PHP, Laravel, Javascript(ES6), Jquery, Bootstrap4, HTML5 and CSS3. Candidates should have the ability to pick up new technologies quickly. Huge learning oppertunity to the candidates who are passionated to become a fullstack developer",
    src: "https://www.upwork.com/catalog-images/c0301ed1023573755c4ae9bcb99b3057",
    alt: "LARAVEL & PHP",
    btnText: "Know More",
    designation: "FULLSTACK DEVELOPER",
    internship: "Paid Internship",
  },
  {
    id: "3",
    title: "ASSOCIATE INTERN",
    description:
      "A Digital Marketing Manger is a professional who is responsible for maintaining a brand’s online presence and sales by working on various marketing campaigns. Their duties include researching, strategizing with other professionals and creating content campaigns.",
    src: "https://img.freepik.com/free-vector/man-front-camera-recording-video-share-it-internet-illustration_335657-276.jpg",
    alt: "DIGITAL MARKETING",
    btnText: "Know More",
    designation: "DIGITAL MARKETING",
    internship: "Paid Internship",
  },
];

const CardLayout = (item) => {
  return (
    <Card
      hoverable={true}
      style={{
        width: 300,
        margin: "5px",
      }}
      cover={<img alt={item.alt} src={item.src} />}
      key={item.id}
    >
      <Meta title={item.title} description={item.description} />
      <div className="flex flex-row justify-around mt-4">
        <Title level={5} type="success">
          {item.internship}
        </Title>
        <Button type="primary" danger>
          {item.btnText}
        </Button>
      </div>
    </Card>
  );
};

const CardDesign = () => {
  return (
    <div className="card-container p-5 h-[auto] flex flex-row justify-around flex-wrap">
      {CardData.map(CardLayout)}
    </div>
  );
};

export default CardDesign;
