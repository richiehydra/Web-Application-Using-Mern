import logo from './logo.svg';
import './App.css';
import Axios from "axios"
import {useState,useEffect} from "react"
function App()
{


const [List,user]=useState([]);
useEffect(()=>
{
  Axios.get("http://localhost:3001/getusers")
  .then((response)=>
  {
   user(response.data)
  })
},[])
const[name,setname]=useState("");
const [age,Setage]=useState(0)

const postdata=()=>
{
  Axios.post("http://localhost:3001/create",
  {
name:name,
age:age
  })
  .then((response)=>
  {
    alert("user created")
    console.log(response)
  })
}

  return (
    <div className="App">
    <div className="usersdisplay">
      {
 
        List.map((user)=>
        {
          return(
      
            <div className='container'>
            <h1>Name:{user.name}</h1>
            <h1>Age:{user.age}</h1>
           
            </div>
         
          )
        })
    
      }
    </div>
    <div>
    <input type="text"  onChange={(e)=>setname(e.target.value)} placeholder="name"></input>
             <input type="text" onChange={(e)=>Setage(e.target.value)} placeholder="age"></input>
             <button type="submit" onClick={postdata}>Submit</button>
           
    </div>
   </div>
  );
}

export default App;
