import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={'<About />'} />
      </Routes>
    </div>
  );
}

export default App;
