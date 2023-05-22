import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import PropTypes from 'prop-types';

const TypedText = ({content, loop, backSpeed, typeSpeed}) => {
    return <Typewriter words={content} typeSpeed={typeSpeed} deleteSpeed={backSpeed} loop={!!loop} />
};

TypedText.prototype = {
    content: PropTypes.array,
    loop: PropTypes.bool,
    backSpeed: PropTypes.number
}

export default TypedText;
