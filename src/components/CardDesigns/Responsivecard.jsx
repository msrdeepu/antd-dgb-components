import "./responsive.css";
import { Button } from "antd";

const Responsivecard = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center justify-center">
      <div className="flex flex-col h-[auto] justify-center items-center md:flex-row m-3">
        <div className="h-[50vh] w-[80%] rounded-tl-lg rounded-tr-lg md:rounded-bl-lg md:rounded-tr-none img-one-container  md:h-[45vh] md:w-[20%]"></div>
        <div className="sm:h-[auto] w-[80%] rounded-bl-lg rounded-br-lg p-5 flex flex-col justify-between bg-white md:h-[45vh] md:w-[40%] md:rounded-bl-none md:rounded-tr-lg">
          <div>
            <h1 className="font-semibold font-mono text-2xl">Title</h1>
            <p className="text-gray-500 font-sans">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
              sequi, asperiores delectus culpa sapiente veritatis in facilis
              quaerat non possimus ipsum enim consequatur aliquam neque
              repellendus recusandae rerum officiis impedit!
            </p>
          </div>
          <div className="flex flex-row justify-start md:justify-end">
            <button className="btn mt-2 rounded-md bg-orange-400 p-2 text-white font-semibold font-sans md:mt-0">
              CLICK ME
            </button>
          </div>
        </div>
      </div>

      <div className="img-two-container  w-[80%]  md:w-[58%] rounded-lg flex flex-col justify-center items-center">
        <div className="bg-white m-4 w-[80%] h-[auto] rounded-md opacity-[0.8] flex flex-col justify-center items-center">
          <h1 className="text-center mt-3 font-sans font-semibold text-2xl">
            TITLE
          </h1>
          <p className="text-gray-800 font-sans p-3 font-semibold w-[85%] text-center md:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui illum
            soluta dolorem aspernatur magni inventore provident, laborum dicta
            optio, animi nemo perspiciatis nihil excepturi ex aliquid numquam.
            Iure, voluptas at. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Qui illum soluta dolorem aspernatur magni
            inventore provident, laborum dicta optio, animi nemo perspiciatis
            nihil excepturi ex aliquid numquam. Iure, voluptas at.
          </p>
          <Button type="primary" danger className="m-2">
            CLICK ME
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Responsivecard;
