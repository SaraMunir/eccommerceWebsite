import './App.css';
import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ContentManagement from './Components/ContentManagement';
import Homepage from './Components/HomePage';
import './Components/Styles/styles.css'
import Womens from './Components/Womens';
import Mens from './Components/Mens';
import ProductsList from './Components/ProductsList';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/womens' element={<Womens/>}/>
          <Route path='/mens' element={<Mens/>}/>
          <Route path='/products/:category' element={<ProductsList/>}/>
          <Route path='/Admin/*' element={<ContentManagement/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;