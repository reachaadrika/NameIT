import React from 'react';
import './SearchBox.css';

const SearchBox =({ oninputChange }) => {
    return(
        <div className="search">
         <input onChange={(Event) => oninputChange(Event.target.value)}
                
                placeholder="Type keywords"
                className="searchIp"
            />
        </div>
    );
};

export default SearchBox;
