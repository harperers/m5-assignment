import React from 'react';
import { useLocation } from 'react-router-dom';

const CheckOut = () => {
  const location = useLocation();
  const username = location.state?.username

  return (
    <div style={{ textAlign: 'center', padding: '200px' }}>
      <h2>Check Out</h2>
      <p>Welcome back, {username}!</p>
      <p>Time to check out?</p>
    </div>
  );
};

export default CheckOut;