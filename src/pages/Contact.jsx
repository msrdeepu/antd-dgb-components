import { Form, Input, Button, Col, Row, Card, Typography } from "antd";
const { Title } = Typography;
const { TextArea } = Input;

const contactImg = "../../public/assets/contact-img.png";

const Contact = () => {
  return (
    <>
      {/* Contact Form */}
      <div className="container m-auto">
        <Row gutter={[8, 4]}>
          <Col xs={24}>
            <Card className="m-3 p-2 shadow-md bg-purple-50">
              <Title className="text-center" level={2}>
                Contact Form
              </Title>
              <Row gutter={[8, 4]} className="p-2">
                <Col xs={24} md={12}>
                  <div className="flex flex-row justify-center align-middle bg-blue-400 h-[100%] rounded-lg md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none md:rounded-br-none">
                    <img
                      src={contactImg}
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
      {/* Contact form completed */}
    </>
  );
};

export default Contact;
