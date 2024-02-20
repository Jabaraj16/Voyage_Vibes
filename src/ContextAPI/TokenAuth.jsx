import { createContext } from "react"
import { useEffect, useState } from "react"
import React from 'react'
export const tokenAuthenticationContext=createContext()
function TokenAuth({children}) {
    const [isAuthorised,setIsAuthorised]=useState(false)
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setIsAuthorised(true)
        }else{
            setIsAuthorised(false)
        }
    },[])
  return (
    <div>
        <tokenAuthenticationContext.Provider value={{isAuthorised,setIsAuthorised}}>
            {children}
        </tokenAuthenticationContext.Provider>
    </div>
  )
}

export default TokenAuth