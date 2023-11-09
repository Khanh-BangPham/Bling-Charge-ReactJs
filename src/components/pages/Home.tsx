import { Header } from '../atoms/Header'
import { Introduction } from '../organs/Introduction'
import '../../styles/home.css'
import { Intruction } from '../organs/Intruction'
import { GetStarted } from '../organs/GetStarted'
import { Adapters } from '../organs/Adapters'
import { Levegare } from '../organs/Levegare'
import { Footer } from '../atoms/Footer'
import { MutableRefObject, useEffect, useRef } from 'react'
import locomotiveScroll from "locomotive-scroll";
import { useMode } from '../organs/DarkModeProvider'
import { Button } from '../atoms/Button'

export const Home = () => {

  const scrollRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });
    scroll.on('scroll', (args) => {
      
  });
  });


  const { mode, toggleMode } = useMode()
  
  return (
    <>
    <div className='homepage main-scroll' ref={scrollRef} data-scroll-container>
    <div className='change-mode' 
    style={{background: mode === 'dark' ? "#FF65B4" : "#10033F", width: '45px', height: '45px', position:'fixed', top:'10px', left: '10px', zIndex: '999', cursor: 'pointer'}}
    onClick={() => toggleMode()}
    ></div>
    {
      mode === 'light'? 
      (<div className='light-mode active'data-scroll-section data-scroll></div>) : 
      (<div className='light-mode'data-scroll-section data-scroll></div>) 
    }
        <Header />
        <Introduction />
        <Intruction />
        <GetStarted />
        <Adapters />
        <Levegare />
        <Footer />
      </div>
    </>
  )
}
