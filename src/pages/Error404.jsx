import React from 'react'
import { Btn } from '../components/InputFields/ButtonStyle';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div style={{margin:'100px auto'}}>
      Page not found
      <Btn onClick={() => {navigate('/')}}>Homepage</Btn>
    </div>
  );
}

export default Error404