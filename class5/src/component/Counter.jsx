import React, { useEffect } from 'react'
import { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(10)

    useEffect(() => {
        console.log("Count is : ", count);
    }, [count]);

    function decrease() {
        if (count == 0) {
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
            <button onClick={() => { setCount(count + 1) }} >increase</button>
            &nbsp; &nbsp;
            <button onClick={decrease}>decrease</button>
        </div>
    )
}

export default Counter