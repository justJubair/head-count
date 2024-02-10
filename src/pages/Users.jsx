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
 
    return(
        <div className="max-w-screen-xl mx-auto grid gap-10 lg:grid-cols-3 ">
         {
          users?.map(user=> <UserCard key={user?.id} user={user}/>)
         }
        </div>
    )}
export default Users;