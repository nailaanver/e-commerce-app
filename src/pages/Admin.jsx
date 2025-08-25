import { useEffect, useState } from "react"
import { getFromLocalStorage } from "../utils/Helpers"
import AdminDashboard from "../components/AdminDashboard"

const AdminPage = () => {

    const [role, setRole] = useState(null)
    useEffect(()=> {
        const userData = getFromLocalStorage('user_data')
        
        setRole(JSON.parse(userData).role)
    }, [])

    if (!role) {

        return <p>admni</p>
    } else if (role === 'admin') {

        return <AdminDashboard/>
    } else {

        return <p>Unauthorized user</p>
    }
}

export default AdminPage