import React from "react";
import Slider from "react-slick";
//component
import Poster from "../Poster/poster.component";

//config
import settings from "../../config/PosterCarousal.config";

//images
import PremierImages from "../../config/TempPosters.config";



  export const Premier = () => {
    return (
      <div className="bg-navcol-250"> {/* Add your background color here */}
        <div className="flex flex-col items-start py-4">
          <h3 className="text-white text-xl font-bold">Premiers</h3>
          <p className="text-white text-sm">Brand new release every Friday</p>
        </div>
        <Slider {...settings}>
          {PremierImages.map((image, index) => (
            <Poster {...image} isDark key={index} />
          ))}
        </Slider>
      </div>
    );
  };

export default Premier;