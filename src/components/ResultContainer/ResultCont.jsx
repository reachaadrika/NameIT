import React from 'react';
import './ResultCont.css';
import NameCrd from '../NameCrd/NameCrd'

const ResultCont = ({sugName}) =>
{
    const sugNameski=sugName.map((sug) => {
        return <NameCrd  key={sug} sug={sug} />
    });

    return( 
    <div className="res">
        {sugNameski}
    
    </div>
    );
};

export default ResultCont;