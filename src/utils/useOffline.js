import { useState,useEffect } from "react"

const useOffline=()=>{
    const [onlineStatus,setonlinestatus]=useState(true)

    useEffect(()=>{
        window.addEventListener("online",()=>{
            setonlinestatus(true)
        })
         window.addEventListener("offline",()=>{
            setonlinestatus(false)
        })
    },[])
    return onlineStatus
}
export default useOffline;