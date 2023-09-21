import { useState } from "react"

export default function Counter() {
    const counterStyle = {
        border: "2px solid red",
        borderRadius: "20px",
        padding: "20px",
        margin: "20px",
        backgroundColor: "pink"
    }
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleReduce = () => {
        const newCount2 = count - 1;
        setCount(newCount2);
    }
    return (
        <div style={counterStyle}>
            <h2>Counter: {count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}