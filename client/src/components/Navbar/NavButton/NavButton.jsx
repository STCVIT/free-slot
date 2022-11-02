import { useState} from "react"
import * as ReactDOM from 'react-dom';
import {Navbar, ProfileDropDown} from "./LinkData"
import Link from "./Link"
const NavButton =() => {
    const [squares, setSquares] = useState(Navbar)
    
    function toggle(id, component) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                ReactDOM.render(component, document.getElementById("mainDiv"))
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
const ProfileOptions =() => {
    const [squares, setSquares] = useState(ProfileDropDown)
    
    function toggle(id, component) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                ReactDOM.render(component, document.getElementById("mainDiv"))
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
export {NavButton, ProfileOptions};