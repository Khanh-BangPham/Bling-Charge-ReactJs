import React from 'react'
import { Button } from '../atoms/Button'
import { IntroductionTexts } from '../../store/Data'

export const Introduction = () => {
  return (
    <section  className="introduction" data-scroll-section data-scroll-section-interview>
        <div className="container row">
            <div className="introduction__textbox textbox --yellow col-6" data-scroll data-scroll-speed="1">
                <h3 className="introduction__textbox--titlemain titlemain" data-fit-text data-scroll>{IntroductionTexts.titlemain}</h3>
                <p>{IntroductionTexts.paragraph}</p>
                <div className='row'>
                    <Button className='explore-now' title='Explore Now'/>
                    <Button className='get-early-access' bgColor='none' title='Get Early Access'/>
                </div>
            </div>
            <div className='introduction__image' data-scroll data-scroll-speed="1">
              {
                IntroductionTexts.images.map((img, index) => (
                  <img key={index} src={img.src} alt={img.name} className={`introduction__image--${img.name}`}  data-scroll data-scroll-speed={- index - 1}/>
                ))
              }
            </div>
        </div>
    </section> 
  )
}
