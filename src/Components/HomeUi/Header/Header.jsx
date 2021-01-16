import React from 'react' ;
import Navbar from '../../Navbar/Navbar';
import CommonContent from '../CommonContent/CommonContent';
import './Header.css' ;
import {BiArrowToBottom} from 'react-icons/bi';

const Header = () => {
    return (
        <>
        
            <section className='header__area pt-5'>
            <div className="header__content pt-5">
                <CommonContent title="Your place to talk" 
                content="Whether you’re part of a school club, gaming group, worldwide art community, or just a handful of friends that want to spend time together, Discord makes it easy to talk every day and hang out more often."
                />
                <div className="d-flex">
                <a className='btn__design white' href=""><BiArrowToBottom className='icon'/>Dowenload for Windows</a>
                <a className='btn__design black' href="">Open Discord in your browser</a>
                </div>
            </div>

            </section>
        </>
    )
}

export default Header
