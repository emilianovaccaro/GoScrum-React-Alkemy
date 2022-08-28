import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import TaskForm from './components/TaskForm/TaskForm';


function App() {
  return (
    <>
      <Router>
        <div className='container'>

          <Navbar />
          
          <Routes>
            <Route path="/" element={ <Dashboard /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="/taskform" element={ <TaskForm /> } />
          </Routes>

        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
