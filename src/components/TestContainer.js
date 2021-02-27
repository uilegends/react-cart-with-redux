import React from 'react';
import { useSelector } from 'react-redux';

function TestContainer() {
const testContainer = useSelector(res => res.numOfCakes);

    return (
        <div>
            <p>num of tast cake {testContainer}</p>
        </div>
    );
}

export default TestContainer;