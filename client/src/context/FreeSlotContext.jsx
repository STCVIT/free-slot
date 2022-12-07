import React from 'react'
import { createContext, useContext, useState } from "react";
import axios from "axios";

const freeSlotContext = createContext();

export function FreeSlotContextProvider({ children }){
    const [data, setData] = useState([])
    const [link, setLink] = useState()
    const justFindFreeSlot = async (tags)=>{
        try {
            await axios.post("http://localhost:4000/timetable/freeslot", {
            members: tags
        })
        .then((res)=>{
            setData(res.data)
            console.log(res.data)
            console.log(typeof(res.data))
        })
        } catch (error) {
            console.error("justFindFreeSlot "+error)
        }
    }
    const saveTeamAndFindFreeSlot = async (teamName, tags)=>{
        try {
            await axios.post("http://localhost:4000/team/create", {
                team_name: teamName,
                members: tags
                })
            await axios.post("http://localhost:4000/timetable/freeslot", {
            members: tags
            })
            .then((res)=>{
                setData(res.data)
                console.log(res.data)
            })
        } catch (error) {
            console.error("saveTeamAndFindFreeSlot "+error)
        }
    }
    const getLink = async ()=>{
        try {
            await axios.get("http://localhost:4000/link")
            .then((res)=>{
                setLink(res)
            })
        } catch (error) {
            console.error("getLink "+error)
        }
    }
    return(
            <freeSlotContext.Provider 
            value={{justFindFreeSlot, saveTeamAndFindFreeSlot, data, setData, getLink, link, setLink}}>

                {children}
            </freeSlotContext.Provider>
    );
}
export const FindFreeSlot = ()=>{
    return useContext(freeSlotContext)
}