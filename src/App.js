import { Route, Routes } from 'react-router-dom';
import DefaultHOC from './HOC/Default.HOC';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <DefaultHOC>
        </DefaultHOC>
      } />
    </Routes>
  );
}

export default App;