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
    <div>
      <div className="h-16 bg-black"></div>
      <div className="max-w-screen-xl mx-auto mt-20">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src={user?.image} alt="user" />
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
            <div className="card-actions justify-end">
              <Link to="/" className="btn btn-success text-white">
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserDetails;
