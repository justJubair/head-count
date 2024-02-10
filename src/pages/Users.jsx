import { useEffect, useState } from "react";
import UserCard from "../components/UserCard/UserCard";

const Users = () => {
    // users state
    const [users, setUsers] = useState([])
    useEffect(()=>{
      fetch("https://dummyjson.com/users")
      .then(res=> res.json())
      .then(data=>setUsers(data.users))
    },[])
    console.log(users)
    return(
        <div>
          <UserCard/>
        </div>
    )}
export default Users;