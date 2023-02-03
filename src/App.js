import Contact from "./Contact";
import axios from "axios";
import React,{ useEffect,useState } from "react";


function App() {

  const [members,setMembers] = useState([]);

  useEffect(()=>{
    axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then(res=>{
      console.log(res.data)
      setMembers(res.data)
    })
    .catch(err=>console.log("Err",err))
  },[])

  return (
    <div className="App">
      {members.map(member=>{
        console.log(member)
        return(
        <Contact member={member}></Contact>
        )
      })}
      
    </div>
  );
}

export default App;
