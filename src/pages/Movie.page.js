import React from 'react';
import { BiCameraMovie } from "react-icons/bi";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieHero from "../components/MovieHero/MovieHero.component";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
export const launchRazorPay = () => {
  let options = {
    key: "rzp_test_12tMkhfzsOm0XS",
    amount: 500*100,
    currency: "INR",
    name: "Book My Show Clone",
    description: "Movie Purchase on Rental",
    image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
    handler: () => {
      alert("Payment Done")
    },
    theme: {color: "#c4242d"}
  };
  let rzp = new window.Razorpay(options);
  rzp.open();
};
const Movie = () => {
  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg:w-1/2 lg:ml-64">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
          <p>Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.</p>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="flex flex-col items-start gap-3">
  <h1 className=" text-gray-800 font-bold text-2xl">Applicable Offers</h1>
  <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 sm:w-96 w-80">
    <div className="w-8 h-8">
      <BiCameraMovie className="w-full h-full"/>
    </div>
    <div className="flex flex-col items-start">
      <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
      <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
    </div>
  </div>
</div>
        <div className="my-8 ">
  <h1 className="text-gray-800 font-bold text-2xl">Crew and Cast</h1>
  <Carousel responsive={responsive}>
    <div className="flex flex-col items-center">
        <img className="rounded-full h-32 w-32" src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/simu-liu-2006167-13-05-2021-04-13-21.jpg" alt="Crew/Cast Member"/>
        <h3 className="mt-2">Simu Liu</h3>
        <p>as Shang-chi</p>
    </div>
    <div className="flex flex-col items-center">
        <img className="rounded-full h-32 w-32" src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/awkwafina-1093500-20-06-2018-12-05-44.jpg" alt="Crew/Cast Member"/>
        <h3 className="mt-2">awkwafina</h3>
        <p>as Katy</p>
    </div>
    <div className="flex flex-col items-center">
        <img className="rounded-full h-32 w-32" src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tony-leung-iein105711-02-04-2018-13-07-58.jpg" alt="Crew/Cast Member"/>
        <h3 className="mt-2">Tony </h3>
        <p>as wenwu</p>
    </div>
    <div className="flex flex-col items-center">
        <img className="rounded-full h-32 w-32" src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/michelle-yeoh-1473-24-03-2017-17-32-23.jpg" alt="Crew/Cast Member"/>
        <h3 className="mt-2">michelle-yeoh</h3>
        <p>as Jiang nan</p>
    </div>
    <div className="flex flex-col items-center">
        <img className="rounded-full h-32 w-32" src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/destin-cretton-1076480-15-01-2020-01-11-15.jpg" alt="Crew/Cast Member"/>
        <h3 className="mt-2">Destin</h3>
        <p>Director</p>
    </div>
</Carousel>
</div>
      </div>
    </>
  );
};
export default Movie;