import DefaultHOC from './HOC/Default.HOC';
import MovieHOC from './HOC/Movie.HOC';
// Import css files
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Home from './pages/Home.page';
import Movie from './pages/Movie.page';
function App() {
  return (
    <>
    
    <DefaultHOC path="/" exact component={Home}/>
    <MovieHOC path="/movie/:id" exact component={Movie}/>
    </>
  );
}

export default App;