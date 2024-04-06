import React from "react";
import Slider from "react-slick";

//component
import Poster from "../Poster/poster.component";


export const Premier = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
      };
    const PremierImages=[
        {
            poster_path: "https://www.shutterstock.com/shutterstock/photos/1009320268/display_1500/stock-vector-movie-time-vector-illustration-cinema-poster-concept-on-red-round-background-composition-with-1009320268.jpg",
            title: "The Last of Us Part II", 
            subtitle: "Action/Adventure",
        },
        {
            poster_path: "https://www.shutterstock.com/shutterstock/photos/1009320268/display_1500/stock-vector-movie-time-vector-illustration-cinema-poster-concept-on-red-round-background-composition-with-1009320268.jpg",
            title: "The Last of Us Part II", 
            subtitle: "Action/Adventure",
        },
        {
            poster_path: "https://www.shutterstock.com/shutterstock/photos/1009320268/display_1500/stock-vector-movie-time-vector-illustration-cinema-poster-concept-on-red-round-background-composition-with-1009320268.jpg",
            title: "The Last of Us Part II", 
            subtitle: "Action/Adventure",
        },
        {
            poster_path: "https://www.shutterstock.com/shutterstock/photos/1009320268/display_1500/stock-vector-movie-time-vector-illustration-cinema-poster-concept-on-red-round-background-composition-with-1009320268.jpg",
            title: "The Last of Us Part II", 
            subtitle: "Action/Adventure",
        },
        {
            poster_path: "https://www.shutterstock.com/shutterstock/photos/1009320268/display_1500/stock-vector-movie-time-vector-illustration-cinema-poster-concept-on-red-round-background-composition-with-1009320268.jpg",
            title: "The Last of Us Part II", 
            subtitle: "Action/Adventure",
        },

    ];


  return (<>
    <div className="text-navcol-50 flex flex-col items-start py-4">
    <h3 className="text-white text-xl font-bold">Premiers</h3>
    <p className="text-white text-sm">Brand new release every Friday</p>
    </div>
    <Slider {...settings}>
    {PremierImages.map((image, index) => (
  <Poster {...image} isDark key={index} />
))}
    </Slider>
    </>);
};

export default Premier;