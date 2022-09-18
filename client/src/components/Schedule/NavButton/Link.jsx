import React from "react"
export default function Link(props) {
    const styles = {
        color: props.on ? "#222222" : "blue",
        textDecorationLine: props.on ? "underline" : "none",
    }
    
    return (
        <button 
            className="px-4 py-2 rounded-md"
            style={styles} 
            onClick={()=>{
                return props.toggle(props.id, props.component)
                }
            }
        >{props.linkName}
        </button>
    )
}