import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import React, { useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Component, Suspense } from 'react';
import SpecificDogs from './components/SpecificDogs';

const LazyHome = React.lazy(() => import("./components/FeaturedDogs"))
const LazyBreed1 = React.lazy(() => import("./components/SpecificFeatured1"))
const LazyBreed2 = React.lazy(() => import("./components/SpecificFeatured2"))
const LazyBreed3 = React.lazy(() => import("./components/SpecificFeatured3"))
const LazyResult = React.lazy(() => import("./components/SearchResult"))
const LazySearch = React.lazy(() => import("./components/SearchResult"))
const LazySpecific = React.lazy(() => import("./components/SpecificDogs"))
const LazyAbout = React.lazy(() => import("./components/About"))

const App = () => {
  return (
        <BrowserRouter>
        <NavBar></NavBar>
        {/* change body content to Browser Router and start from Home */}
          <Routes>
              <Route path='/wd100-react-mp-2/' element={<Suspense fallback = {<div className='container text-center'><img src="./Spinner.gif" alt=""/></div>}><LazyHome></LazyHome></Suspense>}></Route>
              <Route path='/wd100-react-mp-2/breed1' element={<Suspense fallback = {<div className='container text-center'><img src="./Spinner.gif" alt=""/></div>}><LazyBreed1></LazyBreed1></Suspense>}></Route>
              <Route path='/wd100-react-mp-2/breed2' element={<Suspense fallback = {<div className='container text-center'><img src="./Spinner.gif" alt=""/></div>}><LazyBreed2></LazyBreed2></Suspense>}></Route>
              <Route path='/wd100-react-mp-2/breed3' element={<Suspense fallback = {<div className='container text-center'><img src="./Spinner.gif" alt=""/></div>}><LazyBreed3></LazyBreed3></Suspense>}></Route>
              <Route path='/wd100-react-mp-2/search' element={<Suspense fallback = {<div className='container text-center'><img src="./Spinner.gif" alt=""/></div>}><LazyResult></LazyResult></Suspense>}></Route>
              <Route path='/wd100-react-mp-2/Specific' element={<Suspense fallback = {<div className='container text-center'><img src="./Spinner.gif" alt=""/></div>}><LazySpecific></LazySpecific></Suspense>}></Route>
              <Route path='/wd100-react-mp-2/about' element = {<Suspense fallback = {<div className='container text-center'><img src="./Spinner.gif" alt="" /></div>}><LazyAbout></LazyAbout></Suspense>}></Route>
          </Routes>
        <Footer></Footer>
        </BrowserRouter>
  );
}

export default App;