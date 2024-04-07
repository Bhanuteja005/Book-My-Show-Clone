import React from "react";
import HeroSlider from "react-slick"; // Assuming HeroSlider is from react-slick
import { NextArrow, PrevArrow } from "./Arrows.component";
// Import css files
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const HeroCarousal = () => {
    var settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    const settingsLg = { 
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite:true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const images=[
        "https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg",
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/godzilla-x-kong-the-new-empire-et00358147-1707980025.jpg",
        "https://images.indianexpress.com/2024/04/Premalu-OTT-release-date-announce-Image_-Poster-of-Premalu-.jpg",
    ];

    return(
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                {
  images.map((image, index) => (
    <div className="w-full h-64 md:h-80 py-3" key={index}>
      <img src={image} alt="testing" className="w-full h-full rounded-md"/>
    </div>
  ))
}
                </HeroSlider>
            </div>

            <div className="hidden lg:block">
                <HeroSlider {...settingsLg}>
                {
  images.map((image, index) => (
    <div className="w-full h-96 px-2 py-3" key={index}>
      <img src={image} alt="testing" className="w-full h-full rounded-md"/>
    </div>
  ))
}
                </HeroSlider>
            </div>
        </>
    );
}

export default HeroCarousal;