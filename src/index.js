import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/Navbar/Navbar.js';
import Header from './components/Header.js';
import Gallery from './components/Gallery.js';
import BottomMenu from './components/BottomMenu.js';
import ImageInfo from "./components/ImageInfo";
import Parallax from "./components/Parallax";
import ShortTiles from './components/ShortTiles/ShortTiles';
import ReviewSlider from './components/ReviewSlider';
import FormContainer from './components/FormContainer/FormContainer';
import Footer from './components/Footer'
import './main.scss';

ReactDOM.render(
  <React.StrictMode>    
    <NavBar />
    <Header />    
    <BottomMenu />
    <ImageInfo />
    <Parallax />
    <ShortTiles />
    <Gallery />
    <ReviewSlider />
    <FormContainer />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

