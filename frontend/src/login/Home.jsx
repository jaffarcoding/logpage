import React from 'react'
import { useLocation } from 'react-router-dom'
import "./Home.css"
const Home = () => {
    const location = useLocation();
  return (
    <div className="container">
        <article className='articles'>
        <p>Email {location.state.emailid}</p>
        <p>password {location.state.passwordid}</p>
        </article>
    </div>
  )
}

export default Home