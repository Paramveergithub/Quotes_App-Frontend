import React from 'react';
import MainNavigation from './Component/mainNavigation/MainNavigation';
import { Route, Routes } from 'react-router-dom';
import NewQuotes from './Component/pages/NewQuotes';
import AllQuotes from './Component/pages/AllQuotes';
import ShowQuote from './Component/pages/ShowQuote';
import "./App.css";

function App() {
  return (
    <div>
      <MainNavigation/>

      <main className='main'>
        <Routes>
          <Route path='/' element={<AllQuotes />}/>
          <Route path='/all' element={<AllQuotes />}/>
          <Route path='/new' element={<NewQuotes />}/>
          <Route path='/quotes/:id' element={<ShowQuote />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App