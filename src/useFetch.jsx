import { useEffect, useState } from "react";
const useFetch = (url)=>{
  
    const [isLoading, SetLoading] = useState(true);
    const [error, setError] =  useState(null);
    const [data,setData] = useState( null);
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url).then(res=>{
                if(!res.ok){
                    throw Error("could not fetch the data for that resource");
                }
                else
                return res.json()}).then
               
            (data =>{
                console.log(data);
                    setData(data);
                    SetLoading(false);
                    setError(null);
    
    // npx json-server --watch data/db.json --port 8000
            })
            .catch(err=>{
               setError(err.message);
               SetLoading(false);
            });
        },1000);
    
        },[]);

        return {data, isLoading, error}
}

export default useFetch;