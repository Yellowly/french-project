import { useState } from 'react'
import logo from '../logo.svg'
import favicon from '../favicon.svg'
import parallax1 from '../parallax1.png'
import parallax2 from '../parallax2.png'
import parallax3 from '../parallax3.png'
import parallax4 from '../parallax4.png'
import Laurenti_2019_ from './Laurenti_2019_(52).jpg'
import southwestvinyards from './southwestvinyards.jpg'
import arton from './arton.png'
import bull from './bull.jpg'
import lang from './lang.jpg'
import lourdes from './lourdes.jpg'

import { Parallax, Background } from 'react-parallax';


const Home = () => {  
  return (
    <div>
      <div className="Page-header" style={{minHeight:`0px`}}>
        <Parallax bgImage={logo} strength={0} renderLayer={percentage => (
          <div>
            <img src={parallax1} style={{width: `100%`, position: `absolute`, transform: `translate3d(0px, ${percentage*41-38}vmin, 0px)`}}/>
            <img src={parallax2} style={{width: `100%`, position: `absolute`, transform: `translate3d(0px, ${percentage*40-38}vmin, 0px)`}}/>
            <img src={parallax3} style={{width: `100%`, position: `absolute`, transform: `translate3d(0px, ${percentage*20-19}vmin, 0px)`}}/>
            <img src={parallax4} style={{width: `100%`, transform: `translate3d(0px, 0px, 0px)`}}/>
          </div>
        )}>
        </Parallax>
        <div className="Centered-Text"><h1>Occitanie</h1></div>
      </div>
      <div className="Box">
        <div className="Third-Image">
          <div className='ImageLink'>
          <div className="Centered2"><a href="/geography" >Geographie</a></div>
            <img src={Laurenti_2019_} className="Scalable"/>
          </div>
          <div className='ImageLink'>
            <div className="Centered2"><a href="/economy">Economie</a></div>
            <img src={southwestvinyards} className="Scalable"/>
          </div>
          <div className='ImageLink'>
            <div className="Centered2"><a href="/culture">Culture</a></div>
            <img src={bull} className="Scalable"/>
          </div>
        </div>
        <div className="Third-Image">
          <div className='ImageLink'>
          <div className="Centered2"><a href="/language" >Langue</a></div>
            <img src={lang} className="Scalable"/>
          </div>
          <div className='ImageLink'>
            <div className="Centered2"><a href="/tourism">Tourisme</a></div>
            <img src={lourdes} className="Scalable"/>
          </div>
          <div className='ImageLink'>
            <div className="Centered2"><a href="/why-to-go">Pourquoi Occitanie?</a></div>
            <img src={arton} className="Scalable"/>
          </div>
        </div>
      </div>
      <div className='Code'><a href = "">code</a></div>
      <br/>
    </div>
  );
}
export default Home;
/*
    <div className="App">
      <div className="Parallax">
<header className="App-header">
        
      </header>
      <span>
            <img src={favicon} className="Vite-logo" alt="logo" />
            <img src={logo} className="React-logo" alt="logo" />
        </span>
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
        */