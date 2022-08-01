import { useState } from "react"
import OutPut from "./Output";
const Greeting = () => {
    const [changeText, setChangeText] = useState(false);
    const btnHandler = () => {
        setChangeText((state) => {
            return !state
        })
    }
    return <div>
        <h2>hello worled</h2>
        {!changeText && <OutPut>it's good to see you</OutPut>}
        {changeText && <OutPut>Changed</OutPut>}
        <button onClick={btnHandler}>change text!</button>
    </div>
}

export default Greeting