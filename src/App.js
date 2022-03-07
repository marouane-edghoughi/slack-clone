import React from 'react';

import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';


function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;

export const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
