// import banner video
import bannerVideo from "../../assets/videos/banner.mp4"
const Banner = () => {
    return(
        <div>
            <video className="w-full object-cover h-screen" src={bannerVideo} muted loop autoPlay></video> 
            {/* overlay */}
            <div className="absolute w-full h-screen top-0 left-0 bg-black/80"></div>

            {/*  */}
        </div>
    )}
export default Banner;