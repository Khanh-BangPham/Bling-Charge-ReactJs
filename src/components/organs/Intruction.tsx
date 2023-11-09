import React from 'react'
import { IconThreeDotAction } from '../atoms/Icon/IconThreeDotAction'
import { IntructionTexts } from '../../store/Data'

export const Intruction = () => {
    return (
        <section className="intruction" data-scroll-section>
            <div className="container row">
                <div className="intruction__textbox textbox row"  data-scroll data-scroll-speed="1">
                    <h3 className="intruction__textbox--titlemain titlemain">{IntructionTexts.titlemain}</h3>
                    <p>{IntructionTexts.paragraph}</p>
                </div>
                <div className='intruction__slide'  data-scroll data-scroll-speed="4">
                    {
                        IntructionTexts.slides.map((slide, index) => (
                            <div key={index} className='intruction__slide--element row'>
                                <div className='image-slide col-5'>
                                    <img src={slide.img_src} alt={slide.name} />
                                    <div className='three-dots'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <div className='content col-7'>
                                    <div className='title'>{slide.title}</div>
                                    <span>{slide.paragraph}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
