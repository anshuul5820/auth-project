import { useState } from 'react';
import Login from './Auth/Login';
import Signup from './Auth/Signup';

export const App = () => {
  const [auhenticated, setAuthenticated] = useState(false);
  return (
    <div className='home'>
      <Login />
      {/* <Signup setAuthenticated={setAuthenticated} /> */}
    </div>
  );
};
