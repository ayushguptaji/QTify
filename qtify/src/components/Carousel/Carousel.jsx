import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";
import CustomCard from "../Custom Components/CustomCard";
import swiperLeft from "../../assets/swiperLeft.png";
import swiperRight from "../../assets/swiperRight.png";
import { Navigation } from "swiper/modules";
import NavigationButton from "./NavigationButton";

const Carousel = ({ data, isSongsSection }) => {
  // const [atBeginningSlide, setAtBeginningSlide] = useState({isTrue: true, class: "left-swiper swiper-button-hidden"})
  // const [atEndSlide, setAtEndSlide] = useState({isTrue: false, class: "right-swiper"})
  return (
    <Swiper
      className="swiper-container"
      spaceBetween={16}
      modules={[Navigation]}
      navigation={{
        nextEl: ".right-swiper",
        prevEl: ".left-swiper",
      }}
      //   on={
      //         reachBeginning: () => {
      //             atBeginningSlide.isTrue?setAtBeginningSlide({isTrue: true, class: "left-swiper swiper-button-hidden"}):setAtBeginningSlide({isTrue: false, class: "left-swiper"})},
      //         reachEnd: () => {
      //             atEndSlide.isTrue?setAtEndSlide({isTrue: true, class: "right-swiper swiper-button-hidden"}):setAtEndSlide({isTrue: false, class: "right-swiper"})}
      //   }
      breakpoints={{
        600: {
          slidesPerView: 2,
        },
        960: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 7,
        },
      }}
    >
      {data.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            {isSongsSection ? (
              <CustomCard
                name={item.title}
                url={item.image}
                likes={item.likes}
              />
            ) : (
              <CustomCard
                name={item.title}
                url={item.image}
                follows={item.follows}
              />
            )}
          </SwiperSlide>
        );
      })}
      <NavigationButton link={swiperRight} name="right-swiper" />
      <NavigationButton link={swiperLeft} name="left-swiper" />
    </Swiper>
  );
};

export default Carousel;
