import React from 'react'
import './RelableCode.css'
import img from '../../../images/section-4.svg';
import {BiArrowToBottom} from 'react-icons/bi';
const RelableCode = () => {
    return (
      <section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f6f6f6" fill-opacity="1" d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,122.7C672,117,768,75,864,80C960,85,1056,139,1152,154.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <main className='relable__container pb-5'>
            <article className='container text-center relable__area pb-5'>
                <h1>Reliable tech for staying close</h1>
                <p>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
                <div className="row">
                    <div className="col-12">
                        <img src={img} alt="img" className='img-fluid'/>
                    </div>
                </div>
                <h3>Ready to start your journey?</h3>
                <a className='btn__design skyblue' href=""><BiArrowToBottom className='icon'/>Dowenload for Windows</a>
            </article>
        </main>
      </section>
    )
}

export default RelableCode
