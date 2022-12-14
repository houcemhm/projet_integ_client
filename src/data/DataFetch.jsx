import React,{ useState,useEffect } from "react"
import axios from "axios"


function DataFetching() {
    const [hikes,setHikes] = useState([]);
useEffect(()=>{
    axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
    .then(res=>{
        console.log(res)
        setHikes(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
    
})
  return (
    <div>
<ul>
    {
        hikes.map(hike=>  (
           <li key={hike.id}>{hike.title}</li>
      )  )
    }
</ul>
    </div>
  )
}

export default DataFetching