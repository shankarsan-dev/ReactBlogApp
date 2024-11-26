import { useEffect, useState } from "react";
const useFetch = (url)=>{
  
    const [isLoading, SetLoading] = useState(true);
    const [error, setError] =  useState(null);
    const [data,setData] = useState( null);
    useEffect(()=>{
        const abortCont =new AbortController();

        setTimeout(()=>{
            fetch(url,{signal:abortCont.signal}).then(res=>{
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
                if(err.name == "AbortError"){
                    console.log("fetch aborted");
                }
                else{
                    setError(err.message);
                    SetLoading(false);
                }
              
            });
        },1000);
    return ()=>abortCont.abort();
        },[url]);

        return {data, isLoading, error}
}

export default useFetch;