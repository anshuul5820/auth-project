import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import HomePage from './HomePage';

export const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <div className='home'>
        <Routes>
          <Route
            path='/'
            element={<Login setAuthenticated={setAuthenticated} />}
          />
          <Route
            path='/signup'
            element={<Signup setAuthenticated={setAuthenticated} />}
          />
          <Route
            path='/home'
            element={<HomePage authenticated={authenticated} />}
          />
        </Routes>
        {/* <Signup setAuthenticated={setAuthenticated} /> */}
      </div>
    </BrowserRouter>
  );
};
