import React from 'react';
import './Button.css';

const Button = props => {
    let bgColor = ['btn', props.color];

    return (
        <button
            className={bgColor.join(' ')}
            onClick={props.click}
        >
            {props.children}
        </button>
    );
};

export default Button;