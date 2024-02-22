import { usePlans } from "@/hooks/usePlans";
import { useUserStore } from "@/stores/user.store";
import { CardDescription } from "./CardDescription";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import { RightIcon } from "@/assets/icons/RightIcon";
import { BackIcon } from "@/assets/icons/BackIcon";
import { LeftIconDisabled } from "@/assets/icons/LeftIcon";

export const PlansDescriptions = () => {
  const user = useUserStore((state) => state.user);
  const [actualSlide, setActualSlide] = useState(0);
  let sliderRef = useRef(null);

  const nextSlider = () => {
    sliderRef.slickNext();
  };

  const prevSlider = () => {
    sliderRef.slickPrev();
  };

  const { data } = usePlans();
  const settings = {
    speed: 500,
    infinite: false,
    arrows: true,
    slidesToShow: 3,
    lazyLoad: true,
    slidesToScroll: 3,
    initialSlide: 0,
    afterChange: (current) => setActualSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          draggable: true,
        },
      },
    ],
  };

  return (
    <article className="overflow-hidden w-full">
      {user.plan && (
        <>
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {data &&
              data.length > 0 &&
              data.map((plan, index) => (
                <CardDescription
                  key={index}
                  icon={index % 2 === 0 ? "home" : "hospital"}
                  isRecomended={index % 2 !== 0}
                  data={plan}
                />
              ))}
          </Slider>
          <div className="w-full flex md:hidden justify-center">
            <div className="flex  items-center gap-3">
              <button className="button" onClick={prevSlider}>
                <LeftIconDisabled />
              </button>
              <h4 className="font-normal">
                {actualSlide + 1} / {data.length}
              </h4>
              <button className="button" onClick={nextSlider}>
                <RightIcon />
              </button>
            </div>
          </div>
        </>
      )}
    </article>
  );
};
