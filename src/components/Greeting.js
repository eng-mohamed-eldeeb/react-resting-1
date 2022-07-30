import { useState } from "react"

const Greeting = () => {
    const [changeText, setChangeText] = useState(false);
    const btnHandler = () => {
        setChangeText((state) => {
            return !state
        })
    }
    return <div>
        <h2>hello worled</h2>
        {!changeText && <p>it's good to see you</p>}
        {changeText && <p>Changed</p>}
        <button onClick={btnHandler}>change text!</button>
    </div>
}

export default Greeting