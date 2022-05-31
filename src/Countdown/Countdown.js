import { useState, useEffect } from 'react'

// A developer on our team was tasked to create a view that keeps track of a count variable,
// displays a count x count square, and allows the user to click a button to decrement the count.
// He was told that the view should also implement the following features:
// 1. It should tell the user what the current area of the box is
// 2. It should allow the user to click a button which decrements the count and makes the box appear 
// smaller. 
// 3. It should allow the user should also to change the background color of the box by typing a 
// new color in an <input>
// 4. It should be written such that, when the userID changes, the input should reset to "red" and the count 
// to "50" no matter the current state.
// Our teammate has attempted to implement these features and handed us the below code to review. During
// the next 20 minutes, read the code and analyze/discuss the React mistakes/antipatterns your teammate
// has made and how we should fix them. You may use any internet resources as well as ask questions and
// change the code itself to see how it behaves.

function CountdownComponentParent () {
    const [renderNum, setRenderNum] = useState(0)
    const [userId, setUserId] = useState("Luca")

    // This simulates a rerender of the parent component. In a normal app this can happen
    // for many reasons.
    setInterval(() => {setRenderNum(Math.random())}, 2000)
    
    const CountdownComponent = (props) => {
        const [sideLength, setSideLength] = useState(props.sideLength)
        const [square, setSquare] = useState(props.sideLength * props.sideLength) 
        const [boxColorEditable, setBoxColorEditable] = useState(props.boxColor)
    
        useEffect(() => {
            setBoxColorEditable(props.boxColor)
        }, [props])
    
        const decrementSideLength = () => {
            setSideLength(sideLength - 1)
            setSquare(sideLength * sideLength)
        }
    
        const handleColorChange = (e) => {
            setBoxColorEditable(e.target.value)
        }
    
        return (
            <div>
                <button onClick={decrementSideLength}>Decrease Side Length by One</button>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div style={{backgroundColor: boxColorEditable, height: sideLength, width: sideLength, borderStyle: "solid"}} />
                </div>
                <div>The area of the box is {square} pixels.</div>
                <label>Set Box Color</label>
                <input value={boxColorEditable} onChange={handleColorChange}></input> 
                <div>This operation is run by {props.userId}</div>
            </div>
        )
    }

    return <CountdownComponent sideLength={50} boxColor={"red"} userId={userId}/>
}

export default CountdownComponentParent