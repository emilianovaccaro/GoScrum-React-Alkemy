import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import NavRender from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import TaskForm from './components/TaskForm/TaskForm';


function App() {
  return (
    <>
      <Router>
          <NavRender />
          
        <div className='container'>
          
          <Routes>
            <Route path="/" element={ <Dashboard /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="/addTask" element={ <TaskForm /> } />
          </Routes>

        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
