import React from 'react';
import { useSelector } from 'react-redux';

function CookieContainer() {
    const totalCookie = useSelector(state => state.numOfCakes)
    return (
        <div>
            <h2>Number of cookies {totalCookie}</h2>

        </div>
    );
}

export default CookieContainer;