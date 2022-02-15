import React from 'react';

import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Sidebar />
        <Routes>
            <Route
              exact
              path='/'
              element={
                <></>
              }
            />
        </Routes>
      </>
    </Router>
  );
}

export default App;

export const AppBody = styled.div`

`;
