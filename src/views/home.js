import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Pure Net Ninja</title>
        <meta property="og:title" content="Pure Net Ninja" />
      </Helmet>
      <div className="home-full-page">
        <span className="home-text">coming soon</span>
      </div>
    </div>
  )
}

export default Home
