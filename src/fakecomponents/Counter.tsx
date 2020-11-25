import React, { FunctionComponent, useState } from 'react'

export const Counter: FunctionComponent = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <button
                onClick={ () =>  setCounter(counter+1)}
                data-testid="counter-button"
            >
                {counter}
            </button>
        </div>
    )
}
