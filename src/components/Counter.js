import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleCounterEvent = (num) => {
        setCount((prevCount) =>  {
            console.log(prevCount);
           return  prevCount + num
        })
        }
  return (
    <div className='counter center'>
        <h1 className='titleCounter__title'>Counter App</h1>
        <div className='card center'>
            <h1 className='card__title'>Count: {count}</h1>
            <div>
                <button className='btn' disabled={count >= 20} onClick={() => handleCounterEvent(+1)}>
                    +
                </button>
                <button className='btn' disabled={count >= 20} onClick={() => handleCounterEvent(+5)}>
                    +5
                </button>
                <button className='btn' onClick={()=> setCount(0)}>
                    Reset
                </button>
                <button className='btn' disabled={count <= -20} onClick={() => handleCounterEvent(-1)}>
                
                    -
                
                </button>
                <button className='btn' disabled={count <= -20} onClick={() => handleCounterEvent(-5)}>
                
                    -5
                
                </button>
                
                
            </div>
        </div>
    </div>
  )
}

export default Counter