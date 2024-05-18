import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SpecificFeatured1 from './components/SpecificFeatured1';
import SpecificFeatured2 from './components/SpecificFeatured2';
import SpecificFeatured3 from './components/SpecificFeatured3';
import FeaturedDogs from './components/FeaturedDogs';
import React, { useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SearchResult from './components/SearchResult';
import SpecificDogs from './components/SpecificDogs';
import AboutUs from './components/About';

const App = () => {
  const [loading, setLoading] = useState(true)
  const spinner = document.getElementById('spinner');
  if (spinner) {
    setTimeout(() => {
      spinner.style.display="none";
      setLoading(false);
    }, 2000)
  }
  return (
      !loading && (
        <BrowserRouter>
        <NavBar></NavBar>
        {/* change body content to Browser Router and start from Home */}
          <Routes>
              <Route path='/' element={<FeaturedDogs></FeaturedDogs>}></Route>
              <Route path='/breed1' element={<SpecificFeatured1></SpecificFeatured1>}></Route>
              <Route path='/breed2' element={<SpecificFeatured2></SpecificFeatured2>}></Route>
              <Route path='/breed3' element={<SpecificFeatured3></SpecificFeatured3>}></Route>
              <Route path='/search' element={<SearchResult></SearchResult>}></Route>
              <Route path='/Specific' element={<SpecificDogs></SpecificDogs>}></Route>
              <Route path='/about' element = {<AboutUs></AboutUs>}></Route>
          </Routes>
        <Footer></Footer>
        </BrowserRouter>
      )
  );
}

export default App;