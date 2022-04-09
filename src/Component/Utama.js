import React from 'react';
import {Switch, Routes, Route} from 'react-router-dom';

import Beranda from './Beranda';
import About from './About';
import Karya from './Karya';
import Kontak from './Kontak';
import List from './list';
import Gallery from './pages/Gallery';
import Cart from './pages/Cart';


const Utama = () => (
    <Routes>
        <Route exact path="/"  element={<Beranda/>}/>
        <Route path="/tentangsaya"  element={<About/>}/>
        <Route path="/karya"  element={<Karya/>}/> 
        <Route path="/kontak"  element={<Kontak/>}/>
         <Route path="/list"  element={<List/>}/>
         <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/cart" element={<Cart/>}/>
    </Routes>
)

export default Utama;