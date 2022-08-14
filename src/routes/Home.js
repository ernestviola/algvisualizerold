import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Welcome!</h1>
        <p>This site is used to visualize common programming algorithms.</p>
        <Link to={'/search'} >Search</Link>
    </div>
  )
}

export default Home