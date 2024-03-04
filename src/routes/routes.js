import React from 'react'
import {  Routes, Route } from "react-router-dom";
import HomeMain from '../Screens/Home/HomeMain';
import CollectionMain from '../Screens/Collection/CollectionMain';
import ContactUsMain from '../Screens/ContactUs/ContactUsMain';
import AboutUsMain from '../Screens/Aboutus/AboutUsMain';

const MainRoute = () => {
  return (
    // <CartProvider>
    // <FavoritesProvider> 
    <Routes>
        <Route path="/" element={<HomeMain/>} />
        <Route path="/Home" element={<HomeMain/>} />
        <Route path="/Collection" element={<CollectionMain/>} />
        <Route path="/ContactUs" element={<ContactUsMain/>} />
        <Route path="/AboutUs" element={<AboutUsMain/>} />

      </Routes>

//       </FavoritesProvider> 
// </CartProvider>
 
  )
}

export default MainRoute;
