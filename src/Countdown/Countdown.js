import { useState, useEffect } from 'react'

// The following is a piece of code that someone has given you for code review.
// There are a few glaring mistakes as well as some more nuanced issues. As we
// read over the code and talk about it together, your job is to identify the React
// bugs and antipatterns and express your thought processes as to how you would go 
// about fixing them. Think about what the code is doing right now, how it should
// work if done properly, and how to fix it. As we go along, implement the solutions live.

function CountdownComponentParent () {
    const [renderNum, setRenderNum] = useState(0)
    const [userId, setUserId] = useState("Luca")

    // This simulates a rerender of the parent component. In a normal app this can happen
    // for many reasons.
    setInterval(() => {setRenderNum(Math.random())}, 2000)
    
    const CountdownComponent = (props) => {
        const [count, setCount] = useState(props.count)
        const [square, setSquare] = useState(props.count * props.count) 
        const [boxColorEditable, setBoxColorEditable] = useState(props.boxColor)
    
        useEffect(() => {
            setBoxColorEditable(props.boxColor)
        }, [props])
    
        const decrementCount = () => {
            setCount(count - 1)
            setSquare(count * count)
        }
    
        const handleColorChange = (e) => {
            setBoxColorEditable(e.target.value)
        }
    
        return (
            <div>
                <button onClick={decrementCount}>Decrement Count</button>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div style={{backgroundColor: boxColorEditable, height: count, width: count, borderStyle: "solid"}} />
                </div>
                <div>The area of the box is {square} pixels.</div>
                <label>Set Box Color</label>
                <input value={boxColorEditable} onChange={handleColorChange}></input> 
                <div>This operation is run by {props.userId}</div>
            </div>
        )
    }

    return <CountdownComponent count={50} boxColor={"red"} userId={userId}/>
}

export default CountdownComponentParent