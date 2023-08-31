import "./slidertwo.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative } from "swiper/modules";

const SliderTwo = () => {
  return (
    <>
      <Swiper
        loop={true}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            backgroundImage: `url("https://wallpaperaccess.com/full/2985473.jpg")`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url("https://wallpapershome.com/images/pages/pic_h/1143.jpg")`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url("https://e0.pxfuel.com/wallpapers/828/839/desktop-wallpaper-nature-for-sky-horizontal-background.jpg")`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url("https://images7.alphacoders.com/814/814984.jpg")`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url("https://wallpaperaccess.com/full/1090083.jpg")`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url("https://wallpaperaccess.com/full/1090083.jpg")`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url("https://wallpapers.com/images/hd/nature-landscape-hd-usqznq19dscdjkf8.jpg")`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url("https://w.forfun.com/fetch/aa/aa5f27a646d424bc937096242cda463b.jpeg")`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
      </Swiper>
      <Swiper
        grabCursor={true}
        loop={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper2"
      >
        <SwiperSlide
          style={{
            backgroundImage: `url("https://wallpaperaccess.com/full/2985473.jpg")`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url("https://wallpapershome.com/images/pages/pic_h/1143.jpg")`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url("https://e0.pxfuel.com/wallpapers/828/839/desktop-wallpaper-nature-for-sky-horizontal-background.jpg")`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url("https://images7.alphacoders.com/814/814984.jpg")`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url("https://wallpaperaccess.com/full/1090083.jpg")`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url("https://wallpaperaccess.com/full/1090083.jpg")`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url("https://wallpapers.com/images/hd/nature-landscape-hd-usqznq19dscdjkf8.jpg")`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url("https://w.forfun.com/fetch/aa/aa5f27a646d424bc937096242cda463b.jpeg")`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderTwo;
