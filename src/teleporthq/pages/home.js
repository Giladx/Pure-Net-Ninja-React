import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Pure Net Ninja</title>
        <meta name="description" content="We Are Net Ninja" />
        <meta property="og:title" content="Pure Net Ninja" />
        <meta property="og:description" content="We Are Net Ninja" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/cfaa4362-79e4-4b87-bfdc-68cf44db99bc/03b8584b-375b-4886-9640-29b0a9cfe2d1?org_if_sml=1&amp;q=80"
        />
      </Helmet>
      <div className="home-full-page">
        <img alt="image" src="/untitled.webp" className="home-image" />
        <div className="home-container1">
          <img alt="image" src="/name logo.png" className="home-image1" />
        </div>
        <span className="home-text">
          &quot;Achieve wonderful success with our technical service!&quot;
        </span>
        <div className="home-container2">
          <Player
            src="https://assets10.lottiefiles.com/packages/lf20_bt7iqzns.json"
            loop
            speed="2"
            autoplay
            background="transparent"
            className="home-lottie-node"
          ></Player>
          <div className="home-container3">
            <a href="tel:0525983311" className="home-link">
              <span>
                Tel:                             
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text2">0525983311</span>
            </a>
            <a
              href="https://alexypv@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link1"
            >
              <span>eMail:           </span>
              <span className="home-text4">alexypv@gmail.com</span>
            </a>
            <a
              href="https://wa.link/tlx6wc"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link2"
            >
              <span>WhatsAp</span>
              <span>p:               </span>
              <span className="home-text7">Click To Chat</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
