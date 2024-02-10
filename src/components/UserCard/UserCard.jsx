// import css
import "./UserCard.css";

// import icons
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const UserCard = () => {
  return (
    <div className="card flex items-center">
      <div className="card-image">
        <img
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="user image"
        />
      </div>
      <div className="card-title">
        <p >John Smith</p>
      </div>
      <div className="card-subtitle">
       <p> <span className="font-bold">Email:</span> jubair.ahmed@gmail.com</p>
       <p> <span className="font-bold">Address:</span> 232/4 Goran Dhaka</p>
       <p> <span className="font-bold">Company:</span> Meta</p>

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
