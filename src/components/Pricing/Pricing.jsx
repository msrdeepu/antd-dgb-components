import "./price.css";
import { Badge } from "antd";

const PriceData = [
  {
    id: "1",
    plan: "STARTUP",
    planTech: "Small Website",
    price: "5,000",
    spanTime: "Monthly",
    featureOne: "Month-wise Annual Traffic Report",
    featureTwo: "Emergency Updates",
    featureThree: "10 Full Page Content Refreshes",
    featureFour: "20 Minor Text Modifications",
    featureFive: "Free Website Backup",
    bgColor: "#0093E9",
    bgImg:
      "linear-gradient( 111.4deg,  rgba(238,113,113,1) 1%, rgba(246,215,148,1) 58% )",
  },
  {
    id: "2",
    plan: "CORPORATE",
    planTech: "Large Website",
    price: "7,500",
    spanTime: "Monthly",
    featureOne: "Month-wise Annual Traffic Report",
    featureTwo: "50 Photo / Video Updates",
    featureThree: "20 Full Page Content Refreshes",
    featureFour: "50 Minor Text Modifications",
    featureFive: "Free Website Backup",
    bgColor: "#FBAB7E",
    bgImg:
      "radial-gradient( circle 897px at 9% 80.3%,  rgba(55,60,245,1) 0%, rgba(234,161,15,0.90) 100.2% )",
  },

  {
    id: "3",
    plan: "Web App / Mobile Apps",
    planTech: "CRM / ERP / CMS",
    price: " 10,000",
    spanTime: "Monthly",
    featureOne: "On Request Traffic Report",
    featureTwo: "Unlimited Photo,Video, Event Updates",
    featureThree: "SSL, Site Lock, Github Monitoring",
    featureFour: "Unlimited Modifications",
    featureFive: "App Tuning & Monitoring",
    bgColor: "#8BC6EC",
    bgImg:
      "linear-gradient( 91deg,  rgba(72,154,78,1) 5.2%, rgba(251,206,70,1) 95.9% )",
  },
];

const PriceCard = (itemObj) => {
  return (
    <>
      <section className="h-[auto] w-[auto] container m-auto p-5">
        <div className="h-[auto] w-[70vw] md:w-[25vw] flex justify-center mt-2">
          <div className="flex flex-col justify-center items-center shadow-lg m-4 h-[auto] w-[60vw] p-3 rounded-md ">
            {/* access the itemObj id and add the Badge-ribbon from antd with ternary operator  */}
            <Badge.Ribbon
              className={itemObj.id === "2" ? "block" : "hidden"}
              text={itemObj.id === "2" ? "Popular" : ""}
              color="purple"
            >
              <div className="text-center m-2">
                <h1 className="text-2xl ">{itemObj.plan}</h1>
                <h3 className="text-gray-400  font-semibold">
                  {itemObj.planTech}
                </h3>
              </div>
              <div className="flex flex-col justify-center items-center text-center m-2">
                <h4 className="text-gray-400 text-2xl">
                  ₹{" "}
                  <span className="text-black text-5xl font-semibold ">
                    {itemObj.price}
                  </span>
                </h4>
                <h4 className="text-gray-400 font-semibold">
                  {itemObj.spanTime}
                </h4>
              </div>
              <div className="text-center  font-semibold p-2 ">
                <ul>
                  <li className="text-base m-2  text-gray-500">
                    {itemObj.featureOne}
                  </li>
                  <li className="text-base m-2  text-gray-500">
                    {itemObj.featureTwo}
                  </li>
                  <li className="text-base m-2  text-gray-500">
                    {itemObj.featureThree}
                  </li>
                  <li className="text-base m-2  text-gray-500">
                    {itemObj.featureFour}
                  </li>
                  <li className="text-base m-2  text-gray-500">
                    {itemObj.featureFive}
                  </li>
                </ul>
              </div>
              <div className="flex flex-row justify-center items-center">
                <button
                  style={{
                    backgroundColor: `${itemObj.bgColor}`,
                    backgroundImage: `${itemObj.bgImg}`,
                  }}
                  className="price-button py-2 px-4 rounded border-collapse w-[250px] text-white font-base font-semibold"
                >
                  BUY NOW
                </button>
              </div>
            </Badge.Ribbon>
          </div>
        </div>
      </section>
    </>
  );
};

const Pricing = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className=" font-bold text-[#3e4555] text-2xl md:text-3xl p-2 m-2">
          We Have Affordable Plans For You!
        </h1>
        <h3 className="w-[90%] md:w-[60%] price-description text-base text-[#8d97ad]">
          These plans help to maintain fresh content in your website. our goal
          is to continually communicate information to your target audience.
          Website content needs to include well-written text and lots of
          interactive elements. We will train your staff to monitor critical and
          minor changes in website.
        </h3>
      </div>
      <div className="flex p-3 flex-wrap">{PriceData.map(PriceCard)}</div>
    </div>
  );
};

export default Pricing;
