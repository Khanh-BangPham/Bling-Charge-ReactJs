import React from 'react'
import { IconFacebook } from './Icon/IconFacebook'
import { IconTwitter } from './Icon/IconTwitter'
import { IconInstagram } from './Icon/IconInstagram'
import '../../styles/footer.css'
export const Footer = () => {
  return (
    <footer id='footer' data-scroll-section>
        <div className='container row'>
            <div className='footer__textbox textbox col-5'>
                <h3><img src="/public/img/logo-sm.svg" alt="" /></h3>
                <p>Various kinds of NFT that are trending the trend will be reset and every week creator will show NFT</p>
            </div>
            <div className='footer__info col-7 row'>
                <ul className='footer__info--catagories'>
                    <h5>Categories</h5>
                    <li>Art</li>
                    <li>Collections</li>
                    <li>Domain Name</li>
                    <li>Creator NFT</li>
                </ul>
                <ul className='footer__info--contactus'>
                    <h5>Contact Us</h5>
                    <li>Platform Status</li>
                    <li>Customer Services</li>
                    <li>Partner</li>
                    <li>Privacy policy</li>
                </ul>
                <ul className='footer__info--getInTouch'>
                    <h5>Get In Touch</h5>
                    <li>Indonesia <br />
                        Jl.Griya Permata Hijau no D1 <br />
                        Sukabumi Utara 543881</li>
                    <div className='row'>
                        <li><IconFacebook /></li>
                        <li><IconTwitter /></li>
                        <li><IconInstagram /></li>
                    </div>
                </ul>
            </div>
        </div>
    </footer>
  )
}
