"use client";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import Slider from "react-slick";

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,

    beforeChange: (prev: any, next: SetStateAction<number>) => {
      setDotActive(next);
    },
    appendDots: (dots: string) => (
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "0",
          right: "0",
          margin: "0 auto",
          transform: "translate(-50% -50%)",
          width: "210px",
        }}
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "#131921",
                padding: "8px 0",
                cursor: "pointer",
                border: "1px solid #f3a847",
              }
            : {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#232F3E",
                color: "white",
                padding: "8px 0",
                cursor: "pointer",
                border: "1px solid white",
              }
        }
      >
        {i + 1}
      </div>
    ),
  };
  return (
    <div className="w-full h-full">
      <Slider {...settings}>
        <div>
          <Image
            alt=""
            src="/banner/bannerImgOne.jpg"
            height={800}
            width={1400}
          />
        </div>
        <div>
          <Image
            alt=""
            src="/banner/bannerImgTwo.jpg"
            height={800}
            width={1400}
          />
        </div>
        <div>
          <Image
            alt=""
            src="/banner/bannerImgThree.jpg"
            height={800}
            width={1400}
          />
        </div>
        <div>
          <Image
            alt=""
            src="/banner/bannerImgFour.jpg"
            height={800}
            width={1400}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
