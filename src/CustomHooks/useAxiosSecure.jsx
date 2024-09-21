import axios from "axios";
import { useMemo } from "react";

const useAxiosSecure = () => {
    const secureConnection = useMemo(()=>{
        return axios.create({
            baseURL: import.meta.env.VITE_LOCAL_SERVER
        })
    }, [])
    return secureConnection
};

export default useAxiosSecure;