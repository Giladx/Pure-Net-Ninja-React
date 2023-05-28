import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Tepid Qualified Goldfinch</title>
        <meta property="og:title" content="Tepid Qualified Goldfinch" />
      </Helmet>
    </div>
  )
}

export default Home
