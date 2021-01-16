import React from 'react'
import Footer from '../Footer/Footer'
import CommonSection from './CommonSection/CommonSection'
import Hanging from './Hanging/Hanging'
import Header from './Header/Header'
import HeroSection from './HeroSection/HeroSection'
import RelableCode from './RelableCode/RelableCode'
import img from '../../images/section-3.svg';

const HomeUI = () => {
    return (
        <>
            <Header/>
            <HeroSection/>
            <Hanging/>
            <CommonSection 
            img ={img}
            title='From a few to a fandom'
            content='Get a community of any size running with moderation tools and custom member access. Give members special powers, set up private channels, and more.'
            />
            <RelableCode />
            <Footer/>
        </>
    )
}

export default HomeUI
