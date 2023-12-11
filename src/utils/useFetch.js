import { useState } from "react";



const useFetch = (url) => {

    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(process.env.REACT_APP_BASE_URL+url);
            const res = await response.json();
            setData(res.hits);
        }
        catch (error) {
            console.log(error.message);
        }
    }

    return {data,setData,fetchData};
}
export default useFetch;