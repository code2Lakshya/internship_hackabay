import { useState } from "react";



const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loader, setLoader] = useState(false);

    const fetchData = async (type=false) => {
        try {
            setLoader(true);
            const response = await fetch(process.env.REACT_APP_BASE_URL + url);
            const res = await response.json();
            setData(!type ? res.hits: res);
            setLoader(false);
        }
        catch (error) {
            console.log(error.message);
            setLoader(false);
        }
    }

    return { data, setData, fetchData ,loader,setLoader};
}
export default useFetch;