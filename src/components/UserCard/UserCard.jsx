import "./UserCard.css"
const UserCard = () => {
    return(
      <div className="card flex items-center">
      <div className="card-image">
        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="user image"/>
      </div>
      <div className="card-title">
        <p className="text-white">John Smith</p>
      </div>
      <div className="card-subtitle">
        <p>&#x3c;Frontend Developer &#x2215;&#62;</p>
      </div>
      <div className="social-links">
        <a href="#">
          <i data-feather="twitter" id="icon"></i>
        </a>
        <a href="#">
          <i data-feather="instagram" id="icon"></i>
        </a>
        <a href="#">
          <i data-feather="github" id="icon"></i>
        </a>
      </div>
      <div className="learn-btn">
        <button type="button">Know more</button>
      </div>
    </div>
    )}
export default UserCard;