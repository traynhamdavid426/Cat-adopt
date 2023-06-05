import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Catgenders.css'

const Catgenders = () => {
  const navigate = useNavigate();

  return (
    <div className='containerer'>
      <div className='content'>
        <button onClick={() => { navigate('/male') }}>Males</button>
        <button onClick={() => { navigate('/female') }}>Females</button>
        <button onClick={() => { navigate('/learncats') }}>All categories</button>
      </div>
    </div>
  );
}

export default Catgenders;
