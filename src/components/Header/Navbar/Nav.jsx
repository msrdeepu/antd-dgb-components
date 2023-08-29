import React, { useState } from "react";
import { Layout, Menu, Button, Drawer, Row, Col } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import { AiOutlineHome, AiOutlineAntDesign } from "react-icons/ai";
import { LiaProductHunt } from "react-icons/lia";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { GrHostMaintenance } from "react-icons/gr";

const { Header } = Layout;

const Nav = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout className="layout">
      <Header style={{ padding: 0 }}>
        <Row justify="space-between" align="middle">
          <Col xs={20} sm={20} md={4}>
            {/* <div
              className="logo"
              style={{ color: "white", paddingLeft: "20px" }}
            >
              My Logo
            </div> */}
          </Col>
          <Col xs={0} sm={0} md={20}>
            <Menu
              className="flex justify-center"
              mode="horizontal"
              items={[
                {
                  label: "DGBITS",
                  key: "DGBITS",
                  icon: <AiOutlineHome />,
                  children: [
                    {
                      label: "About Us",
                      key: "about",
                    },
                    {
                      label: "Why DGBITS",
                      key: "why",
                    },
                    {
                      label: "Our Methodology",
                      key: "methodology",
                    },
                    {
                      label: "Project Management",
                      key: "management",
                    },
                  ],
                },
                {
                  label: "PRODUCTS",
                  key: "PRODUCTS",
                  icon: <LiaProductHunt />,
                  children: [
                    {
                      label: "DGBITS Matrimonial App",
                      key: "matrimonial",
                    },
                    {
                      label: "DGBITS Realestate App",
                      key: "realestate",
                    },
                    {
                      label: "DGBITS Swift CRM",
                      key: "crm",
                    },
                    {
                      label: "DGBITS Modular CMS",
                      key: "cms",
                    },
                  ],
                },
                {
                  label: "DEVELOPMENT SERVICES",
                  key: "development",
                  icon: <MdOutlineDeveloperMode />,
                  children: [
                    {
                      label: "Website Design",
                      key: "websitedesign",
                    },
                    {
                      label: "Web Applications",
                      key: "webapps",
                    },
                    {
                      label: "Mobile Apps",
                      key: "mobileapps",
                    },
                    {
                      label: "UI/UX for Apps",
                      key: "uiux",
                    },
                  ],
                },
                {
                  label: "DESIGN SERVICES",
                  key: "design",
                  icon: <AiOutlineAntDesign />,
                  children: [
                    {
                      label: "Branding & Identity",
                      key: "branding",
                    },
                    {
                      label: "Email & Newsletter",
                      key: "emailnews",
                    },
                    {
                      label: "SMS & Whatsapp",
                      key: "smswhatsapp",
                    },
                    {
                      label: "SEO & SEM",
                      key: "seo",
                    },
                    {
                      label: "SOCIAL MEDIA",
                      key: "socialmedia",
                    },
                  ],
                },
                {
                  label: "HOSTING",
                  key: "hosting",
                  icon: <GrHostMaintenance />,
                  children: [
                    {
                      label: "Annual Maintinence",
                      key: "annualmaintinence",
                    },
                    {
                      label: "Web Hosting Service",
                      key: "webhosting",
                    },
                    {
                      label: "Domain Registration",
                      key: "domainregistration",
                    },
                  ],
                },
                {
                  label: "CAREERS",
                  key: "careers",
                },
                {
                  label: "OUR LATEST PROJECTS",
                  key: "latestprojects",
                },
              ]}
            ></Menu>
          </Col>
          <Col xs={2} sm={2} md={0}>
            <Button type="primary" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          </Col>
        </Row>
        <Drawer
          title="Menu"
          placement="right"
          onClick={onClose}
          onClose={onClose}
          visible={visible}
        >
          <Menu
            className="flex justify-center"
            mode="vertical"
            items={[
              {
                label: "DGBITS",
                key: "DGBITS",
                icon: <AiOutlineHome />,
                children: [
                  {
                    label: "About Us",
                    key: "about",
                  },
                  {
                    label: "Why DGBITS",
                    key: "why",
                  },
                  {
                    label: "Our Methodology",
                    key: "methodology",
                  },
                  {
                    label: "Project Management",
                    key: "management",
                  },
                ],
              },
              {
                label: "PRODUCTS",
                key: "PRODUCTS",
                icon: <LiaProductHunt />,
                children: [
                  {
                    label: "DGBITS Matrimonial App",
                    key: "matrimonial",
                  },
                  {
                    label: "DGBITS Realestate App",
                    key: "realestate",
                  },
                  {
                    label: "DGBITS Swift CRM",
                    key: "crm",
                  },
                  {
                    label: "DGBITS Modular CMS",
                    key: "cms",
                  },
                ],
              },
              {
                label: "DEVELOPMENT SERVICES",
                key: "development",
                icon: <MdOutlineDeveloperMode />,
                children: [
                  {
                    label: "Website Design",
                    key: "websitedesign",
                  },
                  {
                    label: "Web Applications",
                    key: "webapps",
                  },
                  {
                    label: "Mobile Apps",
                    key: "mobileapps",
                  },
                  {
                    label: "UI/UX for Apps",
                    key: "uiux",
                  },
                ],
              },
              {
                label: "DESIGN SERVICES",
                key: "design",
                icon: <AiOutlineAntDesign />,
                children: [
                  {
                    label: "Branding & Identity",
                    key: "branding",
                  },
                  {
                    label: "Email & Newsletter",
                    key: "emailnews",
                  },
                  {
                    label: "SMS & Whatsapp",
                    key: "smswhatsapp",
                  },
                  {
                    label: "SEO & SEM",
                    key: "seo",
                  },
                  {
                    label: "SOCIAL MEDIA",
                    key: "socialmedia",
                  },
                ],
              },
              {
                label: "HOSTING",
                key: "hosting",
                icon: <GrHostMaintenance />,
                children: [
                  {
                    label: "Annual Maintinence",
                    key: "annualmaintinence",
                  },
                  {
                    label: "Web Hosting Service",
                    key: "webhosting",
                  },
                  {
                    label: "Domain Registration",
                    key: "domainregistration",
                  },
                ],
              },
              {
                label: "CAREERS",
                key: "careers",
              },
              {
                label: "OUR LATEST PROJECTS",
                key: "latestprojects",
              },
            ]}
          ></Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Nav;
