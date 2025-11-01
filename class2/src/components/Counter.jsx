import React from 'react'
import { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(10)

    // const increase = () => {setCount(count + 1)}
    // const decrease = () => {setCount(count - 1)}
    function decrease (){
        if (count==0) {
            setCount(0)
        }
        else {
            setCount(count - 1)
        }
    }

  return (
    <div>
        <h1>
            Counter :: {count} 
        </h1>
        <button onClick={() => {setCount(count + 1)}} >increase</button>
        &nbsp; &nbsp;
        <button onClick={decrease}>decrease</button>
    </div>
  )
}

export default Counter