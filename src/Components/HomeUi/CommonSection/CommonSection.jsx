import React from 'react';
import './CommonSection.css';

const CommonSection = ({img, title, content}) => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-7 col-12">
                    <img src={img} alt=""/>
                </div>
                <div className="col-md-5 mt-5 col-12  common__content">
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default CommonSection
