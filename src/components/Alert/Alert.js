import React from 'react';
import './Alert.css';

const Alert = props => {
    let color = ['alertBlock', props.type];

    let closeBtn;
    if (props.dismiss !== undefined) {
        closeBtn = (
            <button className="alertClose" onClick={props.dismiss}>&#10006;</button>
        );
    }

    return (
        props.show ?
            <div className={color.join(' ')}>
                {props.children}
                {closeBtn}
            </div> : null
    );
};

export default Alert;