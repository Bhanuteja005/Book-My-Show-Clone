import axios from "axios";
import React, { useEffect, useState } from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
function Home () {
   const [popularMovies, setPopularMovies] = useState([]);

useEffect(() => {
  const requestPopularMovies = async () => {
    const getPopularMovies = await axios.get("/movie/popular");
    setPopularMovies(getPopularMovies.data.results);
  };
  requestPopularMovies();
},[]);

console.log({popularMovies});
    return (
        <>
        <div className="flex flex-col gap-10">
         <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-gray-800">
               The best of Entertainment
            </h1>
            <EntertainmentCardSlider />
         </div>
         <div className="bg-navcol-250 py-16">
            <div className="text-navcol-50 container mx-auto px-4">
               <div className="flex">
                  <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                     alt="Rupay"
                     className="w-full h-full"
                     />
               </div>
               <PosterSlider images={popularMovies} title="Premiers" subtitle="Brand New Releases Every Friday" isDark/>
            </div>
         </div>
      </div>
      
        <div className="container mx-auto px-4">
        <PosterSlider
        images={popularMovies}
        title="Online Streaming Events"
        isDark={false}
        />
        </div>
      
        <div className="container mx-auto px-4">
        <PosterSlider
        images={popularMovies}
        title="Outdoor Events"
        isDark={false}
        />
        </div>
        </>
      );
      };

export default Home;