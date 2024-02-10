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
        <div className="max-w-screen-xl mx-auto grid gap-5 lg:gap-7 grid-cols-1  md:grid-cols-2 lg:grid-cols-4 px-5 lg:px-0">
         {
          users?.map(user=> <UserCard key={user?.id} user={user}/>)
         }
        </div>
    )}
export default Users;