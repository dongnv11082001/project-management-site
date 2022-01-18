import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

// styles
import './App.css'

// pages & components
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Project from './pages/project/Project';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import OnlineUsers from './components/OnlineUsers';


function App() {
  const { user, authIsReady } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    {user && <Dashboard />}
                    {!user && <Navigate to={'/login'} />}
                  </>
                }
              />
              <Route
                path="/create"
                element={
                  <>
                    {user && <Create />}
                    {!user && <Navigate to={'/login'} />}
                  </>
                }
              />
              <Route
                path="/project:id"
                element={
                  <>
                    {user && <Project />}
                    {!user && <Navigate to={'/login'} />}
                  </>
                }
              />
              <Route path="/login" element={
                <>
                  {!user && <Login />}
                  {user && <Navigate to={'/'} />}
                </>} 
              />
              <Route path="/signup" element={
                <>
                  {!user && <Signup />}
                  {user && <Navigate to={'/'} />}
                </>} 
              />
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
