import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Spinner from './components/Spinner/Spinner'
import NavRender from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/Task/TaskList';
import ProtectRoute from './helpers/ProtectRoute';

const Error404 = lazy(() => import("./pages/Error404"));


const App = () => {
  return (
    <>
      <Router>
        <NavRender />

        <div className='container'>
          <Routes>
            <Route path="/" element={ <Dashboard /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="/addTask" element={ 
              <ProtectRoute>
                <TaskForm /> 
              </ProtectRoute>
            } />


            <Route path="/tasks" element={ 
              <ProtectRoute>
                <TaskList /> 
              </ProtectRoute>
            } />

            <Route path="*" element={ 
                <Suspense fallback={<Spinner />}>
                  <Error404 /> 
                </Suspense> 
              }
            />
            
          </Routes>

        </div>

      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
