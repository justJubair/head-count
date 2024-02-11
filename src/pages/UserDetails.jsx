import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
      // user state
  const [user, setUser] = useState([]);

    // user unique id
    const {id} = useParams()
    console.log(id)
    useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setUser(data)
          });
      }, [id]);
    console.log(user)
    return(
        <div>
             <p> HELLO I Am UserDetails </p>
        </div>
    )}
export default UserDetails;