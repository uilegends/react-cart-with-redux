import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux/cakes/cakeAction';
import TestContainer from './TestContainer';
function CakeContainer() {

 const numOfCakes = useSelector(res => res.numOfCakes);

    
    const dispatch = useDispatch();
    
    return (
        <div>
            <TestContainer />
            <h2>Number of cakes {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    );
}
export default CakeContainer




