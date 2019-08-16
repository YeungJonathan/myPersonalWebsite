import './Filler.css';
import React from 'react';

const Filler = (props) => {
    return <div className="filler" style={{width: `${props.percentage}%`}}/>
}

export default Filler;