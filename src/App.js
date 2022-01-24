import React from 'react';
import {BrowserRouter ,Switch,Route,Routes} from "react-router-dom";
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Error from './Error'
import SingleCocktail from './SingleCocktail'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route path='/about' element={<About />} />
      <Route path='/cocktail/:id' element={<SingleCocktail/>}/>
      <Route path='*' element={<Error />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;