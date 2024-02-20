import { Server_URL } from "./ServerURL"
import { commonAPI } from "./commonAPI"

//register
export const registerAPI=async(user)=>{
    return await commonAPI("POST",`${Server_URL}/register`,user,"")
}

//login
export const loginAPI=async(user)=>{
    return await commonAPI("POST",`${Server_URL}/login`,user,"")
}

//addplace
export const addPlaceAPI=async(reqBody,reqHeader)=>{
    return  await commonAPI("POST",`${Server_URL}/addplace`,reqBody,reqHeader)
}

//gethome place
export const getHomePlaceAPI=async()=>{
    return await commonAPI("GET",`${Server_URL}/home-place`,{},"")
}

//get all place
export const getAllPlaceAPI=async(searchKey,reqHeader)=>{
    return await commonAPI("GET",`${Server_URL}/allplace?search=${searchKey}`,"",reqHeader)
}

//get user place
export const getUserPlaceAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${Server_URL}/userplace`,"",reqHeader)
}

//edit place
export const editPlaceAPI=async(id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${Server_URL}/place/edit/${id}`,reqBody,reqHeader)
}

//remove place
export const removePlaceAPI=async(pid,reqHeader)=>{
    return await commonAPI("DELETE",`${Server_URL}/place/delete/${pid}`,{},reqHeader)
}

//delete user
export const deleteUserAPI=async(reqHeader)=>{
    return await commonAPI("DELETE",`${Server_URL}/profile/delete`,{},reqHeader)
}