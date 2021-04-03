import React from 'react';

const ButtonTemplate = ({buttonText, clickEvent}) => (
    <button
        className="app__button"
        onClick={clickEvent}>
        { buttonText }
    </button>
);

export default ButtonTemplate
