// import banner video
import bannerVideo from "../../assets/videos/banner.mp4"
const Banner = () => {
    return(
        <div className="relative">
            <video className="w-full object-cover h-screen" src={bannerVideo} muted loop autoPlay></video> 
            {/* overlay */}
            <div className="absolute w-full h-screen top-0 left-0 bg-black/80"></div>

            {/* banner text */}
            <div className="absolute top-1/3 text-center left-1/2 -translate-x-1/2 -translate-y-1/3 w-1/2">
                
                <h1 className="text-5xl font-extrabold leading-snug bg-gradient-to-r from-amber-200 to-lime-500 text-transparent bg-clip-text">Empowering Connections, Simplifying Control.</h1>
               
                
            </div>
        </div>
    )}
export default Banner;