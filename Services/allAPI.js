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