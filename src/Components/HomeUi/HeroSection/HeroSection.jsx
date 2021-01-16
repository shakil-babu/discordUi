import React from 'react' ;
import CommonSection from '../CommonSection/CommonSection';
import './HeroSection.css';
import imgFirst from '../../../images/section-1.svg';

const HeroSection = () => {
    return (
        <section className='my-5 py-3'>
            <CommonSection img={imgFirst}
            title='An invite-only place with plenty of room to talk'
            content="Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
            />
        </section>
    )
}

export default HeroSection
