import React from 'react';
import './header.css';



const Header = ({ headTitle,headExp }) =>
{
    return (
        <div className="container">
            <img src="https://user-images.githubusercontent.com/64789514/112542322-71689b80-8dda-11eb-8cc8-f0570f328ec5.png" 
            className={`img1 ${
                headExp
                    ? 'img1-exp'
                    : 'img1-cont'
            }`}
             alt="Img1"/>
            <h1 className={`heading ${
                headExp
                    ? 'heading-exp'
                    : 'heading-cont'
            }`}>{headTitle}</h1>
        </div>
    )
};

export default Header;