import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Index() {
  const navigate = useNavigate();
  return (
    <div style={{ background: '#F5F8FB', height: '100vh' }}>
      <h1>Halo silahkan Login !!!!</h1>
      <button
        onClick={() => {
          navigate('/login');
        }}
      >
        Login
      </button>

      <Link to="/detail-course" className="btn btn-warning">
        Ini Page Detail Course Before Enrol
      </Link>
      <Link to="/userprofile" className="ms-2 btn btn-primary">
        Ini Page ProfileUser
      </Link>
    </div>
  );
}

export default Index;
