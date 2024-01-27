import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
