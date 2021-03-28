import React from 'react';
import './NameCrd.css';

const nameCheapUrl =
    'https://www.namecheap.com/domains/registration/results/?domain=';

const NameCrd=({ sug }) => {
    return (
        <a
    
        className="cardl"
        href={`${nameCheapUrl}${sug}`}
    >
       
        <div className="nc">
            <p className="nc-name">
                {sug}
            </p>
        </div>
        </a>
    );
};

export default NameCrd;