import { Menu } from "antd";

import { AiOutlineHome, AiOutlineAntDesign } from "react-icons/ai";
import { LiaProductHunt } from "react-icons/lia";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { GrHostMaintenance } from "react-icons/gr";
const Megamenu = () => {
  return (
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
  );
};

export default Megamenu;
