import DefaultHOC from './HOC/Default.HOC';

// Import css files
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Home from './pages/Home.page';
function App() {
  return (
    <>
    
    <DefaultHOC path="/" component={Home}/>
    </>
  );
}

export default App;