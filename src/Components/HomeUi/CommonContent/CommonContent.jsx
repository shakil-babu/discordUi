import React from 'react' ;
import './CommonContent.css';

const CommonContent = ({title, content}) => {
 
    return (
        <div className='common__contentt'>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

export default CommonContent
