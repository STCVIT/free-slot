import React from "react"
export default function Link(props) {
    const styles = {
        color: "black",
        textDecorationLine: props.on ? "underline" : "none",
        fontWeight: props.on ? "bold" : "normal"
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