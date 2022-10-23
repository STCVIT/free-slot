import { useState} from "react"
import * as ReactDOM from 'react-dom';
import links from "./LinkData"
import Link from "./Link"
const NavButton =() => {
    const [squares, setSquares] = useState(links)
    
    function toggle(id, component) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                ReactDOM.render(component, document.getElementById("myTabContent"))
                return(
                    square.id === id ? {...square, on: true} : {...square, on: false}
                )
            })
        })
    }   
    const squareElements = squares.map(square => (
        <Link 
            linkName={square.linkName} 
            id={square.id}
            on={square.on} 
            toggle={toggle}
            component={square.component}
        />
    ))
    return (
        <ul className="flex gap-x-3 w-full justify-between">
            {squareElements}
        </ul>
    )
}
export default NavButton;