import React from 'react'
import { GetStartedTexts } from '../../store/Data'

export const GetStarted = () => {
    return (
        <section className="getStarted" data-scroll-section>
            <div className="container row">
                <div className='container-fluid row' data-scroll data-scroll-speed="1">
                    <div className='getStarted__logo'>
                        <img src="/public/img/logo-l.svg" alt="" />
                    </div>
                    <div className="getStarted__textbox textbox row" data-scroll data-scroll-speed="2">
                        <h3 className="getStarted__textbox--titlemain titlemain">{GetStartedTexts.titlemain}</h3>
                        <p>{GetStartedTexts.paragraph}</p>
                    </div>
                </div>
                <div className='getStarted__block'>
                    <img src={GetStartedTexts.block.img_src} alt="img" />
                </div>
            </div>
        </section>
    )
}
