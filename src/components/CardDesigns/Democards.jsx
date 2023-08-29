import "./democards.css";
import Responsivecard from "./Responsivecard";
const Democards = () => {
  return (
    <>
      <div
        style={{ fontFamily: "sans-serif" }}
        className="h-[auto] bg-[#8B88EB] flex flex-col justify-center items-center shadow-lg rounded-lg m-3 p-6"
      >
        {/* <div className="flex flex-row h-[40vh] w-[60vw] m-2">
          <div className="bg-[#2A265F] h-[100%] w-[20vw] flex flex-col  justify-center items-baseline rounded-tl-lg rounded-bl-lg">
            <div className="p-[20px] ml-5">
              <h6 className="text-white font-bold mb-3">COURSE</h6>
              <h2 className="w-[50%] text-white font-bold font-sans text-2xl">
                JAVASCRIPT FUNDAMENTALS
              </h2>
            </div>
            <div className="p-[20px] ml-5">
              <h2 className="text-white font-semibold">
                VIEW ALL LESSONS &rarr;
              </h2>
            </div>
          </div>
          <div className="bg-white flex flex-col flex-grow justify-around items-left rounded-tr-lg rounded-br-lg">
            <div className="flex flex-col  text-left ml-12 mt-9">
              <h6 className="text-sm text-gray-600">CHAPTER 6</h6>
              <h1 className="text-2xl font-semibold">FUNCTIONS</h1>
              <p className="mt-3 w-[90%] text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                corporis ut quaerat soluta, cupiditate qui temporibus
                exercitationem sed dolorum illo similique eum, officiis,
                nesciunt est animi repellendus molestiae libero laborum.
              </p>
            </div>
            <div className="ml-12 flex flex-row justify-end p-4 mr-12">
              <button className="bg-[#2A265F] p-3 text-white rounded-full w-[30%] font-sans shadow-md">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row h-[40vh] w-[60vw] m-2">
          <div className="bg-container h-[100%] w-[78%] flex flex-col  justify-center items-baseline rounded-tl-lg rounded-bl-lg "></div>
          <div className="bg-white flex flex-col flex-grow justify-around items-left rounded-tr-lg rounded-br-lg">
            <div className="flex flex-col  text-left ml-12 mt-9">
              <h6 className="text-sm text-gray-600">CHAPTER 6</h6>
              <h1 className="text-2xl font-semibold">FUNCTIONS</h1>
              <p className="mt-3 w-[90%] text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                corporis ut quaerat soluta, cupiditate qui temporibus
                exercitationem sed dolorum illo similique eum, officiis,
                nesciunt est animi repellendus molestiae libero laborum.
              </p>
            </div>
            <div className="ml-12 flex flex-row justify-end p-4 mr-12">
              <button className="bg-[#FF9034] p-3 text-white rounded-full w-[30%] font-sans shadow-md">
                READ MORE
              </button>
            </div>
          </div>
        </div> */}

        <Responsivecard />
      </div>
    </>
  );
};

export default Democards;
