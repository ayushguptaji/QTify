import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";

const NavigationButton = ({ link, name, right }) => {
  const swiper = useSwiper();
  const [showLeft, setShowLeft] = useState(swiper.isBeginning);
  const [showRight, setShowRight] = useState(swiper.isEnd);

  useEffect(() => {
    setShowLeft(swiper.isBeginning);
    setShowRight(swiper.isEnd);
    swiper.on("slideChange", function () {
      setShowLeft(swiper.isBeginning);
      setShowRight(swiper.isEnd);
    });
    return () => {
      swiper.off("slideChange");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showLeft, showRight]);
  return (
    <div className={name}>
      {!right
        ? !showLeft && <img src={link} alt={name} />
        : !showRight && <img src={link} alt={name} />}
    </div>
  );
};

export default NavigationButton;
