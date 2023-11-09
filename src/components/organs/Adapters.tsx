import React, { MutableRefObject, useRef } from 'react'
import { Button } from '../atoms/Button'
import { AdaptersTexts } from '../../store/Data'
import { useMouseFollow } from '../../hooks/useMouseFollow'

export const Adapters = () => {

    const cursorviewRef = useRef() as MutableRefObject<HTMLDivElement>
    const elementRef = useRef() as MutableRefObject<HTMLDivElement>
    // useMouseFollow({cursorviewRef, elementRef})

    return (
        <section className="adapters" data-scroll-section data-scroll-section-interview>
            <div ref={cursorviewRef} className="cursorview">View</div>
            <div className="container row">
                <div className="adapters__textbox textbox row" data-scroll data-scroll-speed="1">
                    <h3 className="adapters__textbox--titlemain titlemain" data-scroll-position='right'>{AdaptersTexts.titlemain} </h3>
                </div>
                <div className='adapters__grid' data-scroll data-scroll-speed="2">
                    {
                        AdaptersTexts.adapters.map((adapter, index) => (
                            <div ref={elementRef} className='adapters__grid--element' key={index}><img src={adapter.img_src} alt={adapter.name} /></div>
                        ))
                    }
                </div>
                <Button className='explore-now' title='Explore Now' bgColor='none' data-scroll data-scroll-speed="3"/>
            </div>
        </section>
    )
}
