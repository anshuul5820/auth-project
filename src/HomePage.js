import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ authenticated }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (authenticated) return;
    else navigate('/');
  }, []);
  return <div>hello</div>;
};

export default HomePage;
