import React from 'react'

function Counter({ counter, updateCounter }) {
    console.log('child is rending')
    return (
        <>
            <div>{counter}</div>
            <button onClick={updateCounter}>Increment</button>
        </>
    )
}

export default React.memo(Counter)