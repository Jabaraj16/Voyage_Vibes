import React from 'react'
import { createContext, useState } from 'react'
export const addPlaceResponseContext=createContext()
export const editPlaceContextResponse=createContext()
export const removePlaceContextResponse=createContext()
function ContextShare({children}) {
    const [addPlaceResponse,setAddPlaceResponse]=useState("")
    const [editPlaceResponse,setEditPlaceResponse]=useState("")
    const [removePlaceResponse,setRemovePlaceResponse]=useState("")
  return (
    <>
      <addPlaceResponseContext.Provider value={{addPlaceResponse,setAddPlaceResponse}}>  
        <editPlaceContextResponse.Provider value={{editPlaceResponse,setEditPlaceResponse}}>
            <removePlaceContextResponse.Provider value={{removePlaceResponse,setRemovePlaceResponse}}>
                {children}
            </removePlaceContextResponse.Provider>
        </editPlaceContextResponse.Provider>
     </addPlaceResponseContext.Provider>
    </>
  )
}

export default ContextShare