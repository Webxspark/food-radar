import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing';
import Dashboard from './pages/dashboard';
import IncidentForm from './pages/incident-form';
import ReportedCases from './pages/reported-cases';
import ReportPreview from './pages/report-preview';
import Admin from './pages/admin';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/incident-form" element={<IncidentForm />} />
        <Route path="/reported-cases" element={<ReportedCases />} />
        <Route path="/report-preview" element={<ReportPreview />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
