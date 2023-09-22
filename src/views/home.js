import React from 'react'
import { Link } from 'react-router-dom'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import ImgtextBlock from '../components/imgtext-block'
import TextBlockimg from '../components/text-blockimg'
import TitleBlock from '../components/title-block'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Feel Free 2 Make Music!</title>
        <meta
          name="description"
          content="Welkom bij orkest Feel Free 2 Make Music! Vrijheid in het maken van muziek!"
        />
        <meta property="og:title" content="Feel Free 2 Make Music!" />
        <meta
          property="og:description"
          content="Welkom bij orkest Feel Free 2 Make Music! Vrijheid in het maken van muziek!"
        />
      </Helmet>
      <div className="home-container1">
        <div id="resources" className="home-hero">
          <Navbar rootClassName="navbar-root-class-name"></Navbar>
          <div className="home-color-filter"></div>
          <div className="home-hero-image"></div>
          <div id="banner-extension" className="home-banner-extension">
            <Player
              src="https://lottie.host/f5bd291e-6286-4ef1-ae16-d4e68690bed3/zMKWGKiBZm.json"
              loop
              speed="1"
              autoplay
              background="transparent"
              className="home-lottie-node"
            ></Player>
            <Player
              src="https://lottie.host/f5bd291e-6286-4ef1-ae16-d4e68690bed3/zMKWGKiBZm.json"
              loop
              speed="0.9"
              autoplay
              background="transparent"
              className="home-lottie-node1"
            ></Player>
          </div>
          <div className="home-content-container">
            <div className="home-hero-text">
              <h1 className="home-heading">
                <span className="home-text">
                  Hallo, en welkom bij orkest
                </span>
                <br className="Section-Heading"></br>
                <span className="home-text02 Section-Heading">
                  Feel Free
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text03 Section-Heading">2</span>
                <span className="home-text04 Section-Heading">
                  {' '}
                  Make Music!
                </span>
              </h1>
              <span className="home-text05 Section-Text-Lg">
                Wij brengen vrijheid in het maken van muziek!
              </span>
              <Link to="/aankomende-optredens" className="home-cta-btn Anchor">
                <span>Bekijk onze aankomende optredens!</span>
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <ImgtextBlock
          text="Wij zijn een groep enthousiaste muziekkanten die het leuk vinden om muziek te maken. Het wisselende repertoire, de samenhorigheid en het plezier wat we eraan beleven staat hoog in het vaandel. Alle muziekstukken worden speciaal voor ons gearrangeerd.  We spelen licht Klassiek tot Nederpop, maar ook kerst medleys. Zo hebben we ons laten horen op braderieën, evenementdagen. We brengen ook serenades op uitnodiging. En we doen regelmatig kleine projecten waar iedereen aan kan meedoen."
          heading="Wie zijn wij?"
          image_src="trompet.jpg"
          rootClassName="imgtext-block-root-class-name"
        ></ImgtextBlock>
        <TextBlockimg
        text="We zijn op zoek naar vrolijke muzikanten die ons orkest willen komen versterken. We zijn op het moment onder andere op zoek naar: een bassist, een slagwerker en een trombonespeler. Maar elk ander instrument is ook van harte welkom! Benieuwd? Word lid!"
        heading="We zoeken ook Muzikanten!"
        image_src="op_zoek_naar_muzikanten.jpg"
        rootClassName="text-block-img-root-class-name">
        </TextBlockimg>
        <div id="ourstory" className="home-our-story">
          <TitleBlock></TitleBlock>
          <div className="home-cards-container">
            <div className="home-left-section">
              <div className="home-video-container">
                <img
                  src="optreden_winkelcentrum_hoofddorp.jpg"
                  className="home-video"
                ></img>
                {/* <div className="home-play-container">
                  <svg viewBox="0 0 1024 1024" className="home-icon2">
                    <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM426 704v-384l256 192z"></path>
                  </svg>
                </div> */}
              </div>
              <div className="home-content-container2">
                <span className="home-heading1 Card-Heading">
                  Flashmob winkelcentrum Hoofddorp
                </span>
                <span className="home-text10 Card-Text">
                </span>
              </div>
            </div>
            <div className="home-left-section">
              <div className="home-video-container">
                <img src="optreden2.jpg"
                  className="home-video"
                ></img>
                {/* <div className="home-play-container">
                  <svg viewBox="0 0 1024 1024" className="home-icon2">
                    <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM426 704v-384l256 192z"></path>
                  </svg>
                </div> */}
              </div>
              <div className="home-content-container2">
                <span className="home-heading1 Card-Heading">
                  Optreden Roelofarendsveen
                </span>
                <span className="home-text10 Card-Text">
                </span>
              </div>
            </div>
            {/* <div className="home-right-section">
              <div className="home-card">
                <img
                  alt="image"
                  src="/whatsapp%20image%202023-09-06%20at%2013.25.50-1500w.jpg"
                  loading="lazy"
                  className="home-image1"
                />
                <div className="home-content-container3">
                  <span className="home-text12 SmallCard-Heading">
                    This text is the name of the article. Lorem ipsum dolor sit
                    metsed ...
                  </span>
                </div>
              </div>
              <div className="home-card1">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="home-image2"
                />
                <div className="home-content-container4">
                  <span className="home-text13 SmallCard-Heading">
                    This text is the name of the article. Lorem ipsum dolor sit
                    metsed ...
                  </span>
                </div>
              </div>
              <div className="home-card2">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="home-image3"
                />
                <div className="home-content-container5">
                  <span className="home-text14 SmallCard-Heading">
                    This text is the name of the article. Lorem ipsum dolor sit
                    metsed ...
                  </span>
                </div>
              </div>
              <div className="home-card3">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="home-image4"
                />
                <div className="home-content-container6">
                  <span className="home-text15 SmallCard-Heading">
                    This text is the name of the article. Lorem ipsum dolor sit
                    metsed ...
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
