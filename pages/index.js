import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Pure Net Ninja</title>
          <meta property="og:title" content="Pure Net Ninja" />
        </Head>
        <div className="home-full-page">
          <span className="home-text">coming soon</span>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-full-page {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-text {
            color: var(--dl-color-gray-white);
            font-size: 12em;
            align-self: center;
            text-align: center;
            text-transform: uppercase;
            background-color: #000000;
          }
        `}
      </style>
    </>
  )
}

export default Home
