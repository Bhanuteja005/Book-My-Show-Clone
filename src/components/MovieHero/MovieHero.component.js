import React from "react";

const MovieHero = () => {
    return (
      <>
     <div className="md:hidden">
      <img
        src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
        alt="poster"
       />
     </div>
  
     <div className="hidden md:block lg:hidden">
     <img
       src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
       alt="poster"
      />
     </div>
  
     <div className="relative hidden lg:block" style={{height: "40rem"}}>
  
  <div className="absolute h-full w-full z-10"
  style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}} 
  />
  
  <div className="absolute z-30 w-64 h-96 left-16 top-32">
  <img
  src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
  alt="poster"
  className="h-full w-full rounded-xl"
  />
  </div>

  <div className="text-navcol-50 absolute z-30 left-96 top-32">
  <h1 className="text-4xl font-bold">Shang-Chi and the Legend<br></br> of the Ten Rings</h1>
  <br></br>
  <div className="flex items-center text-gray-400 text-xs space-x-1 py-1">
    <p>4K•</p>
    <p>English,</p>
    <p>Hindi,</p>
    <p>Telugu,</p>
    <p>Tamil</p>
  </div>
  <br></br>
  <div className="flex items-center text-gray-400 text-xs space-x-2">
    <p>1h 58m •</p>
    <p>Action,</p>
    <p>Adventure,</p>
    <p>Fantasy,</p>
    <p>Sci-Fi •</p>
    <p>UA •</p>
    <p>3 Sep, 2021</p>
  </div>
  <br></br>
  <button className="bg-navcol-600 text-white text-sm rounded px-2 py-1 h-12 w-32">Book tickets</button>
</div>
  
     <img
       src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
       alt="poster"
       className="w-full h-full "
      />
     </div>
      </>
    )
  };
  
  export default MovieHero;