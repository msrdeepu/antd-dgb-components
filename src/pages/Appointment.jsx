import {
  Form,
  Input,
  Button,
  Col,
  Row,
  Card,
  Typography,
  DatePicker,
} from "antd";
const { Title } = Typography;
const { TextArea } = Input;

const appointmentImg = "../../public/assets/appointment.png";

const Appointment = () => {
  return (
    <div className="container m-auto">
      <Row gutter={[8, 4]}>
        <Col xs={24}>
          <Card className="m-3 p-2 shadow-md bg-blue-50">
            <Title className="text-center" level={2}>
              Appointment Booking Form
            </Title>
            <Row gutter={[8, 4]} className="p-2">
              <Col xs={24} md={12}>
                <div className="flex flex-row justify-center align-middle bg-red-400 h-[100%] rounded-lg md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none md:rounded-br-none">
                  <img
                    src={appointmentImg}
                    alt="contact-img"
                    className="h-[65vh]"
                  />
                </div>
              </Col>
              <Col xs={24} md={12} className="mt-5 md:mt-0">
                <Form layout="vertical" className="sm:ml-0  md:ml-11 ">
                  <Form.Item label="Your Name">
                    <Input placeholder="Enter Your Name..." />
                  </Form.Item>
                  <Form.Item label="Your Email">
                    <Input placeholder="Enter Your Email..." type="email" />
                  </Form.Item>
                  <Form.Item label="Contact Number">
                    <Input placeholder="Enter Your Phone..." type="number" />
                  </Form.Item>
                  <Form.Item label="Select Date">
                    <DatePicker className="w-[100%]" />
                  </Form.Item>
                  <Form.Item label="Your Message">
                    <TextArea placeholder="Enter Your Message..." />
                  </Form.Item>
                  <Row gutter={[8, 4]}>
                    <Button htmlType="" type="primary" className="m-3">
                      Submit
                    </Button>
                    <Button
                      htmlType="reset"
                      type="primary"
                      danger
                      className="m-3"
                    >
                      Cancel
                    </Button>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Appointment;
