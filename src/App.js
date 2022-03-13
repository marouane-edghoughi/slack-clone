import React from 'react';

import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

import styled from 'styled-components';

import Login from './components/Login/Login';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';


function App() {

  const [user, loading] = useAuthState(auth);

  return (
    <Router>
      {user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>
                  <Route
                    exact
                    path='/'
                    element={
                      <Chat />
                    }
                  />
              </Routes>
            </AppBody>
          </>
        )
      }
      
    </Router>
  );
}

export default App;

export const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
