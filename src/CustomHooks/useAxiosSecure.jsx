import axios from "axios";
import { useMemo } from "react";

const useAxiosSecure = () => {
    const secureConnection = useMemo(()=>{
        return axios.create({
            baseURL: import.meta.env.VITE_SERVER_LINK
        })
    }, [])
    return secureConnection
};

export default useAxiosSecure;