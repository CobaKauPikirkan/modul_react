import React from 'react';
import './App.css';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import List from './components/list';

function App() {
  return (
    <>
      <Routes>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path="/galeri" element={<Gallery/>} />
          <Route path="/list" element={<List/>} />
        </Switch>
      </Routes>
    </>
    
  );
}

export default App;
