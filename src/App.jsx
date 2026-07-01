import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Routing from './components/Routing/Routing';


const App = () => {
  return (
    <>
    <BrowserRouter>  <Routing/> </BrowserRouter>

    </>
  )
}

export default App
