import { useState } from "react"

const ContactUs = () =>{
    const [name, setName] = useState();
    const [message, setMessage] = useState();
    const [msgLength, setMsgLength] = useState(0)
    const handleName=(e)=>{
        setName(e.target.value);
    }
    const handleMessage =(e) =>{
        setMessage(e.target.value);
        setMsgLength((e.target.value).length);
    }
    return(
        <div>
            <div>
            Contact Us
            </div>
            <div className="w-2/4 flex flex-col gap-y-3">
                <label for="contactUsName">
                    Name
                </label>
                <input id="contactUsName" style={{visibility:"hidden"}} placeholder="Name" onChange={handleName}/>
                <label for="contactUsMessasge">
                    Type a message
                </label>
                <div className="relative w-full">
                <textarea className="w-full pr-[25%] resize-none" rows={6} cols={6} id="contactUsMessage" maxLength={120} style={{textDecoration:"hidden"}} placeholder="Name" onChange={handleMessage}/>
                <h1 className="absolute top-2 right-5">{msgLength}/120</h1>
                {msgLength===120 && <h1 className="text-red-600">Max Length Reached</h1>}
                </div>
            </div>
        </div>
    )
}

export default ContactUs