import React, { MutableRefObject, useLayoutEffect, useRef } from 'react';
import { Home } from './components/pages/Home';
import gsap from 'gsap';
import { DarkModeProvider } from './components/organs/DarkModeProvider';

function App() {

  const introloadingRef = useRef() as MutableRefObject<HTMLDivElement>
  const loaderRef = useRef() as MutableRefObject<HTMLDivElement>
  const recRef = useRef() as MutableRefObject<HTMLDivElement>

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(introloadingRef.current, {
        opacity: 1,
        visibility: 'visible'
      }),
        gsap.to(loaderRef.current, {
          opacity: 1,
          visibility: 'visible',
          duration: .6,
          delay: .5
        }),
        gsap.to(recRef.current, {
          width: loaderRef.current.clientHeight,
          duration: .6,
          delay: 1.5,
          ease: "Expo.easeOut"
        }),
        gsap.to(loaderRef.current, {
          opacity: 0,
          visibility: 'hidden',
          delay: 3,
          duration: .6
        }),
        gsap.set(introloadingRef.current, {
          opacity: 0,
          visibility: 'hidden',
          delay: 3,
        })
    })
    return () => ctx.revert();
  }, [])

  return (
    <DarkModeProvider>
      <div ref={introloadingRef} className="introloading" style={{ opacity: '0', visibility: 'hidden' }}>
        <div ref={loaderRef} className="introloading__loader" style={{ opacity: '0', visibility: 'hidden' }}>
          <span ref={recRef} className="introloading__loader-rec" style={{ width: '0' }}>
            <img src="/public/img/Group.svg" alt="" />
          </span>
          <img src="/public/img/introtext.svg" alt="" className="introloading__loader-cfdstudio" />
        </div>
      </div>
      <Home />
    </DarkModeProvider>
  )
}

export default App
