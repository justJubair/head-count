import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserDetails = () => {
  // user state
  const [user, setUser] = useState([]);

  // user unique id
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, [id]);

  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-screen-xl mx-auto pt-24 lg:pt-40 pb-12 px-6">
        <div className="flex items-start flex-col md:flex-row max-w-5xl mx-auto bg-gradient-to-t from-black to-green-800 shadow-xl p-4 rounded-lg">
          <figure>
            <img src={user?.image} alt="user" className="w-52 md:w-full"/>
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title">
              {user?.firstName} {user?.lastName}
            </h2>
            <p className="text-gray-400">{user?.company?.title}</p>

            {/* details */}
            <div className="text-gray-400 mt-5 space-y-1">
            <p className="text-start">
              <span className="font-bold">Age:</span> {user?.age}
            </p>
            <p className="text-start">
              <span className="font-bold">Gender:</span> {user?.gender}
            </p>
            <p className="text-start">
              <span className="font-bold">Email:</span> {user?.email}
            </p>
            <p className="text-start">
              <span className="font-bold">Address: </span>
              {user?.address?.address}, {user?.address?.state}, {user?.address?.city}
            </p>
            <p className="text-start">
     
     <span className="font-bold">Company:</span> {user?.company?.name}
   </p>
            </div>
            <div className="card-actions justify-end mt-4 md:mt-0">
              <Link to="/users" className="btn btn-success text-white">
                Go back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserDetails;
