import React from 'react'
import { LevegareTexts } from '../../store/Data'

export const Levegare = () => {
    return (
        <section className="levegare" data-scroll-section>
            <div className="container row">
                <div className='levegare__image' data-scroll data-scroll-speed="1">
                    <img src='/public/img/xiaomi-01.png' alt='xiaomi' className='levegare__image--xiaomi' />
                </div>
                <div className="levegare__textbox textbox row col-6" data-scroll data-scroll-speed="1">
                    <h3 className="levegare__textbox--titlemain titlemain">{LevegareTexts.titlemain}</h3>
                    <p>{LevegareTexts.paragraph}</p>
                    <ul className='container-fluid row'>
                        <h4>{LevegareTexts.levegare_title}</h4>
                        {
                            LevegareTexts.levegare_list.map((elm, index) => (
                                <li className='row' key={index}>
                                    <img src={elm.img_src} alt="" />
                                    <span className='col-8'>{elm.paragraph}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
