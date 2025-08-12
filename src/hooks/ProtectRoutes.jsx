import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getFromLocalStorage } from "../utils/Helpers"

const ProtectRoutes = () => {

    const navigator = useNavigate()
    
    useEffect(()=> {
        const token = getFromLocalStorage('access_token')

        if(!token) {
            navigator('login')
        }
    },[])
    return(
        <></>
    )
}

export default ProtectRoutes
