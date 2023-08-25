import "./card.css";
import { Button } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;

const CardDesign = () => {
  return (
    <div className="card-container h-[auto] bg-orange-500 p-8 flex flex-row justify-around">
      <Card
        style={{
          width: 300,
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <Meta
          title="Card title"
          description="This is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the description"
        />
        <div className="text-left">
          {" "}
          <Button className="m-2" type="link" danger>
            Read More
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CardDesign;
