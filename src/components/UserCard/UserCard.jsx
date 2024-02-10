/* eslint-disable react/prop-types */

// import css
import "./UserCard.css";

// import icons
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const UserCard = ({user}) => {

  return (
    <div className="card flex items-center">
      <div className="card-image">
        <img
          className="w-48 md:w-52 lg:w-60"
          src={user?.image}
          alt="user image"
        />
      </div>
      <div className="card-title">
        <p >{user?.firstName} {user?.lastName}</p>
      </div>
      <p className="my-2 text-sm text-gray-800">{user?.company?.title}</p>
      <div className="card-subtitle">
       <p> <span className="font-bold">Email:</span> {user?.email}</p>
       <p> <span className="font-bold">Address:</span> {user?.address?.address}, {user?.address?.city}</p>
       <p> <span className="font-bold">Company:</span> {user?.company?.name}</p>

      </div>
      <div className="flex my-3 items-center gap-4 text-white">
        <CiTwitter size={30} />
        <CiFacebook size={30} />
        <CiInstagram size={30} />
      </div>
      <div className="learn-btn">
        <button type="button">Know more</button>
      </div>
    </div>
  );
};



export default UserCard;
