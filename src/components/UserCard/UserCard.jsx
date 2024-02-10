/* eslint-disable react/prop-types */

// import css
import "./UserCard.css";

// import icons
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const UserCard = ({ user }) => {
  return (
    <div className="card flex items-center text-white h-[450px] mx-auto w-full lg:w-96 lg:mb-6">
      {/* avatar */}
      <div className="card-image">
        <img
          className="w-32"
          src={user?.image}
          alt="user image"
        />
      </div>

      {/* name */}
      <div className="card-title">
        <p>
          {user?.firstName} {user?.lastName}
        </p>
      </div>

      {/* user role */}
      <p className="mt-1 mb-3 text-sm text-gray-400">{user?.company?.title}</p>

      {/* user informations */}
      <div className="card-subtitle h-[100px] lg:h-[90px]">
        <p>
          {" "}
          <span className="font-bold">Email:</span> {user?.email}
        </p>
        <p>
          {" "}
          <span className="font-bold">Address:</span> {user?.address?.address},{" "}
          {user?.address?.city}
        </p>
        <p>
          {" "}
          <span className="font-bold">Company:</span> {user?.company?.name}
        </p>
      </div>

      {/* social media icons */}
      <div className="flex my-3 justify-center items-center gap-4 text-white">
        <CiTwitter size={30} />
        <CiFacebook size={30} />
        <CiInstagram size={30} />
      </div>

      {/* details button */}
      <div className="learn-btn">
        <button type="button">Know more</button>
      </div>
    </div>
  );
};

export default UserCard;
