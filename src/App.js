import './App.css';
import AppRoutes from './routes/AppRoutes';
import {UserContext } from './context/userContext'
import React, { useContext, useEffect } from 'react';


function App() {
  const { Initialize } = useContext(UserContext);
  useEffect(() => {
    Initialize();
  }, []);
  return (
    <div className='App'>
      <AppRoutes />
    </div>
  );
}

export default App;
