

import React from 'react';

const Button = ({count ,handleReduce,handleAdd}) => {
    return (
        <div>
            <h1 data-testid="counter">{count}</h1>
            <button data-testid="increment" onClick={handleAdd} >ADD</button>
            <button data-testid="decrement" onClick={handleReduce}>REDUCER</button>
        </div>
    );
};

export default Button;