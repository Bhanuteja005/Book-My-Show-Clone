import DefaultHOC from './HOC/Default.HOC';
import MovieHOC from './HOC/Movie.HOC';

// Import css files 
import { Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Home from './pages/Home.page';
import Movie from './pages/Movie.page';
import Plays from './pages/Plays.page';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultHOC component={Home} />} />
        <Route path="/movie/:id" element={<MovieHOC component={Movie} />} />
        <Route path="/plays" element={<DefaultHOC component={Plays} />} />
      </Routes>
    </>
  );
}

export default App;