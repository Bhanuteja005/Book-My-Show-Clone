import { Route, Routes } from 'react-router-dom';

//HOC
import DefaultHOC from './HOC/Default.HOC';
import MovieHOC from './HOC/Movie.HOC';

//pages
import Home from './pages/Home.page';
import Movie from './pages/Movie.page';
import Plays from './pages/Plays.page';

//axios
import axios from 'axios';

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (

      <Routes>
        <Route path="/" element={<DefaultHOC><Home /></DefaultHOC>} />
        <Route path="/movie/:id" element={<MovieHOC><Movie /></MovieHOC>} />
        <Route path="/plays" element={<DefaultHOC><Plays /></DefaultHOC>} />
      </Routes>
  );
}

export default App;