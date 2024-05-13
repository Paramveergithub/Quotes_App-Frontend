import React from 'react'
import {Link} from "react-router-dom"
import '../../App.css';

function MainNavigation() {
  return (
    <nav className='nav'>
      <h1>🔥Great Quotes Collection🔥</h1>
      <ul>
        <li>
             <Link to="/all" className='all'>All Quotes</Link>
        </li>
        <li>
             <Link to="/new" className='new'>New Quotes</Link>
        </li>
      </ul>
    </nav>
  )
}


export default MainNavigation
// <a href="/new">New Quotes</a> -> anchor tag leads refresh or loading.