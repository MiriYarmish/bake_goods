import React, { useState } from 'react';
// import './App.css';
import { Provider } from 'react-redux';
import { myStore } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { MyRouting } from './routing/routing';
import { Nav } from './component/nav';
import { ReactComponent as Logo } from './logo.svg'; 

function App() {
  return<>
  <Provider store={myStore}>
      <BrowserRouter>
      <Nav></Nav>
        <MyRouting></MyRouting>
      </BrowserRouter>
  </Provider>
  </>
}

export default App;
