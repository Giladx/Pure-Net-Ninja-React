import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Pure Net Ninja</title>
          <meta name="description" content="We Are Net Ninja" />
          <meta property="og:title" content="Pure Net Ninja" />
          <meta property="og:description" content="We Are Net Ninja" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/cfaa4362-79e4-4b87-bfdc-68cf44db99bc/03b8584b-375b-4886-9640-29b0a9cfe2d1?org_if_sml=1&amp;q=80"
          />
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
          @media (max-width: 479px) {
            .home-text {
              width: 100%;
              font-size: 6em;
              align-self: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
