import React from 'react';
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';

const ProtectRoute = ({ children }) => {
  const user = localStorage.getItem('token');

  if (!user) {
    toast.error("UNAUTHROIZED");
    return <Navigate to="/login" replace={true} />
  }

  return children;
}

export default ProtectRoute;