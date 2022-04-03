import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

const JacketsPage = () => (
  <div>
    <h1>JACKETS PAGE</h1>
  </div>
)
const SneakersPage = () => (
  <div>
    <h1>SNEAKERS PAGE</h1>
  </div>
)
const WomenPage = () => (
  <div>
    <h1>WOMEN PAGE</h1>
  </div>
)
const MenPage = () => (
  <div>
    <h1>MEN PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/shop/hats' element={<HatsPage/>}/>
        <Route path='/shop/sneakers' element={<SneakersPage/>}/>
        <Route path='/shop/jackets' element={<JacketsPage/>}/>
        <Route path='/shop/women' element={<WomenPage/>}/>
        <Route path='/shop/men' element={<MenPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
