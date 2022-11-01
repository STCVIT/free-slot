import Friday from "../Days/Friday";
import Monday from "../Days/Monday";
import Thursday from "../Days/Thursday";
import Tuesday from "../Days/Tuesday";
import Wednesday from "../Days/Wednesday";

export default [
        {
            linkName:"Mon",
            id: "mon",
            on: true,
            component: <Monday />
        },   
        {
            linkName:"Tue",
            id: "tue",
            on: false,
            component: <Tuesday />
        },
        {
            linkName:"Wed",
            id: "wed",
            on: false,
            component: <Wednesday />
        },   
        {
            linkName:"Thur",
            id: "thur",
            on: false,
            component: <Thursday />
        },  
        {
            linkName:"Fri",
            id: "fri",
            on: false,
            component: <Friday />
        }  
]