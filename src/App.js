import './App.css';
import React from 'react';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import { Route, BrowserRouter, Routes} from "react-router-dom"
import Slider from './components/Slider';
import data from './data/data.json'
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProducts from './components/StarProducts';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories';
import ProductReviews from './components/ProductReviews';





function App() {
  return (
    <BrowserRouter>
       <PreNavbar />
        <Navbar />
        < Slider start={data.banner.start}/>
        <Offers offers ={data.offer}/>
        <Heading text ="STAR PRODUCTS"/> 
        {/* Here now you can use heading as many times you want with the desired text */}
        <StarProducts  starProducts={data.starProduct}/>
        <Heading text ="HOT PRODUCTS"/> 
        <HotAccessoriesMenu />
        
        <Routes>  
        <Route exact path='/music'
          element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}/>
        <Route exact path='/smartDevice'
          element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}/>
        <Route exact path='/home'
          element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>}/>
        <Route exact path='/lifeStyle'
          element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>}/>
        <Route exact path='/mobileAccessories'
          element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}/>
        </Routes>

        <Heading text ="PRODUCT REVIEWS "/> 
        <ProductReviews productReviews={data.productReviews} />
      
        <Heading text =" VIDEOS "/> 
   
    </BrowserRouter>
  
  );
}

export default App;
