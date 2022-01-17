import { BrowserRouter, Routes, Route } from 'react-router-dom'

// styles
import './App.css'

// pages & components
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Project from './pages/project/Project';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/create" element={<Create />} />
            <Route path="/project:id" element={<Project />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
