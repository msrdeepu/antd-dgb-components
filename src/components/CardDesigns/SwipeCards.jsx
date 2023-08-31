import { Swiper, SwiperSlide } from "swiper/react";

import SliderTwo from "./SliderTwo";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./swipecards.css";

// import required modules
import { EffectCards } from "swiper/modules";

function SwipeCardLayout(item) {
  return (
    <Swiper
      autoplay={true}
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
      loop={true}
    >
      <SwiperSlide
        key={item.id}
        style={{
          backgroundImage: `url("https://wallpaperaccess.com/full/2985473.jpg")`,
          height: "100%",
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        {item.title}
      </SwiperSlide>
      <SwiperSlide
        key={item.id}
        style={{
          backgroundImage: `url("https://wallpapershome.com/images/pages/pic_h/1143.jpg")`,
          height: "100%",
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        {item.title}
      </SwiperSlide>
      <SwiperSlide
        key={item.id}
        style={{
          backgroundImage: `url("https://e0.pxfuel.com/wallpapers/828/839/desktop-wallpaper-nature-for-sky-horizontal-background.jpg")`,
          height: "100%",
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        {item.title}
      </SwiperSlide>
      <SwiperSlide
        key={item.id}
        style={{
          backgroundImage: `url("https://images7.alphacoders.com/814/814984.jpg")`,
          height: "100%",
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        {item.title}
      </SwiperSlide>
      <SwiperSlide
        key={item.id}
        style={{
          backgroundImage: `url("https://wallpaperaccess.com/full/1090083.jpg")`,
          height: "100%",
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        {item.title}
      </SwiperSlide>
      <SwiperSlide
        key={item.id}
        style={{
          backgroundImage: `url("https://wallpaperaccess.com/full/1090083.jpg")`,
          height: "100%",
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        {item.title}
      </SwiperSlide>
      <SwiperSlide
        key={item.id}
        style={{
          backgroundImage: `url("https://wallpapers.com/images/hd/nature-landscape-hd-usqznq19dscdjkf8.jpg")`,
          height: "100%",
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        {item.title}
      </SwiperSlide>
      <SwiperSlide
        key={item.id}
        style={{
          backgroundImage: `url("https://w.forfun.com/fetch/aa/aa5f27a646d424bc937096242cda463b.jpeg")`,
          height: "100%",
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        {item.title}
      </SwiperSlide>
    </Swiper>
  );
}

const SwipeCards = () => {
  return (
    <div className="flex flex-row justify-center items-center w-[100%]">
      <SwipeCardLayout />
      <SliderTwo />
    </div>
  );
};

export default SwipeCards;
