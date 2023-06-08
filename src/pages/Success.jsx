import { useLocation } from "react-router"
import React from "react"
const Success = () => {
    const location = useLocation()
    console.log(location)
    return(
        <div>
            Successfull
        </div>
    )
}

export default Success