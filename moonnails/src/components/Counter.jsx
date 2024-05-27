import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(1);

    const increase = () => {
        setCount (count + 1)
    }

    const decrease = () => {
        if(count > 1) {
            setCount (count - 1)
        }
    }

    return (
        <div className="flex gap-4 text-xl">
            <button onClick={decrease}>-</button>
            <p>{count}</p>
            <button onClick={increase}>+</button>
        </div>
    )
}

export default Counter;