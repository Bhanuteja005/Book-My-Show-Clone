import axios from "axios";
import React, { useEffect, useState } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.component";
// Import css files
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const HeroCarousal = () => {
  
const [images, setImages] = useState([]);

useEffect(() => {
  const requestNowPlayingMovies = async() => {
    const getImages = await axios.get("/movie/now_playing");
    setImages(getImages.data.results);
  };
  requestNowPlayingMovies();
}, []);
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

    

    return(
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                {
  images.map((image, index) => (
    <div className="w-full h-64 md:h-80 py-3" key={index}>
      <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-md"/>
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
      <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-md"/>
    </div>
  ))
}
                </HeroSlider>
            </div>
        </>
    );
}

export default HeroCarousal;