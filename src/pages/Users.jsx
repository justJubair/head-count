import { useEffect, useState } from "react";
import UserCard from "../components/UserCard/UserCard";

const Users = () => {
  // users state
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <>
    <div className="h-16 bg-black"></div>
    <div className="">
    
      {/* heading and search bar */}
      <div className=" pt-12 pb-12">
          {/* heading */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-lime-700 text-center border-lime-400 lg:w-[550px] mx-auto animate-pulse mb-6 ">Welcome to your user database</h1>
        <form className="flex items-center gap-4 justify-center">
          <input
            type="text"
            placeholder="Search users"
            className="input input-bordered input-success w-full max-w-xs"
          />
          <select defaultValue="name" className="select select-success w-full max-w-xs">
            <option disabled value="default">
              Search by
            </option>
            <option value="name">Sort by name</option>
            <option value="email">Sort by email</option>
            <option value="company">Sort by company name</option>
            
          </select>
        </form>
        <button className="btn uppercase btn-success text-white">Add new user</button>
      </div>
      <div className="max-w-screen-xl px-5 mx-auto grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0">
        {users?.map((user) => (
          <UserCard key={user?.id} user={user} />
        ))}
      </div>
    </div>
    </>
  );
};
export default Users;
