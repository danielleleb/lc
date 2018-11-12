import React from 'react';
import '../scss/link.scss';

const Link = (props) => {
    return (
        <span className="hover">
            <span className="hover__half hover__half--one"></span>
            <span className="hover__half hover__half--two"></span>
        </span>
    )
};

export default Link;
