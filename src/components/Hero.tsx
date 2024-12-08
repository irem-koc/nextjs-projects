"use client";
import { slideData } from "@/constants/constants";
import Slider from "react-slick";
import SlideData from "./SlideData";
type Props = {};

const Hero = (props: Props) => {
  var settings = {
    dots: true,
    infinite: true,
    autoPlay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData?.map((slide, index) => {
            return (
              <SlideData
                key={index}
                img={slide.img}
                title={slide.title}
                mainTitle={slide.mainTitle}
                price={slide.price}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
