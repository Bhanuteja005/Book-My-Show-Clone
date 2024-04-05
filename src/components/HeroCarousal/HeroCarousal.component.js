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
        "https://plus.unsplash.com/premium_photo-1710409625244-e9ed7e98f67b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1509564324749-471bd272e1ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1600660792241-240f01455c6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    return(
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                {
                    images.map((image) => (
                        <div className="w-full h-64 md:h-80 py-3">
                            <img src={image} alt="testing" className="w-full h-full rounded-md"/>
                        </div>
                    ))
                }
                </HeroSlider>
            </div>

            <div className="hidden lg:block">
                <HeroSlider {...settingsLg}>
                {
                    images.map((image) => (
                        <div className="w-full h-96 px-2 py-3">
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