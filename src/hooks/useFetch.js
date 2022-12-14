import axios from "axios";
import { useEffect, useState } from "react";

const useFetch=(url,method,body)=>{
   const [loading,setLoading]= useState(false);
   const [data,setData]= useState([]);
   const [error,setError]=useState(false);
   useEffect(()=>{
const fetchData=async()=>{

try {
    setLoading(true);
    switch(method) {
case "GET":{

    const res= await axios.get(url)  ;
    setData(res.data);
}
case "POST":{
 
     const res= await axios.post(url,body)  ;
    setData(res.data);
}
}
} catch (error) {
    setError(true);
}
setLoading(false);
};
fetchData();
   },[url]);
   return {data,loading,error};

}
export default useFetch;