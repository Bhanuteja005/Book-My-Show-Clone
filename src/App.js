import { Route, Routes } from 'react-router-dom';
//HOC
import DefaultHOC from './HOC/Default.HOC';
import MovieHOC from './HOC/Movie.HOC';
//pages
import Home from './pages/Home.page';
import Movie from './pages/Movie.page';
import Plays from './pages/Plays.page';
//axios
import { Axios } from 'axios';
//axios default settings
Axios.defaults.baseURL = "https://api.themoviedb.org/3";
Axios.defaults.params = {};
Axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;
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