import axios from "axios";
import { useMemo } from "react";

const useAxiosPublic = () => {
    const publicConnection = useMemo(()=>{
        return axios.create({
            baseURL: import.meta.env.VITE_LOCAL_SERVER
        })
    }, [])
    return publicConnection 
};

export default useAxiosPublic;